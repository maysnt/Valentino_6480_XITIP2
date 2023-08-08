const readline = require(`readline`);
const { start } = require("repl");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Masukan sebuah kalimat:", (kalimat) => {
    rl.question("Masukan indeks awal: ",(startIndex) => {
        rl.question("Masukan indeks akhir: ",(endIndex) => {
            // konversi nilai indeks ke tipe Number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // gunakan method substring untuk mengambil substring dari startIndex hingga endIndex
            const substringResult = kalimat.substring(startIndex, endIndex);
            console.log(`Hasil substring dari indeks ${startIndex} hingga ${endIndex}: ${substringResult}`);
            rl.close();

        });
    });
});