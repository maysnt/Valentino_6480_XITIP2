const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan indeks awal: ", (startIndex) => {
        rl.question("Masukan indeks akhir: ", (endIndex) => {
            // konversi nilai indeks ke tipe  number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // gunakan method slice untuk mengambil substring dari startIndex hingga endIndex
            const slicedSubstring = kalimat.slice(startIndex, endIndex);
            console.log(`Hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedSubstring}`);
            rl.close();
        });
    });
});