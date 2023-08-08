const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan kata yang ingin anda cari: ",(kataCari) => {
        // gunakan method indexOf untuk mencarinkataCari dalam kalimat
        const indexsKata = kalimat.indexOf(kataCari);
        if (indexsKata !== -1) {
            console.log(`kata '${kataCari}' ditemukan pada indeks: ${indexsKata}`);
        } else { 
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat.`)
        }
        rl.close();
    });
 });