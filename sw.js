const CACHE_NAME = 'metopen-v12';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './metopen_study_cards.html',
    './metopen_quiz.html',
    './metopen_isian.html',
    './metopen_flashcards.html',
    './question_bank_100.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

self.addEventListener('install', event => {
    // Force the new SW to activate immediately, skipping the waiting phase
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', event => {
    // DO NOT intercept blob: or data: URLs (Fixes PDF UUID download bug)
    if (event.request.url.startsWith('blob:') || event.request.url.startsWith('data:')) {
        return;
    }

    const url = new URL(event.request.url);

    // NETWORK-FIRST strategy for HTML files — always try to get the latest version
    if (event.request.destination === 'document' || url.pathname.endsWith('.html')) {
        event.respondWith(
            fetch(event.request)
                .then(networkResponse => {
                    // Update the cache with the fresh response
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                    return networkResponse;
                })
                .catch(() => {
                    // If network fails, fall back to cache
                    return caches.match(event.request);
                })
        );
        return;
    }

    // CACHE-FIRST strategy for all other assets (JS, CSS, fonts, images)
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(networkResponse => {
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                return networkResponse;
            });
        })
    );
});

// Clean up old caches and claim all clients immediately
self.addEventListener('activate', event => {
    event.waitUntil(
        Promise.all([
            // Delete all old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== CACHE_NAME) {
                            return caches.delete(cache);
                        }
                    })
                );
            }),
            // Take control of all open tabs immediately without requiring a refresh
            self.clients.claim()
        ])
    );
});
