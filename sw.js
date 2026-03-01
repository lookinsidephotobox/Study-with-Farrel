const CACHE_NAME = 'metopen-v9';
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

    event.respondWith(
        caches.match(event.request).then(response => {
            // return cached version or fetch from network
            return response || fetch(event.request);
        })
    );
});

// Clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
