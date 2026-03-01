const fs = require('fs');

const file = 'd:\\Metopen\\metopen_isian.html';
let content = fs.readFileSync(file, 'utf8');

const bankRegex = /const bank = (\[[\s\S]*?\]);/m;
const match = content.match(bankRegex);

if (match) {
    const bankStr = match[1];
    let bank = eval(bankStr);

    const replacements = {
        "q1": "Apa tujuan penelitian menurut Prof. Sugiyono yang bertujuan untuk memperdalam dan memperluas pengetahuan yang telah ada?",
        "q2": "Sebutkan tahap pertama dalam proses Scientific Research!",
        "q3": "Metode apa yang paling cocok digunakan untuk Penelitian dasar (Basic Research) yang berfokus pada penemuan ilmu baru?",
        "q4": "Bagaimana sifat realitas pada metode Kualitatif dalam aksioma penelitian?",
        "q5": "Apa sebutan untuk variabel yang secara teoritis mempengaruhi (memperkuat atau memperlemah) hubungan antara variabel independen dan dependen?",
        "q6": "Apa jenis rumusan masalah yang menanyakan hubungan antara dua variabel atau lebih?",
        "q7": "Apa nama teknik pengambilan sampel yang memberikan peluang yang sama bagi setiap anggota populasi untuk dipilih?",
        "q8": "Berapa ukuran/jumlah sampel yang layak dalam penelitian eksperimen sederhana untuk grup eksperimen dan grup kontrol masing-masing menurut Roscoe (1982)?",
        "q9": "Kapan hipotesis statistik digunakan dalam sebuah penelitian?",
        "q10": "Hipotesis yang menyatakan 'Adanya perbedaan penghasilan yang signifikan antara petani dan nelayan' termasuk dalam jenis hipotesis apa?",
        "q11": "Metode analisis data statistik apa yang paling tepat digunakan jika rumusan masalahnya adalah Asosiatif (mencari hubungan)?",
        "q12": "Apa jenis skala pengukuran yang hanya memiliki jawaban tegas dikotomis (seperti Ya-Tidak / Benar-Salah)?",
        "q13": "Skala apa yang berfungsi mengukur sikap atau persepsi tentang fenomena sosial dengan tingkat jawaban dari 'Sangat Setuju' sampai 'Sangat Tidak Setuju'?",
        "q14": "Berikan satu jenis dokumen/laporan yang tergolong sumber pengumpulan data sekunder (bukan data primer)!",
        "q15": "Apa langkah pertama yang harus dilakukan responden pada 4 langkah The Response Process dalam pengisian kuesioner?",
        "q16": "Apa sebutan untuk penelitian yang berfokus pada penerapan ilmu/produk untuk memecahkan masalah kehidupan sesungguhnya?",
        "q17": "Metode penelitian apa yang tempatnya alamiah, TIDAK ADA perlakuan dari peneliti, dan peneliti mengumpulkan data asli berdasarkan pandangan sumber data?",
        "q18": "Apa sebutan untuk variabel yang secara teoritis mempengaruhi hubungan antara variabel independen menjadi tidak langsung dan tidak dapat diamati/diukur secara nyata?",
        "q19": "Apa nama teknik pengambilan anggota sampel secara acak tanpa memperhatikan strata yang ada di populasi karena dianggap homogen?",
        "q20": "Disebut apakah pengumpulan data dari semua anggota populasi secara keseluruhan tanpa mengambil sampel?",
        "q21": "Apa dua tahapan utama yang dilakukan pada Uji Instrumen Kuesioner?",
        "q22": "Angka korelasi r hitung minimum agar suatu item pertanyaan dianggap valid secara konvensional (n > 30) adalah sebesar...",
        "q23": "Apa nama skala yang diurutkan pada suatu continuum sehingga dapat ditentukan mana respons partisipan terhadap sifat tertentu?",
        "q24": "Apa arti reliabilitas dari suatu kuesioner?",
        "q25": "Berikan satu contoh instrumen yang digunakan untuk mengambil data kualitatif?",
        "q26": "Langkah apa yang dilakukan setelah Formulasi Hipotesis dalam siklus Scientific Research?",
        "q27": "Metode apa yang bertujuan untuk membantu pengambilan keputusan atau mengevaluasi kinerja suatu program?",
        "q28": "Apa jenis variabel independen pada rumusan masalah deskriptif sebelum dihubungkan dengan variabel lain?",
        "q29": "Berapa skor Idealnya bila 100 orang dalam survei skala Likert memilih 'Sangat Setuju' (skor 5)?",
        "q30": "Apa langkah pertama dalam proses pembuatan kuesioner?"
    };

    bank = bank.map(q => {
        if (replacements[q.id]) {
            return {
                ...q,
                text: replacements[q.id]
            };
        }
        return q;
    });

    const newBankStr = "const bank = " + JSON.stringify(bank, null, 4) + ";";
    content = content.replace(bankRegex, newBankStr);

    fs.writeFileSync(file, content);
    console.log("Successfully replaced bank texts.");
} else {
    console.log("Could not find bank array.");
}
