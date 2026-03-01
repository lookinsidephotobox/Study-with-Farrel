const bank = [

    // ══════════════════════════════════════════════════════════════════
    // P1 — KONSEP DASAR PENELITIAN (Q1–Q20)
    // ══════════════════════════════════════════════════════════════════
    {
        id: "q1", cat: "P1",
        text: "Apa tujuan penelitian menurut Prof. Sugiyono yang bertujuan untuk memperdalam dan memperluas pengetahuan yang telah ada?",
        options: ["Penemuan", "Pembuktian", "Pengembangan", "Deskriptif", "Eksperimen"],
        correct: 2,
        hint: "Tiga tujuan menurut Prof. Sugiyono adalah penemuan, pembuktian, dan pengembangan. Memperluas berhubungan dengan meng-kembangkan sesuatu.",
        explanation: "Pengembangan bertujuan memperdalam dan memperluas pengetahuan yang telah ada, berbeda dengan penemuan (hal baru) dan pembuktian (menguji keraguan)."
    },
    {
        id: "q2", cat: "P1",
        text: "Berikut ini yang termasuk dalam proses Scientific Research pada tahap pertama adalah...",
        options: ["Analisis Data", "Definisi Konseptual", "Hipotesis", "Formulasi Topik", "Pengumpulan Data"],
        correct: 3,
        hint: "Langkah pertama sebelum melakukan hal lain dalam riset adalah menentukan apa yang mau dibahas.",
        explanation: "8 Langkah Scientific Research diawali dengan Formulasi Topik, kemudian Hipotesis, Definisi Konseptual, Operasional, Pengumpulan Data, Analisis, Uji, dan Kesimpulan."
    },
    {
        id: "q3", cat: "P1",
        text: "Penelitian dasar (Basic Research) yang berfokus pada penemuan ilmu baru paling cocok menggunakan metode...",
        options: ["Eksperimen & Survey", "Survey & Kualitatif", "Eksperimen & Kualitatif", "Naturalistik & Survey", "R&D & Deskriptif"],
        correct: 2,
        hint: "Cocok dengan eksperimen di lab dan pendekatan yang meneliti fenomena alamiah/artistik untuk ilmu baru.",
        explanation: "Basic research (penemuan ilmu baru) paling cocok dengan metode Eksperimen & Kualitatif."
    },
    {
        id: "q4", cat: "P1",
        text: "Penelitian yang berfokus pada penerapan ilmu/produk untuk memecahkan masalah kehidupan sesungguhnya disebut penelitian...",
        options: ["Dasar (Basic)", "Pengembangan (R&D)", "Terapan (Applied)", "Eksperimental Murni", "Naturalistik"],
        correct: 2,
        hint: "Tujuan utama penelitian ini adalah untuk 'menerapkan' metode dan sistem demi memecahkan masalah praktis.",
        explanation: "Penelitian terapan (Applied Research) bertujuan menerapkan penelitian di dunia nyata secara langsung, berlawanan dengan penelitian dasar yang berfokus ke penemuan teori baru."
    },
    {
        id: "q5", cat: "P1",
        text: "Metode penelitian yang tempatnya alamiah dan TIDAK ADA perlakuan dari peneliti, di mana peneliti mengumpulkan data berdasarkan pandangan sumber data, adalah...",
        options: ["Eksperimen", "Kuantitatif", "Survey", "Naturalistik", "Grounded Theory"],
        correct: 3,
        hint: "Berasal dari kata sifat alam, atau 'apa adanya' tanpa treatment buatan.",
        explanation: "Metode naturalistik (atau kualitatif) melihat situasi berdasarkan kenyataan tanpa memanipulasi atau memberikan 'treatment' eksperimen kepada partisipan."
    },
    {
        id: "q6", cat: "P1",
        text: "Proses yang terorganisir, sistematis, berdasarkan data, kritis, objektif, investigasi terhadap suatu permasalahan, dalam rangka menemukan jawaban/solusi yang tepat adalah definisi penelitian menurut...",
        options: ["Prof. Dr. Sugiyono", "Jovita Kaur", "Roscoe", "Osgood", "Thurstone"],
        correct: 1,
        hint: "Namanya berawalan huruf J.",
        explanation: "Definisi Jovita Kaur menekankan pada proses sistematis, berbasis data, dan pencarian solusi yang objektif."
    },
    {
        id: "q7", cat: "P1",
        text: "Menurut Prof. Sugiyono, penelitian yang bertujuan untuk membuktikan adanya keragu-raguan terhadap informasi atau pengetahuan tertentu disebut...",
        options: ["Penemuan (Discovery)", "Pengembangan (Development)", "Pembuktian (Verification)", "Penerapan (Applied)", "Eksplorasi (Exploration)"],
        correct: 2,
        hint: "Sesuai dengan kata 'membuktikan' keraguan.",
        explanation: "Penemuan untuk hal baru, pembuktian (verification) untuk menguji keragu-raguan, dan pengembangan untuk memperdalam ilmu yang sudah ada."
    },
    {
        id: "q8", cat: "P1",
        text: "Data yang baik harus memiliki derajat ketepatan antara data yang sesungguhnya terjadi pada objek dengan data yang dikumpulkan oleh peneliti. Persyaratan data ini disebut...",
        options: ["Reliabel", "Objektif", "Sistematis", "Valid", "Representatif"],
        correct: 3,
        hint: "Sesuatu yang tepat dan akurat disebut...",
        explanation: "Valid berarti memiliki derajat ketepatan. Reliabel berarti konsisten, objektif berarti bebas dari bias peneliti."
    },
    {
        id: "q9", cat: "P1",
        text: "Pada tahap 'The Aims of Research', setelah observasi dan membuat hipotesis, langkah berikutnya untuk menentukan penyebab suatu fenomena dilakukan dengan cara...",
        options: ["Mereview literatur lama", "Memperoleh data numerik dan menggunakan uji statistik", "Membuat kesimpulan langsung", "Merumuskan variabel penelitian", "Melakukan wawancara mendalam"],
        correct: 1,
        hint: "Penyebab dibuktikan dengan angka dan perhitungan, bukan hanya kata-kata.",
        explanation: "Determination of the Causes dilakukan dengan memperoleh data numerik dan menggunakan salah satu dari banyak uji statistik untuk membuktikan atau menyangkal hipotesis."
    },
    {
        id: "q10", cat: "P1",
        text: "Contoh yang tepat untuk menggambarkan metode penelitian Eksperimen adalah...",
        options: ["Meneliti kebiasaan makan masyarakat di pasar tradisional", "Pengaruh ruang kerja ber-AC terhadap produktivitas kerja di laboratorium", "Mengamati perilaku sosial tanpa intervensi", "Mengumpulkan data sensus penduduk", "Mewawancarai tokoh masyarakat di desa"],
        correct: 1,
        hint: "Metode eksperimen dilakukan di lab dengan adanya perlakuan (treatment).",
        explanation: "Metode Eksperimen dilakukan di laboratorium dengan adanya perlakuan. Contoh: pengaruh ruang kerja ber-AC terhadap produktivitas kerja."
    },
    {
        id: "q11", cat: "P1",
        text: "Salah satu sumber masalah penelitian yang berasal dari temuan kontradiktif dalam literatur ilmiah adalah...",
        options: ["Pengalaman pribadi peneliti", "Kekurangan dalam teori (Theory Gap)", "Penelitian eksplorasi lapangan", "Analogi dari penelitian lain", "Data sekunder BPS"],
        correct: 1,
        hint: "Literatur ilmiah bisa mengungkap teori yang belum sempurna atau bertentangan.",
        explanation: "Kekurangan dalam teori adalah salah satu sumber masalah penelitian dari literatur ilmiah, selain pengalaman pribadi. Peneliti membaca literatur dan menemukan bidang yang tidak cukup atau teori yang kontradiktif."
    },
    {
        id: "q12", cat: "P1",
        text: "Hipotesis yang baik harus dinyatakan dalam bentuk yang dapat diuji untuk kemungkinan benar atau salah. Istilah ilmiahnya adalah hipotesis harus bersifat...",
        options: ["Induktif", "Deduktif", "Falsifiable (dapat dibuktikan salah)", "Holistik", "Generalisasi"],
        correct: 2,
        hint: "Sebuah pernyataan ilmiah harus bisa diuji kemungkinan salahnya.",
        explanation: "Hipotesis yang baik harus falsifiable, artinya harus dapat diuji dan memungkinkan untuk benar atau salah agar menghasilkan kesimpulan empiris atau operasional."
    },
    {
        id: "q13", cat: "P1",
        text: "Dalam Scientific Research, setelah Formulasi Topik dan Hipotesis, langkah ketiga adalah...",
        options: ["Pengumpulan Data", "Analisis Data", "Definisi Konseptual", "Definisi Operasional", "Uji Hipotesis"],
        correct: 2,
        hint: "Urutan: Topik → Hipotesis → ? → Operasional → Pengumpulan Data",
        explanation: "Urutan 8 langkah: 1.Formulasi Topik, 2.Hipotesis, 3.Definisi Konseptual, 4.Definisi Operasional, 5.Pengumpulan Data, 6.Analisis Data, 7.Uji/Revisi Hipotesis, 8.Kesimpulan."
    },
    {
        id: "q14", cat: "P1",
        text: "Penelitian Pengembangan (R&D) paling tepat menggunakan kombinasi metode...",
        options: ["Eksperimen & Kualitatif saja", "Naturalistik & Deskriptif", "Survey, Kualitatif, dan Eksperimen", "Komparatif & Asosiatif", "Observasi & Sensus"],
        correct: 2,
        hint: "R&D melibatkan temuan, pengembangan, dan pengujian — sehingga membutuhkan lebih dari satu metode.",
        explanation: "Penelitian Pengembangan (R&D) menggunakan kombinasi Survey, Kualitatif, dan Eksperimen karena mencakup penemuan, pengembangan sekaligus pengujian produk."
    },
    {
        id: "q15", cat: "P1",
        text: "Tujuan utama dari tahap 'Explain' dalam The Aims of Research adalah...",
        options: ["Mengumpulkan data kuantitatif sebanyak-banyaknya", "Menjawab 'Mengapa?' dan 'Bagaimana?' suatu fenomena terjadi", "Membuat prediksi (hipotesis) awal", "Menentukan teknik sampling yang tepat", "Melakukan observasi awal di lapangan"],
        correct: 1,
        hint: "Setelah mengetahui penyebabnya, peneliti perlu menjelaskan mekanismenya.",
        explanation: "Tahap Explain bertujuan menemukan penjelasan tentang 'Mengapa?' dan 'Bagaimana?' hal tersebut terjadi. Peneliti harus menetapkan penyebab dan hubungan mendasar yang memicu tren, perlu meninjau penelitian sebelumnya."
    },
    {
        id: "q16", cat: "P1",
        text: "Penelitian dapat disebut ilmiah apabila merupakan proses yang terorganisasi, sistematis, dan...",
        options: ["Subjektif dan personal", "Berdasarkan asumsi peneliti", "Berdasarkan data, kritis, dan objektif", "Tidak perlu diuji kebenarannya", "Bebas dari hipotesis awal"],
        correct: 2,
        hint: "Penelitian ilmiah harus menjauhi bias dan bersandar pada data.",
        explanation: "Penelitian ilmiah (scientific research) harus terorganisasi, sistematis, berdasarkan data, kritis, dan objektif — bukan berdasarkan asumsi atau pendapat pribadi."
    },
    {
        id: "q17", cat: "P1",
        text: "Membaca literatur secara komprehensif sebelum memulai penelitian berfungsi untuk...",
        options: ["Memastikan penelitian tidak perlu hipotesis", "Menentukan batas-batas bidang penelitian dan menghindari pengulangan", "Menggantikan pengumpulan data primer", "Mengurangi jumlah sampel yang dibutuhkan", "Mempermudah pengolahan data statistik"],
        correct: 1,
        hint: "Dengan membaca literatur, peneliti tahu apa yang sudah ada dan apa yang belum.",
        explanation: "Survey literatur membantu peneliti menentukan batas-batas bidangnya, menghindari pengulangan penelitian yang sudah ada, dan mengembangkan sikap kritis terhadap penelitian orang lain."
    },
    {
        id: "q18", cat: "P1",
        text: "Formulasi hipotesis secara induktif berarti...",
        options: ["Hipotesis diturunkan dari teori yang sudah ada", "Hipotesis dibuat dari pengamatan perilaku dan memperhatikan tren atau kemungkinan hubungan", "Hipotesis berasal dari konsultasi dengan ahli", "Hipotesis ditetapkan berdasarkan logika deduktif murni", "Hipotesis diperoleh dari analogi lintas disiplin ilmu"],
        correct: 1,
        hint: "Induktif = dari hal-hal khusus (pengamatan) menuju ke kesimpulan umum.",
        explanation: "Formulasi hipotesis secara induktif dilakukan dengan membuat pengamatan perilaku terlebih dahulu, kemudian memperhatikan tren atau kemungkinan hubungan yang ada."
    },
    {
        id: "q19", cat: "P1",
        text: "Yang dimaksud dengan 'Identifikasi Masalah' dalam konteks penelitian adalah...",
        options: ["Menyusun instrumen kuesioner", "Situasi yang menyebabkan peneliti merasa khawatir/tidak nyaman dan melibatkan pertanyaan 5W", "Proses analisis data kuantitatif", "Penetapan teknik sampling", "Penyusunan landasan teori"],
        correct: 1,
        hint: "Masalah penelitian selalu berangkat dari rasa tidak nyaman peneliti terhadap suatu situasi.",
        explanation: "Masalah penelitian adalah situasi yang menyebabkan peneliti merasa khawatir dan tidak nyaman, melibatkan pertanyaan Siapa? Apa? Dimana? Kapan? dan Mengapa?"
    },
    {
        id: "q20", cat: "P1",
        text: "Dalam urutan The Aims of Research, 'Predict' (membuat hipotesis) berada pada urutan ke...",
        options: ["Pertama (1)", "Kedua (2)", "Ketiga (3)", "Keempat (4)", "Kelima (5)"],
        correct: 1,
        hint: "Sebelum memprediksi, peneliti harus mengamati dulu.",
        explanation: "Urutan: 1) Observation & Description → 2) Predict (Hipotesis) → 3) Determination of the Causes → 4) Explain. Jadi 'Predict' berada di urutan ke-2."
    },

    // ══════════════════════════════════════════════════════════════════
    // P2 — KUANTITATIF VS KUALITATIF & VARIABEL (Q21–Q45)
    // ══════════════════════════════════════════════════════════════════
    {
        id: "q21", cat: "P2",
        text: "Dalam aksioma penelitian, sifat realitas pada metode Kualitatif adalah...",
        options: ["Konkrit, teramati, terukur", "Ganda, holistik, dinamis", "Tunggal, statis, prediktif", "Bebas nilai", "Hubungan sebab-akibat (kausal)"],
        correct: 1,
        hint: "Bukan sesuatu yang terukur secara pasti dan tunggal, melainkan hasil konstruksi pemahaman yang luas.",
        explanation: "Metode kualitatif melihat realitas sebagai ganda, holistik, dinamis, hasil konstruksi & pemahaman. Sementara kuantitatif melihat realitas sebagai konkrit, teramati, dan terukur."
    },
    {
        id: "q22", cat: "P2",
        text: "Variabel yang secara teoritis mempengaruhi (memperkuat atau memperlemah) hubungan antara variabel independen dan dependen disebut variabel...",
        options: ["Intervening", "Kontrol", "Moderator", "Asosiatif", "Komparatif"],
        correct: 2,
        hint: "Dia punya fungsi untuk memoderasi hubungan antara sebab dan akibat.",
        explanation: "Variabel Moderator adalah variabel yang mempengaruhi (memperkuat/memperlemah) hubungan antara IV dan DV dan dapat diukur. (Intervening tidak dapat diukur/diamati langsung)."
    },
    {
        id: "q23", cat: "P2",
        text: "Rumusan masalah yang menanyakan hubungan antara dua variabel atau lebih disebut rumusan masalah...",
        options: ["Komparatif", "Asosiatif", "Deskriptif", "Eksploratif", "Deduktif"],
        correct: 1,
        hint: "Berasal dari kata asosiasi (hubungan/keterkaitan).",
        explanation: "Asosiatif adalah rumusan masalah yang menanyakan hubungan dua variabel/lebih (contoh: hubungan antara motivasi belajar dan indeks prestasi)."
    },
    {
        id: "q24", cat: "P2",
        text: "Hubungan antara peneliti dengan yang diteliti pada metode penelitian Kuantitatif adalah...",
        options: ["Interaktif supaya memperoleh makna", "Independen supaya terbangun objektivitas", "Saling bergantungan (Dependen)", "Timbal balik / resiprokal", "Terikat nilai-nilai peneliti"],
        correct: 1,
        hint: "Peneliti harus menjaga jarak agar datanya tidak memihak.",
        explanation: "Dalam penelitian kuantitatif, peneliti harus bersifat independen dan menjaga jarak agar objektivitas terbangun. Di kualitatif, peneliti harus interaktif untuk menggali makna terdalam."
    },
    {
        id: "q25", cat: "P2",
        text: "Rumusan masalah 'Adakah perbedaan kualitas manajemen di perusahaan A dan B?' menggunakan bentuk rumusan masalah...",
        options: ["Asosiatif", "Deskriptif", "Komparatif", "Eksploratif", "Struktural"],
        correct: 2,
        hint: "Kata dasarnya adalah 'compare' atau membandingkan.",
        explanation: "Rumusan komparatif digunakan untuk membandingkan keadaan variabel yang sama pada sampel, populasi, atau waktu yang berbeda."
    },
    {
        id: "q26", cat: "P2",
        text: "Variabel yang dikendalikan atau dibuat konstan sehingga pengaruh variabel independen terhadap dependen tidak dipengaruhi faktor luar disebut...",
        options: ["Variabel Moderator", "Variabel Intervening", "Variabel Kontrol", "Variabel Bebas", "Variabel Konsekuen"],
        correct: 2,
        hint: "Kata kuncinya adalah 'dikendalikan' agar konstan.",
        explanation: "Variabel kontrol dikendalikan agar pengaruh IV terhadap DV tidak dipengaruhi faktor luar. Sering digunakan pada studi komparatif."
    },
    {
        id: "q27", cat: "P2",
        text: "Pola pikir yang menunjukkan hubungan antara variabel yang diteliti, mencerminkan rumusan masalah, teori, hipotesis, dan teknik analisis statistik disebut...",
        options: ["Landasan Teori", "Kerangka Berpikir", "Paradigma Penelitian", "Desain Eksperimen", "Conceptual Definition"],
        correct: 2,
        hint: "Sering diartikan sebagai cara pandang utama yang memandu seluruh alur metodologi.",
        explanation: "Paradigma Penelitian adalah pola pikir hubungan variabel yang digunakan untuk menentukan jumlah rumusan masalah, teori, hipotesis, dan jenis analisis statistik."
    },
    {
        id: "q28", cat: "P2",
        text: "Variabel yang secara teoritis mempengaruhi hubungan antara variabel independen dan dependen menjadi tidak langsung dan TIDAK DAPAT diamati/diukur adalah...",
        options: ["Variabel Moderator", "Variabel Bebas", "Variabel Intervening", "Variabel Kontrol", "Variabel Dependen"],
        correct: 2,
        hint: "Bedanya dengan moderator, variabel ini bersifat laten (tidak bisa diukur langsung).",
        explanation: "Variabel Intervening mempengaruhi hubungan IV–DV secara tidak langsung dan tidak dapat diamati/diukur secara nyata, berbeda dengan Moderator yang dapat diukur."
    },
    {
        id: "q29", cat: "P2",
        text: "Pada metode kuantitatif, hubungan variabel bersifat kausal yang berarti...",
        options: ["Timbal balik / interaktif (X ↔ Y)", "Sebab-akibat searah (X → Y)", "Ganda dan holistik", "Terikat oleh konteks dan waktu", "Tidak dapat diukur secara empiris"],
        correct: 1,
        hint: "Kausal berasal dari kata 'cause' (sebab).",
        explanation: "Dalam kuantitatif, hubungan variabel bersifat kausal (sebab-akibat): X → Y. Dalam kualitatif, hubungan bersifat timbal balik/interaktif (X ↔ Y)."
    },
    {
        id: "q30", cat: "P2",
        text: "Kemampuan generalisasi pada metode kualitatif disebut 'Transferability' yang artinya...",
        options: ["Hasil penelitian berlaku universal untuk semua konteks", "Hasil hanya dapat ditransfer dalam ikatan konteks dan waktu tertentu", "Peneliti bebas menggeneralisasi ke populasi mana saja", "Generalisasi dapat dilakukan asalkan sampel besar", "Hasil penelitian selalu dapat direplikasi"],
        correct: 1,
        hint: "Kualitatif bersifat kontekstual, tidak bisa sembarangan digeneralisasi.",
        explanation: "Transferability pada kualitatif berarti kemungkinan generalisasi hanya dalam ikatan konteks dan waktu tertentu, berbeda dengan kuantitatif yang cenderung membuat generalisasi luas."
    },
    {
        id: "q31", cat: "P2",
        text: "Alur proses penelitian kuantitatif yang benar adalah...",
        options: [
            "Analisis Data → Hipotesis → Populasi & Sampel → Kesimpulan",
            "Rumusan Masalah → Landasan Teori → Hipotesis → Populasi & Sampel → Instrumen → Pengumpulan Data → Analisis → Kesimpulan",
            "Hipotesis → Rumusan Masalah → Populasi → Analisis → Kesimpulan",
            "Pengumpulan Data → Analisis → Hipotesis → Rumusan Masalah",
            "Populasi → Instrumen → Hipotesis → Landasan Teori → Analisis"
        ],
        correct: 1,
        hint: "Rumusan masalah selalu di awal, kesimpulan selalu di akhir.",
        explanation: "Alur proses penelitian kuantitatif: Rumusan Masalah → Landasan Teori → Perumusan Hipotesis → Populasi & Sampel → Pengembangan Instrumen → Pengujian Instrumen → Pengumpulan Data → Analisis Data → Kesimpulan & Saran."
    },
    {
        id: "q32", cat: "P2",
        text: "Masalah penelitian menurut Prof. Sugiyono adalah penyimpangan antara yang seharusnya dengan apa yang benar-benar terjadi, yaitu antara...",
        options: ["Hipotesis dan kenyataan lapangan", "Teori dan praktik; aturan dan pelaksanaan; rencana dan pelaksanaan", "Sampel dan populasi", "Variabel independen dan dependen", "Definisi konseptual dan operasional"],
        correct: 1,
        hint: "Masalah muncul ketika ada 'gap' antara yang ideal dan yang aktual.",
        explanation: "Menurut Prof. Sugiyono, masalah adalah penyimpangan antara: teori dan praktik, aturan dan pelaksanaan, serta rencana dan pelaksanaan."
    },
    {
        id: "q33", cat: "P2",
        text: "Variabel dependen disebut juga dengan nama lain...",
        options: ["Variabel stimulus / predictor", "Variabel output / kriteria / konsekuen", "Variabel moderator / mediator", "Variabel antecedent / penyebab", "Variabel bebas / independen"],
        correct: 1,
        hint: "Variabel ini adalah 'hasil' atau 'keluaran' dari sebuah proses.",
        explanation: "Variabel Dependen (Terikat) disebut juga variabel output, kriteria, atau konsekuen. Ia dipengaruhi atau menjadi akibat karena adanya variabel bebas (independen)."
    },
    {
        id: "q34", cat: "P2",
        text: "Contoh konkret variabel independen (bebas) dalam penelitian adalah...",
        options: ["Produktivitas kerja yang dipengaruhi lingkungan", "Komitmen kerja yang mempengaruhi produktivitas", "Kepuasan kerja sebagai hasil program pelatihan", "Nilai ujian sebagai output dari belajar", "Pendapatan sebagai akibat dari bekerja"],
        correct: 1,
        hint: "Variabel bebas adalah variabel YANG MEMPENGARUHI, bukan yang dipengaruhi.",
        explanation: "Komitmen kerja (yang mempengaruhi produktivitas) adalah contoh variabel independen (bebas). Produktivitas adalah variabel dependen (akibat dari komitmen kerja)."
    },
    {
        id: "q35", cat: "P2",
        text: "Peranan nilai dalam metode kuantitatif menurut tabel aksioma adalah...",
        options: ["Terikat nilai-nilai yang dibawa peneliti", "Dipengaruhi norma sosial", "Cenderung bebas nilai (value-free)", "Sangat bergantung pada subjektivitas", "Ditentukan oleh konteks budaya"],
        correct: 2,
        hint: "Peneliti kuantitatif berusaha objektif dan tidak membawa nilai pribadi.",
        explanation: "Metode kuantitatif cenderung bebas nilai (value-free), sedangkan metode kualitatif terikat nilai-nilai yang dibawa peneliti dan sumber data."
    },
    {
        id: "q36", cat: "P2",
        text: "Rumusan masalah 'Seberapa tinggi tingkat kepuasan masyarakat terhadap pelayanan pemerintah di bidang kesehatan?' termasuk jenis rumusan masalah...",
        options: ["Komparatif", "Asosiatif", "Deskriptif", "Kausal", "Eksploratif"],
        correct: 2,
        hint: "Pertanyaannya hanya menggambarkan kondisi satu variabel saja.",
        explanation: "Rumusan masalah deskriptif berkenaan dengan satu variabel mandiri, menggambarkan kondisi/keadaan variabel tersebut tanpa membandingkan atau mencari hubungan."
    },
    {
        id: "q37", cat: "P2",
        text: "Dalam konteks variabel moderator, contoh yang paling tepat adalah...",
        options: [
            "Nilai ujian dipengaruhi oleh jumlah belajar",
            "Motivasi belajar secara langsung mempengaruhi nilai ujian",
            "Hubungan motivasi dan produktivitas kerja semakin kuat bila peranan pemimpin dalam menciptakan iklim kerja sangat baik",
            "Kepuasan kerja tidak dapat diukur secara langsung",
            "Pendapatan adalah akibat dari kompetensi karyawan"
        ],
        correct: 2,
        hint: "Moderator memperkuat atau memperlemah hubungan antara dua variabel utama.",
        explanation: "Contoh variabel moderator: peranan pemimpin dalam menciptakan iklim kerja yang baik memperkuat hubungan antara motivasi (IV) dan produktivitas kerja (DV)."
    },
    {
        id: "q38", cat: "P2",
        text: "Metode kualitatif disebut sebagai metode yang bersifat 'postpositivistik' artinya...",
        options: ["Mengikuti tradisi positivisme secara ketat", "Bergerak di luar tradisi positivisme, lebih artistik dan interpretatif", "Berfokus pada pengukuran kuantitatif yang terukur", "Mengutamakan generalisasi statistik ke populasi", "Bersifat bebas nilai dan objektif sepenuhnya"],
        correct: 1,
        hint: "Post = sesudah/melampaui. Postpositivisme melampaui batasan positivisme.",
        explanation: "Metode kualitatif disebut postpositivistik, artistik — melampaui tradisi positivisme yang hanya mempercayai hal yang terukur. Kualitatif menggali makna, konteks, dan pemahaman."
    },
    {
        id: "q39", cat: "P2",
        text: "Variabel kontrol paling sering digunakan dalam penelitian yang bersifat...",
        options: ["Deskriptif", "Asosiatif", "Membandingkan (Komparatif/Eksperimen)", "Historis", "Fenomenologis"],
        correct: 2,
        hint: "Dalam membandingkan dua kelompok, faktor luar harus dikontrol agar adil.",
        explanation: "Variabel kontrol sering digunakan peneliti dalam penelitian yang bersifat membandingkan (komparatif atau eksperimen), agar faktor luar tidak mengganggu hasil perbandingan."
    },
    {
        id: "q40", cat: "P2",
        text: "Masalah penelitian menurut Stonner (1982) dapat diketahui apabila terdapat penyimpangan antara pengalaman dan kenyataan. Selain itu, sumber masalah yang disebutkan Stonner adalah...",
        options: ["Penelitian eksplorasi dan pilot study", "Adanya pengaduan dan kompetisi", "Kekurangan dalam referensi akademik", "Bias peneliti dan subjektivitas", "Ketidaksesuaian instrumen penelitian"],
        correct: 1,
        hint: "Stonner menyebutkan dua sumber tambahan selain penyimpangan pengalaman vs kenyataan.",
        explanation: "Menurut Stonner (1982), masalah dapat diketahui dari: penyimpangan antara pengalaman dan kenyataan, antara rencana dan kenyataan, adanya pengaduan, dan adanya kompetisi."
    },
    {
        id: "q41", cat: "P2",
        text: "Penelitian kuantitatif disebut sebagai metode 'tradisional' karena...",
        options: ["Menggunakan cara-cara lama yang sudah usang", "Sudah lama digunakan dan mengikuti paradigma positivisme", "Tidak mengikuti perkembangan ilmu pengetahuan modern", "Hanya bisa digunakan untuk ilmu-ilmu eksakta", "Tidak memerlukan hipotesis dalam prosesnya"],
        correct: 1,
        hint: "Tradisional di sini berarti sudah mapan dan mengikuti positivisme.",
        explanation: "Kuantitatif disebut tradisional dan positivistik karena sudah lama digunakan, mengikuti cara pandang positivisme yang meyakini realitas dapat diukur secara objektif."
    },
    {
        id: "q42", cat: "P2",
        text: "Paradigma penelitian mencerminkan jenis dan jumlah hipotesis. Apabila paradigma menunjukkan 2 variabel dengan hubungan searah (X → Y), maka jumlah hipotesis yang dapat dirumuskan adalah...",
        options: ["Tidak ada hipotesis (hanya deskriptif)", "1 hipotesis asosiatif/kausal", "3 hipotesis komparatif", "5 hipotesis sekaligus", "Tergantung jumlah populasi"],
        correct: 1,
        hint: "Satu hubungan searah → satu hipotesis.",
        explanation: "Satu hubungan searah X → Y menghasilkan 1 hipotesis asosiatif/kausal. Jumlah hipotesis bergantung pada jumlah dan jenis hubungan antar variabel dalam paradigma penelitian."
    },
    {
        id: "q43", cat: "P2",
        text: "Dalam proses penelitian kuantitatif, 'Pengujian Instrumen' dilakukan SEBELUM tahap...",
        options: ["Perumusan Hipotesis", "Landasan Teori", "Populasi & Sampel", "Pengumpulan Data", "Rumusan Masalah"],
        correct: 3,
        hint: "Instrumen harus teruji valid dan reliabel sebelum digunakan untuk mengumpulkan data.",
        explanation: "Urutan: ...Pengembangan Instrumen → Pengujian Instrumen → Pengumpulan Data → Analisis Data → Kesimpulan. Jadi pengujian instrumen dilakukan sebelum pengumpulan data."
    },
    {
        id: "q44", cat: "P2",
        text: "Hubungan antara variabel pada metode Kualitatif digambarkan sebagai...",
        options: ["Searah kausal X → Y", "Timbal balik/interaktif X ↔ Y", "Tidak ada hubungan sama sekali", "Bebas nilai dan objektif", "Selalu linier dan proporsional"],
        correct: 1,
        hint: "Dalam dunia sosial yang kompleks, pengaruh tidak selalu searah.",
        explanation: "Pada metode kualitatif, hubungan variabel bersifat timbal balik/interaktif (X ↔ Y). Contoh: motivasi mempengaruhi prestasi, dan prestasi juga mempengaruhi motivasi."
    },
    {
        id: "q45", cat: "P2",
        text: "Pengembangan instrumen penelitian kuantitatif dilakukan setelah tahap...",
        options: ["Analisis Data", "Pengumpulan Data", "Penetapan Populasi & Sampel", "Kesimpulan & Saran", "Pengujian Instrumen"],
        correct: 2,
        hint: "Instrumen dikembangkan setelah peneliti tahu untuk populasi/sampel apa instrumen itu dibuat.",
        explanation: "Dalam alur penelitian kuantitatif: ...Populasi & Sampel → Pengembangan Instrumen → Pengujian Instrumen → Pengumpulan Data... Jadi instrumen dikembangkan setelah penetapan populasi & sampel."
    },

    // ══════════════════════════════════════════════════════════════════
    // P3 — POPULASI, SAMPEL & HIPOTESIS (Q46–Q65)
    // ══════════════════════════════════════════════════════════════════
    {
        id: "q46", cat: "P3",
        text: "Teknik pengambilan sampel yang memberikan peluang yang sama bagi setiap anggota populasi untuk dipilih dinamakan...",
        options: ["Non Probability Sampling", "Quota Sampling", "Probability Sampling", "Snowball Sampling", "Purposive Sampling"],
        correct: 2,
        hint: "Teknik ini menekankan 'peluang' atau probabilitas yang setara.",
        explanation: "Probability Sampling adalah teknik yang memberikan peluang sama bagi setiap anggota populasi untuk dipilih (contoh: Simple Random Sampling)."
    },
    {
        id: "q47", cat: "P3",
        text: "Menurut Roscoe (1982), ukuran sampel yang layak dalam penelitian eksperimen sederhana untuk grup eksperimen dan grup kontrol masing-masing adalah...",
        options: ["30 s/d 500 orang", "Minimal 30 orang per kategori", "Minimal 10 kali jumlah variabel", "10 s/d 20 orang", "Seluruh anggota populasi"],
        correct: 3,
        hint: "Angkanya jauh lebih kecil dibandingkan ukuran kelayakan secara umum (30–500).",
        explanation: "Untuk eksperimen sederhana (kelompok eksperimen + kontrol), Roscoe menyarankan masing-masing 10–20 orang."
    },
    {
        id: "q48", cat: "P3",
        text: "Hipotesis statistik digunakan apabila penelitian menggunakan data yang berasal dari...",
        options: ["Sensus (Seluruh Populasi)", "Sampel", "Literatur/Studi Pustaka", "Wawancara mendalam terisolasi", "Data Sekunder murni"],
        correct: 1,
        hint: "Statistik inferensial digunakan untuk menggeneralisasi sebagian data ke keseluruhan.",
        explanation: "Hipotesis statistik digunakan HANYA jika penelitian bekerja menggunakan sampel, untuk menggeneralisasi nilai sampel ke parameter populasi."
    },
    {
        id: "q49", cat: "P3",
        text: "Pengambilan anggota sampel secara acak tanpa memperhatikan strata yang ada di populasi karena dianggap homogen dinamakan...",
        options: ["Simple Random Sampling", "Proportionate Stratified Random", "Cluster Sampling", "Snowball Sampling", "Purposive Sampling"],
        correct: 0,
        hint: "Teknik paling dasar ketika populasi seragam secara proporsional.",
        explanation: "Simple Random Sampling dilakukan ketika populasi bersifat seragam atau homogen tanpa strata khusus."
    },
    {
        id: "q50", cat: "P3",
        text: "Penentuan sampel berdasarkan kebetulan — siapa saja yang bertemu peneliti dan dianggap cocok — adalah teknik...",
        options: ["Sampling Purposive", "Sampling Sistematis", "Sampling Insidental", "Snowball Sampling", "Sampling Kuota"],
        correct: 2,
        hint: "Berasal dari kata 'insiden' (kejadian/kebetulan spontan).",
        explanation: "Sampling Insidental (atau Aksidental) bersifat spontan mengambil siapa saja yang bersedia dan ditemui peneliti pada saat itu tanpa rencana partisipan khusus."
    },
    {
        id: "q51", cat: "P3",
        text: "Populasi dalam penelitian didefinisikan sebagai...",
        options: [
            "Seluruh penduduk di suatu wilayah geografis",
            "Wilayah generalisasi yang terdiri atas objek/subjek dengan kualitas dan karakteristik tertentu yang ditetapkan peneliti",
            "Sejumlah responden yang menjadi sumber data penelitian",
            "Jumlah total data yang dikumpulkan peneliti",
            "Kelompok yang dijadikan pembanding dalam penelitian komparatif"
        ],
        correct: 1,
        hint: "Populasi bukan hanya manusia, bisa objek apapun yang ditetapkan peneliti.",
        explanation: "Populasi adalah wilayah generalisasi yang terdiri atas objek/subjek yang mempunyai kualitas dan karakteristik tertentu yang ditetapkan oleh peneliti untuk dipelajari dan kemudian ditarik kesimpulannya."
    },
    {
        id: "q52", cat: "P3",
        text: "Sampel harus bersifat 'representative' yang artinya...",
        options: ["Sampel harus berukuran besar", "Sampel harus mewakili karakteristik populasi", "Sampel harus dipilih secara acak", "Sampel harus berasal dari laboratorium", "Sampel harus bersifat homogen"],
        correct: 1,
        hint: "Representative berasal dari kata 'represent' = mewakili.",
        explanation: "Sampel yang representatif berarti sampel tersebut dapat mewakili karakteristik populasi secara keseluruhan sehingga kesimpulan dapat digeneralisasi ke populasi."
    },
    {
        id: "q53", cat: "P3",
        text: "Menurut Roscoe (1982), jika penelitian akan menggunakan analisis regresi dengan 5 variabel independen, maka jumlah sampel minimal yang diperlukan adalah...",
        options: ["30 orang", "50 orang", "100 orang", "150 orang", "500 orang"],
        correct: 1,
        hint: "Minimal 10× jumlah variabel yang diteliti. Hitung: 10 × 5 variabel = ?",
        explanation: "Roscoe menyarankan untuk analisis multivariate (korelasi atau regresi ganda), jumlah sampel minimal 10× jumlah variabel. Untuk 5 variabel: 10 × 5 = 50 orang."
    },
    {
        id: "q54", cat: "P3",
        text: "Teknik sampling yang digunakan untuk populasi yang sangat luas (seperti penduduk suatu provinsi), di mana pengambilan sampelnya berdasarkan daerah, adalah...",
        options: ["Simple Random Sampling", "Systematic Sampling", "Proportionate Stratified Sampling", "Area (Cluster) Sampling", "Snowball Sampling"],
        correct: 3,
        hint: "Nama teknisnya mengandung kata 'area' atau 'cluster' (daerah/kelompok).",
        explanation: "Area (Cluster) Sampling digunakan ketika objek yang diteliti sangat luas (penduduk negara/provinsi/kabupaten). Pengambilan sampel berdasarkan daerah populasi yang ditetapkan."
    },
    {
        id: "q55", cat: "P3",
        text: "Snowball sampling cocok digunakan ketika...",
        options: [
            "Populasi sangat besar dan luas wilayahnya",
            "Populasi homogen dan mudah diidentifikasi",
            "Populasi awalnya kecil/sulit ditemukan, kemudian berkembang dari referensi ke referensi",
            "Peneliti ingin memberikan peluang sama pada semua anggota populasi",
            "Peneliti ingin mengontrol strata populasi secara proporsional"
        ],
        correct: 2,
        hint: "Seperti bola salju menggelinding — kecil di awal, membesar karena referensi.",
        explanation: "Snowball Sampling digunakan ketika populasi sulit diidentifikasi atau jumlahnya awalnya kecil. Peneliti mendapat sampel dari referensi sampel sebelumnya, sehingga jumlah membesar seperti bola salju."
    },
    {
        id: "q56", cat: "P3",
        text: "Sampling Jenuh adalah teknik di mana...",
        options: ["Sampel dipilih berdasarkan urutan nomor", "Semua anggota populasi digunakan sebagai sampel (sensus)", "Sampel dipilih berdasarkan pertimbangan peneliti", "Sampel ditentukan berdasarkan kuota tertentu", "Sampel diperoleh secara kebetulan"],
        correct: 1,
        hint: "Jenuh = semua sudah terpakai, tidak ada yang tersisa sebagai non-sampel.",
        explanation: "Sampling Jenuh adalah teknik pengumpulan sampel bila semua anggota populasi digunakan sebagai sampel. Ini sama dengan sensus."
    },
    {
        id: "q57", cat: "P3",
        text: "Hipotesis merupakan jawaban sementara karena...",
        options: [
            "Hipotesis belum diuji sama sekali",
            "Hipotesis hanya berdasarkan teori yang relevan, belum didasarkan pada fakta empiris dari pengumpulan data",
            "Hipotesis dibuat tanpa dasar apapun",
            "Hipotesis hanya berlaku untuk penelitian kualitatif",
            "Hipotesis tidak perlu diuji dalam penelitian terapan"
        ],
        correct: 1,
        hint: "Sementara karena belum ada bukti empiris, baru berdasarkan teori.",
        explanation: "Hipotesis dikatakan sementara karena jawaban yang diberikan baru didasarkan pada teori yang relevan, belum didasarkan pada fakta-fakta empiris yang diperoleh melalui pengumpulan data."
    },
    {
        id: "q58", cat: "P3",
        text: "H₀: ρ = 0 dalam hipotesis statistik asosiatif berarti...",
        options: ["Ada hubungan positif yang kuat", "Tidak ada hubungan antara variabel (ρ = nol)", "Ada hubungan negatif yang signifikan", "Hubungan sangat signifikan", "Variabel tidak dapat diukur"],
        correct: 1,
        hint: "ρ = 0 artinya korelasi = nol = tidak ada hubungan sama sekali.",
        explanation: "Dalam hipotesis statistik asosiatif: H₀: ρ = 0 berarti tidak ada hubungan antara variabel. H₁: ρ ≠ 0 berarti ada hubungan (lebih besar atau kurang dari nol)."
    },
    {
        id: "q59", cat: "P3",
        text: "Proportionate Stratified Random Sampling digunakan ketika...",
        options: ["Populasi homogen dan tidak memiliki strata", "Populasi berstrata tetapi kurang proporsional", "Populasi tidak homogen dan berstrata secara proporsional", "Populasi sangat luas secara geografis", "Peneliti ingin mendapat sampel dari siapa saja"],
        correct: 2,
        hint: "Proportionate = proporsional. Stratified = berstrata.",
        explanation: "Proportionate Stratified Random Sampling digunakan bila populasi tidak homogen (heterogen) dan berstrata secara proporsional. Sampel diambil secara random proporsional dari setiap strata."
    },
    {
        id: "q60", cat: "P3",
        text: "Hipotesis komparatif yang menyatakan 'Terdapat perbedaan penghasilan petani dan nelayan' dalam hipotesis statistiknya dinyatakan sebagai...",
        options: [
            "H₀: μ₁ = μ₂ (tidak ada perbedaan) / H₁: μ₁ ≠ μ₂ (ada perbedaan)",
            "H₀: ρ = 0 / H₁: ρ ≠ 0",
            "H₀: μ = 0 / H₁: μ > 0",
            "H₀: X = Y / H₁: X ≠ Y (dalam simbol non-statistik)",
            "H₀: p = 0,5 / H₁: p ≠ 0,5"
        ],
        correct: 0,
        hint: "Komparatif membandingkan dua rata-rata (μ). H₀ menyatakan tidak ada perbedaan.",
        explanation: "Hipotesis statistik komparatif: H₀: μ₁ = μ₂ (tidak ada perbedaan antara kelompok 1 dan 2) / H₁: μ₁ ≠ μ₂ (ada perbedaan signifikan)."
    },
    {
        id: "q61", cat: "P3",
        text: "Sampling Kuota adalah teknik di mana peneliti...",
        options: [
            "Mengambil sampel secara acak murni",
            "Menentukan sampel dari populasi yang mempunyai ciri-ciri tertentu sampai jumlah (kuota) yang diinginkan",
            "Mengambil seluruh anggota populasi",
            "Mengambil sampel berdasarkan urutan nomor anggota",
            "Mengambil sampel berdasarkan kebetulan"
        ],
        correct: 1,
        hint: "Quota = jatah. Peneliti menentukan jatah jumlah sampel terlebih dahulu.",
        explanation: "Sampling Kuota adalah teknik untuk menentukan sampel dari populasi yang mempunyai ciri-ciri tertentu sampai jumlah (kuota) yang diinginkan terpenuhi."
    },
    {
        id: "q62", cat: "P3",
        text: "Karakteristik hipotesis yang baik adalah harus 'dinyatakan dalam kalimat yang jelas' agar...",
        options: ["Mudah diingat oleh peneliti", "Tidak menimbulkan berbagai penafsiran", "Dapat diterima oleh semua orang", "Sesuai dengan teori yang ada", "Mudah diuji secara statistik saja"],
        correct: 1,
        hint: "Kejelasan kalimat penting untuk menghindari ambiguitas.",
        explanation: "Salah satu karakteristik hipotesis yang baik adalah dinyatakan dalam kalimat yang jelas, sehingga tidak menimbulkan berbagai penafsiran yang bisa membingungkan."
    },
    {
        id: "q63", cat: "P3",
        text: "Menurut Roscoe, ukuran sampel yang layak secara umum dalam penelitian adalah antara...",
        options: ["10 s/d 100", "20 s/d 200", "30 s/d 500", "50 s/d 1000", "100 s/d 5000"],
        correct: 2,
        hint: "Ini adalah rentang umum yang paling sering disebut Roscoe.",
        explanation: "Menurut Roscoe (Research for Business, 1982), ukuran sampel yang layak dalam penelitian adalah antara 30 sampai dengan 500."
    },
    {
        id: "q64", cat: "P3",
        text: "Hipotesis penelitian berbeda dari hipotesis statistik dalam hal...",
        options: [
            "Hipotesis penelitian menggunakan simbol matematis, statistik menggunakan kalimat",
            "Hipotesis penelitian dinyatakan dalam kalimat naratif, hipotesis statistik dinyatakan dalam simbol (μ, ρ, dll)",
            "Hipotesis penelitian tidak bisa diuji, hipotesis statistik bisa diuji",
            "Hipotesis penelitian hanya untuk kualitatif, statistik hanya untuk kuantitatif",
            "Keduanya identik, tidak ada perbedaan"
        ],
        correct: 1,
        hint: "Satu berupa kalimat, satu berupa simbol/notasi matematis.",
        explanation: "Hipotesis penelitian dinyatakan dalam kalimat naratif (deskriptif). Hipotesis statistik dinyatakan dalam simbol matematis (H₀: μ = nilai, atau H₀: ρ = 0) untuk keperluan pengujian statistik."
    },
    {
        id: "q65", cat: "P3",
        text: "Disproportionate Stratified Random Sampling digunakan ketika...",
        options: ["Populasi homogen tanpa strata", "Populasi berstrata tetapi KURANG proporsional", "Populasi sangat luas secara geografis", "Peneliti ingin sensus seluruh populasi", "Populasi sulit diidentifikasi anggotanya"],
        correct: 1,
        hint: "Disproportionate = tidak proporsional. Tetap ada strata, tapi jumlah tiap strata tidak proporsional.",
        explanation: "Disproportionate Stratified Random Sampling digunakan untuk menentukan jumlah sampel bila populasi berstrata tetapi kurang proporsional (jumlah anggota di setiap strata sangat berbeda/tidak seimbang)."
    },

    // ══════════════════════════════════════════════════════════════════
    // P4 — VARIABEL & PARADIGMA LANJUTAN (Q66–Q80)
    // ══════════════════════════════════════════════════════════════════
    {
        id: "q66", cat: "P4",
        text: "Hipotesis yang menyatakan 'Adanya perbedaan penghasilan yang signifikan antara petani dan nelayan' termasuk dalam jenis hipotesis...",
        options: ["Deskriptif", "Asosiatif", "Komparatif", "Kausal", "Struktural"],
        correct: 2,
        hint: "Membandingkan dua kelompok yang berbeda (komparasi).",
        explanation: "Hipotesis komparatif adalah dugaan tentang perbedaan suatu variabel pada sampel/populasi yang berbeda (petani vs nelayan)."
    },
    {
        id: "q67", cat: "P4",
        text: "Jika rumusan masalahnya adalah Asosiatif (mencari hubungan), maka metode analisis data statistik yang paling tepat digunakan adalah...",
        options: ["Statistik deskriptif (mean, persentase)", "Uji beda (t-test, ANOVA)", "Korelasi dan regresi", "Non-parametrik Wilcoxon", "Generalisasi Proporsi"],
        correct: 2,
        hint: "Alat uji ini digunakan untuk mengetahui kuat/tidaknya hubungan (R dan R-Square).",
        explanation: "Masalah asosiatif (hubungan) diukur menggunakan alat analisis Korelasi (hubungan) atau Regresi (pengaruh)."
    },
    {
        id: "q68", cat: "P4",
        text: "Hipotesis asosiatif H₁: ρ ≠ 0 berarti...",
        options: ["Tidak ada hubungan antara variabel", "Ada hubungan antara variabel (positif atau negatif)", "Hubungan variabel bersifat kausal satu arah", "Tidak dapat ditentukan ada/tidaknya hubungan", "Hubungan sangat lemah dan tidak signifikan"],
        correct: 1,
        hint: "ρ ≠ 0 artinya nilai korelasi tidak sama dengan nol.",
        explanation: "H₁: ρ ≠ 0 berarti 'tidak sama dengan nol' — artinya ada hubungan antara variabel, baik positif (ρ > 0) maupun negatif (ρ < 0)."
    },
    {
        id: "q69", cat: "P4",
        text: "Apabila rumusan masalah penelitian bersifat komparatif, maka alat analisis statistik yang paling sesuai adalah...",
        options: ["Korelasi Pearson", "Regresi linear berganda", "t-test atau ANOVA (uji beda)", "Analisis faktor", "Structural Equation Modelling (SEM)"],
        correct: 2,
        hint: "Komparatif = membandingkan. Uji statistik yang membandingkan rata-rata dua atau lebih kelompok.",
        explanation: "Rumusan masalah komparatif menggunakan uji beda seperti t-test (dua kelompok) atau ANOVA (lebih dari dua kelompok)."
    },
    {
        id: "q70", cat: "P4",
        text: "Contoh hipotesis yang mencerminkan rumusan masalah deskriptif adalah...",
        options: [
            "Terdapat hubungan positif antara curah hujan dan jumlah payung terjual",
            "Kemampuan daya beli masyarakat (populasi) itu rendah",
            "Ada perbedaan signifikan antara penghasilan petani dan nelayan",
            "Motivasi mempengaruhi prestasi belajar siswa",
            "Ada korelasi antara tinggi badan dan berat badan atlet"
        ],
        correct: 1,
        hint: "Deskriptif hanya menggambarkan satu variabel mandiri.",
        explanation: "Hipotesis deskriptif menggambarkan keadaan satu variabel saja. Contoh: 'Kemampuan daya beli masyarakat (populasi) itu rendah' — hanya mendeskripsikan variabel daya beli."
    },
    {
        id: "q71", cat: "P4",
        text: "Seorang peneliti menyatakan 'Ada hubungan positif dan signifikan antara tinggi badan pelayan toko dengan barang yang terjual.' Ini adalah contoh...",
        options: ["Hipotesis deskriptif", "Hipotesis komparatif", "Hipotesis asosiatif (penelitian)", "Hipotesis statistik asosiatif", "Paradigma penelitian"],
        correct: 2,
        hint: "Menyatakan hubungan antara dua variabel dalam kalimat naratif.",
        explanation: "Ini adalah hipotesis penelitian asosiatif — menyatakan hubungan antara dua variabel (tinggi badan dan barang terjual) dalam kalimat naratif, bukan simbol statistik."
    },
    {
        id: "q72", cat: "P4",
        text: "Paradigma penelitian yang menunjukkan pola X → Y → Z menggambarkan...",
        options: ["Dua variabel dengan hubungan langsung", "Tiga variabel di mana Y bertindak sebagai intervening antara X dan Z", "Tiga variabel dengan hubungan komparatif", "Satu variabel dengan tiga dimensi", "Variabel moderator yang memperkuat X dan Z"],
        correct: 1,
        hint: "Dalam rantai X → Y → Z, Y berada di tengah sebagai penghubung.",
        explanation: "Pola X → Y → Z menunjukkan tiga variabel di mana Y bertindak sebagai variabel intervening (perantara) antara X (independen) dan Z (dependen)."
    },
    {
        id: "q73", cat: "P4",
        text: "Rumusan masalah yang benar untuk hipotesis asosiatif 'Terdapat hubungan positif antara curah hujan dan jumlah payung yang terjual' adalah...",
        options: [
            "Seberapa besar curah hujan di Indonesia?",
            "Adakah perbedaan penjualan payung saat musim hujan dan kemarau?",
            "Adakah hubungan yang signifikan antara curah hujan dengan jumlah payung yang terjual?",
            "Mengapa curah hujan meningkat di musim hujan?",
            "Berapa jumlah payung yang terjual per bulan?"
        ],
        correct: 2,
        hint: "Rumusan masalah asosiatif bertanya tentang ADA/TIDAKNYA hubungan.",
        explanation: "Rumusan masalah asosiatif harus menanyakan hubungan antara variabel. 'Adakah hubungan yang signifikan antara curah hujan dengan jumlah payung yang terjual?' adalah rumusan yang tepat."
    },
    {
        id: "q74", cat: "P4",
        text: "Pada umumnya hipotesis deskriptif...",
        options: [
            "Wajib dirumuskan dalam setiap penelitian deskriptif",
            "Tidak dirumuskan dalam penelitian deskriptif (umumnya tidak digunakan)",
            "Selalu menggunakan simbol statistik μ",
            "Digunakan hanya pada penelitian kualitatif",
            "Dirumuskan setelah data dikumpulkan"
        ],
        correct: 1,
        hint: "Ada keterangan khusus dalam materi bahwa hipotesis deskriptif biasanya tidak dirumuskan.",
        explanation: "Pada umumnya hipotesis deskriptif tidak dirumuskan. Karakteristik hipotesis: pada umumnya hipotesis deskriptif tidak dirumuskan karena penelitian deskriptif cukup dengan rumusan masalah."
    },
    {
        id: "q75", cat: "P4",
        text: "Jika peneliti ingin mengetahui apakah ada perbedaan prestasi belajar antara siswa yang belajar dengan musik dan tanpa musik, maka jenis hipotesisnya adalah...",
        options: ["Hipotesis deskriptif", "Hipotesis asosiatif", "Hipotesis komparatif", "Hipotesis kausal searah", "Hipotesis intervening"],
        correct: 2,
        hint: "Membandingkan dua kelompok yang berbeda kondisinya.",
        explanation: "Karena penelitian membandingkan dua kelompok (belajar dengan musik vs tanpa musik), maka hipotesisnya bersifat komparatif."
    },
    {
        id: "q76", cat: "P4",
        text: "Variabel penelitian adalah segala sesuatu yang ditetapkan oleh peneliti untuk dipelajari, sehingga diperoleh informasi, kemudian...",
        options: ["Dikembalikan ke populasi", "Ditarik kesimpulannya", "Dibuktikan dengan uji statistik saja", "Dikomunikasikan ke masyarakat", "Dibuang jika tidak relevan"],
        correct: 1,
        hint: "Tujuan akhir mempelajari variabel adalah untuk mengambil kesimpulan.",
        explanation: "Variabel penelitian adalah segala sesuatu yang ditetapkan peneliti untuk dipelajari sehingga diperoleh informasi untuk hal tersebut, kemudian ditarik kesimpulannya."
    },
    {
        id: "q77", cat: "P4",
        text: "Variabel independen disebut juga 'variabel antecedent' yang berarti...",
        options: ["Variabel yang mengikuti/menyusul", "Variabel yang mendahului (menyebabkan perubahan)", "Variabel yang dikendalikan", "Variabel yang tidak dapat diukur", "Variabel yang memoderasi hubungan"],
        correct: 1,
        hint: "Antecedent dalam bahasa Inggris berarti 'yang mendahului'.",
        explanation: "Variabel antecedent berarti variabel yang mendahului — menjadi penyebab atau pemicu perubahan pada variabel dependen. Ini sinonim dari variabel independen/bebas."
    },
    {
        id: "q78", cat: "P4",
        text: "Teknik analisis statistik yang paling tepat untuk rumusan masalah deskriptif adalah...",
        options: ["Korelasi Pearson", "t-test dua kelompok", "ANOVA satu arah", "Statistik deskriptif (mean, median, persentase, dll)", "Regresi berganda"],
        correct: 3,
        hint: "Deskriptif = menggambarkan. Tidak perlu uji komparatif atau asosiatif.",
        explanation: "Rumusan masalah deskriptif cukup dianalisis dengan statistik deskriptif seperti mean, median, modus, persentase, standar deviasi — tidak memerlukan uji hipotesis yang kompleks."
    },
    {
        id: "q79", cat: "P4",
        text: "Dalam tabel keterkaitan paradigma penelitian, rumusan masalah deskriptif memiliki catatan bahwa...",
        options: [
            "Wajib membuat hipotesis statistik",
            "Umumnya tidak dirumuskan hipotesisnya",
            "Selalu menggunakan regresi berganda",
            "Harus diuji dengan t-test",
            "Tidak perlu rumusan masalah formal"
        ],
        correct: 1,
        hint: "Penelitian deskriptif cukup dengan menggambarkan kondisi variabel tanpa hipotesis.",
        explanation: "Catatan penting: untuk rumusan masalah deskriptif, umumnya tidak dirumuskan hipotesisnya, karena penelitian deskriptif bertujuan menggambarkan keadaan variabel, bukan menguji hubungan atau perbedaan."
    },
    {
        id: "q80", cat: "P4",
        text: "Paradigma penelitian secara keseluruhan mencerminkan...",
        options: [
            "Hanya jumlah variabel yang diteliti",
            "Jenis dan jumlah rumusan masalah, teori untuk hipotesis, jenis hipotesis, dan teknik analisis statistik",
            "Hanya teknik pengambilan sampel",
            "Hanya metode pengumpulan data",
            "Hanya jenis penelitian (dasar/terapan/R&D)"
        ],
        correct: 1,
        hint: "Paradigma adalah cetak biru penelitian yang mencakup banyak aspek.",
        explanation: "Paradigma penelitian merupakan pola pikir yang menunjukkan hubungan antar variabel dan sekaligus mencerminkan jenis & jumlah rumusan masalah, teori untuk hipotesis, jenis & jumlah hipotesis, serta teknik analisis statistik."
    },

    // ══════════════════════════════════════════════════════════════════
    // P5 — DATA, KUESIONER & SKALA PENGUKURAN (Q81–Q100)
    // ══════════════════════════════════════════════════════════════════
    {
        id: "q81", cat: "P5",
        text: "Skala pengukuran yang hanya memiliki jawaban tegas dikotomis (seperti Ya-Tidak / Benar-Salah) adalah jenis skala...",
        options: ["Skala Likert", "Rating Scale", "Semantic Differential", "Skala Guttman", "Thurstone"],
        correct: 3,
        hint: "Menghasilkan skor 1 (Ya/Setuju) dan 0 (Tidak/Menolak).",
        explanation: "Skala Guttman memberikan jawaban tegas dan jelas (dikotomis), misal Ya–Tidak, Benar–Salah, Positif–Negatif. Skor tertinggi 1, terendah 0."
    },
    {
        id: "q82", cat: "P5",
        text: "Mengukur sikap, persepsi tentang fenomena sosial dengan tingkat jawaban dari 'Sangat Setuju' sampai 'Sangat Tidak Setuju' merupakan fungsi dari...",
        options: ["Skala Guttman", "Semantic Differential", "Skala Likert", "Rating Scale", "Skala Ordinal Nominal"],
        correct: 2,
        hint: "Sangat populer digunakan di kuesioner dengan rentang skor 1–5.",
        explanation: "Skala Likert digunakan untuk mengukur sikap, persepsi, dan pendapat fenomena sosial dengan tingkatan (SS, ST, RG, TS, STS) dengan skor 5–4–3–2–1."
    },
    {
        id: "q83", cat: "P5",
        text: "Mendapatkan data primer dapat dilakukan dengan metode pengumpulan di bawah ini, kecuali...",
        options: ["Kuesioner", "Wawancara kelompok fokus (FGD)", "Observasi lapangan", "Membaca laporan statistik BPS", "Studi Kasus individual"],
        correct: 3,
        hint: "Data primer diambil langsung oleh peneliti. Mana yang bukan diambil langsung?",
        explanation: "Laporan BPS, dokumen perusahaan, dan jurnal adalah sumber Data Sekunder, bukan Primer. Data primer dikumpulkan sendiri oleh peneliti melalui kuesioner, wawancara, observasi, dll."
    },
    {
        id: "q84", cat: "P5",
        text: "The Response Process dalam kuesioner terdiri dari 4 langkah potensial error. Langkah pertama yang harus dilakukan responden adalah...",
        options: ["Memahami pertanyaan", "Membaca pertanyaan", "Memilih opsi jawaban", "Menerjemahkan ke kategori nilai", "Mengingat pengalaman relevan"],
        correct: 1,
        hint: "Hal paling mendasar sebelum bisa menjawab pertanyaan tertulis.",
        explanation: "The Response Process: 1) Pertanyaan harus dibaca, 2) Pertanyaan dipahami, 3) Membuat respons, 4) Diterjemahkan ke kategori yang ada."
    },
    {
        id: "q85", cat: "P5",
        text: "Dalam perhitungan skala Likert dengan 100 responden, jika semua menjawab 'Sangat Setuju' (skor 5), maka besarnya Skor Ideal (Kriterium) adalah...",
        options: ["100", "500", "1000", "70", "350"],
        correct: 1,
        hint: "Kalikan jumlah total sampel dengan nilai maksimum tiap instrumen.",
        explanation: "Skor Ideal (Kriterium Maksimal) = 5 × 100 = 500, yang dicapai apabila semua responden memberikan skor tertinggi (SS)."
    },
    {
        id: "q86", cat: "P5",
        text: "Langkah pertama dalam proses pembuatan kuesioner adalah...",
        options: ["Memutuskan jenis kuesioner yang akan digunakan", "Membuat draf pertama", "Pra-pengujian (Pre-test) dan revisi", "Mengidentifikasi informasi apa yang dibutuhkan", "Menentukan prosedur penggunaannya"],
        correct: 3,
        hint: "Sebelum merancang pertanyaan, peneliti harus tahu tujuannya.",
        explanation: "Langkah pertama: Mengidentifikasi informasi apa yang dibutuhkan. Setelah itu: memutuskan jenis kuesioner, membuat draf pertama, edit & revisi, pra-pengujian, lalu prosedur penggunaan."
    },
    {
        id: "q87", cat: "P5",
        text: "Skala pengukuran yang dikembangkan oleh Osgood dan disusun dalam satu garis kontinuum dari sangat positif ke sangat negatif disebut...",
        options: ["Skala Likert", "Skala Guttman", "Rating Scale", "Semantic Differential", "Skala Thurstone"],
        correct: 3,
        hint: "Cocok untuk memberikan rentang kesan pada dua sifat yang kontras (misal: Bersih vs Kotor).",
        explanation: "Semantic Differential (dikembangkan Osgood) mengukur sikap dengan memberikan opsi antonim ekstrem pada dua kutub ujung rentang nilai (kontinuum). Jawaban sangat positif di kanan, sangat negatif di kiri."
    },
    {
        id: "q88", cat: "P5",
        text: "Dalam perhitungan contoh Likert di materi, dari 100 responden diperoleh total skor 350 dengan skor ideal 500. Maka tingkat persetujuan responden adalah...",
        options: ["35%", "50%", "65%", "70%", "85%"],
        correct: 3,
        hint: "Rumus: (skor diperoleh / skor ideal) × 100%",
        explanation: "Tingkat persetujuan = (350 / 500) × 100% = 70%. Ini menunjukkan 70% dari tingkat persetujuan maksimal yang diharapkan."
    },
    {
        id: "q89", cat: "P5",
        text: "Rating Scale lebih fleksibel dari skala lainnya karena dapat mengukur...",
        options: ["Hanya sikap dan pendapat saja", "Hanya pengetahuan saja", "Sikap, status sosial ekonomi, kelembagaan, pengetahuan, kemampuan, proses kegiatan, dll", "Hanya persepsi dikotomis (ya/tidak)", "Hanya opini tentang fenomena sosial"],
        correct: 2,
        hint: "Kata kunci: lebih fleksibel dari Likert, Guttman, dan Semantic Differential.",
        explanation: "Rating Scale lebih fleksibel — tidak hanya mengukur sikap, tetapi juga dapat mengukur status sosial ekonomi, kelembagaan, pengetahuan, kemampuan, proses kegiatan, dll."
    },
    {
        id: "q90", cat: "P5",
        text: "Dalam contoh Rating Scale di materi, skor kriterium 30 responden dengan 10 item skala 1–4 adalah...",
        options: ["300", "600", "900", "1200", "1500"],
        correct: 3,
        hint: "Kriterium = skala maks × jumlah item × jumlah responden",
        explanation: "Skor Kriterium = 4 × 10 × 30 = 1200. (Skala maksimum=4, jumlah item=10, jumlah responden=30)"
    },
    {
        id: "q91", cat: "P5",
        text: "Keuntungan kuesioner dibandingkan wawancara tatap muka yang paling tepat adalah...",
        options: ["Dapat digunakan untuk populasi yang tidak bisa membaca", "Tidak ada bias pewawancara dan menjaga anonimitas responden", "Selalu menghasilkan tingkat respons yang tinggi", "Pertanyaan bisa sangat kompleks dan panjang", "Peneliti dapat memberikan penjelasan langsung jika diperlukan"],
        correct: 1,
        hint: "Karena tidak ada pewawancara yang hadir, dua keuntungan utama muncul.",
        explanation: "Keuntungan utama kuesioner: tidak ada bias pewawancara (karena tidak ada pewawancara) dan memungkinkan anonimitas responden (responden tidak perlu mengungkap identitas)."
    },
    {
        id: "q92", cat: "P5",
        text: "Kekurangan kuesioner yang terkait dengan keterbatasan materi pertanyaan adalah...",
        options: ["Tidak bisa dikirim via email", "Pertanyaan harus relatif sederhana dan tidak bisa terlalu kompleks", "Hanya bisa digunakan di kota besar", "Tidak ada batas waktu pengisian", "Semua responden harus hadir secara fisik"],
        correct: 1,
        hint: "Tanpa pewawancara, tingkat kesulitan pertanyaan harus dibatasi.",
        explanation: "Salah satu kekurangan kuesioner adalah pertanyaan harus relatif sederhana karena peneliti tidak hadir untuk menjelaskan, dan responden menjawab sendiri tanpa bantuan."
    },
    {
        id: "q93", cat: "P5",
        text: "Data yang berasal dari pengalaman peneliti sendiri dan dikumpulkan langsung dari lapangan disebut data...",
        options: ["Sekunder", "Tersier", "Primer", "Komparatif", "Historis"],
        correct: 2,
        hint: "Primer = pertama, dari sumber asli/langsung.",
        explanation: "Data primer adalah data yang dikumpulkan langsung oleh peneliti menggunakan metode seperti kuesioner, wawancara, atau observasi. Berbeda dengan data sekunder yang berasal dari sumber yang sudah ada."
    },
    {
        id: "q94", cat: "P5",
        text: "Skor pada Skala Likert untuk jawaban 'Sering' dalam kategori frekuensi adalah...",
        options: ["1", "2", "3", "4", "5"],
        correct: 3,
        hint: "Urutan: Selalu(5), Sering(4), Kadang-kadang(3), Tidak pernah(1). Sering ada di posisi ke-2 dari atas.",
        explanation: "Dalam skala Likert kategori frekuensi: Selalu=5, Sering=4, Kadang-kadang=3, Tidak pernah=1. Jawaban 'Sering' mendapat skor 4."
    },
    {
        id: "q95", cat: "P5",
        text: "Urutan proses pembuatan kuesioner yang benar adalah...",
        options: [
            "Draf → Identifikasi → Jenis → Edit → Pra-test → Prosedur",
            "Identifikasi informasi → Putuskan jenis → Buat draf → Edit & revisi → Pra-pengujian → Prosedur penggunaan",
            "Identifikasi → Edit → Draf → Pra-test → Jenis → Prosedur",
            "Pra-test → Draf → Edit → Identifikasi → Prosedur → Jenis",
            "Jenis → Draf → Edit → Identifikasi → Prosedur → Pra-test"
        ],
        correct: 1,
        hint: "Dimulai dari identifikasi kebutuhan, diakhiri dengan prosedur penggunaan.",
        explanation: "6 Langkah pembuatan kuesioner: 1.Identifikasi informasi, 2.Putuskan jenis kuesioner, 3.Buat draf pertama, 4.Edit & revisi, 5.Pra-pengujian & revisi, 6.Tentukan prosedur penggunaannya."
    },
    {
        id: "q96", cat: "P5",
        text: "Contoh penerapan Skala Guttman yang paling tepat adalah...",
        options: [
            "Berikan nilai 1–5 untuk kepuasan anda terhadap layanan",
            "Beri tanda centang: Bersahabat ☐ atau Tidak Bersahabat ☐",
            "Seberapa setuju anda? SS / S / RG / TS / STS",
            "Pernah / Tidak Pernah: Pernahkah pimpinan memeriksa ruang kerja anda?",
            "Berikan skor 4/3/2/1 untuk tata ruang kantor"
        ],
        correct: 3,
        hint: "Guttman menggunakan jawaban dikotomis yang tegas (hanya dua pilihan).",
        explanation: "Skala Guttman memberikan jawaban tegas dikotomis: Pernah/Tidak Pernah, Ya/Tidak, Setuju/Tidak Setuju. Contoh: 'Pernahkah pimpinan memeriksa ruang kerja anda? a. Pernah b. Tidak Pernah'."
    },
    {
        id: "q97", cat: "P5",
        text: "Pertimbangan biaya (Cost) dalam kuesioner mencakup pertanyaan di bawah ini, KECUALI...",
        options: [
            "Berapa banyak uang yang dibutuhkan untuk mengumpulkan data?",
            "Berapa lama waktu yang dibutuhkan untuk mengumpulkan data?",
            "Apakah pembagian biaya mungkin dilakukan dengan sponsorship?",
            "Berapa banyak kuesioner yang akan diisi dan berapa tingkat responsnya?",
            "Apakah responden perlu dibayar sebagai insentif agar menjawab jujur?"
        ],
        correct: 4,
        hint: "Empat pertimbangan biaya disebutkan dalam materi. Yang kelima adalah tambahan yang tidak ada dalam materi.",
        explanation: "Empat pertimbangan biaya dalam materi: 1) Berapa uang yang dibutuhkan, 2) Berapa lama waktu, 3) Apakah pembagian biaya/sponsorship mungkin, 4) Berapa kuesioner diisi & tingkat respons. Pembayaran insentif responden tidak disebutkan."
    },
    {
        id: "q98", cat: "P5",
        text: "Skala Likert untuk kategori sikap menggunakan gradasi. Jawaban 'Sangat Tidak Setuju' mendapat skor...",
        options: ["5", "4", "2", "1", "0"],
        correct: 3,
        hint: "Ini skor paling rendah dalam skala Likert 5 poin.",
        explanation: "Dalam Skala Likert: SS=5, S=4, RG=3, TS=2, STS=1. Jawaban 'Sangat Tidak Setuju' mendapat skor terendah yaitu 1."
    },
    {
        id: "q99", cat: "P5",
        text: "Dalam contoh Rating Scale di materi (30 responden, 10 item, skala 1–4), jika skor yang diperoleh adalah 818, maka persentase kualitas tata ruang kantor tersebut adalah...",
        options: ["45,4%", "58,2%", "68,2%", "78,2%", "88,2%"],
        correct: 2,
        hint: "Rumus: (skor diperoleh / skor kriterium) × 100%. Skor kriterium = 4×10×30 = 1200.",
        explanation: "Persentase = (818 / 1200) × 100% = 68,2%. Ini berarti kualitas tata ruang kantor ada di 68,2% dari yang diharapkan (Cukup Baik menuju Baik)."
    },
    {
        id: "q100", cat: "P5",
        text: "Langkah keempat (terakhir) dalam The Response Process kuesioner adalah...",
        options: ["Pertanyaan harus dibaca", "Pertanyaan harus dipahami", "Responden harus membuat respons", "Tanggapan harus diterjemahkan ke dalam kategori atau nilai yang ada", "Responden harus mengingat pengalaman masa lalu"],
        correct: 3,
        hint: "Setelah membuat respons, masih ada satu langkah lagi untuk mengisi kuesioner.",
        explanation: "The Response Process (4 langkah): 1) Pertanyaan harus dibaca, 2) Pertanyaan harus dipahami, 3) Responden harus membuat respons, 4) Tanggapan diterjemahkan ke dalam kategori atau nilai yang ada untuk pertanyaan tersebut."
    }

]; // end of bank
