// total_pembelian = 262000;
// uang = 300000;
// kembalian ;


cariUangKembalian(262000, 300000);

function cariUangKembalian(uang_bayar, uang_awal) {
    let kembali = uang_awal - uang_bayar;
    console.log(kembali)

    let limapuluhrb = 0;
    let sepuluhrb = 0;
    let limarb = 0; 
    let duarb = 0;
    let saturb = 0;

    let objek = {
        saturb: 0,
        duarb: 0,
        limarb: 0,
        sepuluhrb: 0,
        limapuluhrb: 0,
    }
    
    while (kembali > 0) {
        if (kembali >= 50000) {
            limapuluhrb = Math.floor(kembali / 50000);
            kembali = kembali - (limapuluhrb * 50000);
            objek.limapuluhrb = limapuluhrb;
        } else if (kembali >= 10000) {
            sepuluhrb = Math.floor(kembali / 10000);
            kembali = kembali - (sepuluhrb * 10000);
            objek.sepuluhrb = sepuluhrb;
        } else if (kembali >= 5000){
            limarb = Math.floor(kembali / 5000);
            kembali = kembali - (limarb * 5000);
            objek.limarb = limarb;
        } else if (kembali >= 2000){
            duarb = Math.floor(kembali / 2000);
            kembali = kembali - (duarb * 2000);
            objek.duarb = duarb;
        } else {
            saturb = Math.floor(kembali / 1000);
            kembali = kembali - (saturb * 1000);
            objek.saturb = saturb;
        }
    }

    

    console.log(objek);
    // console.log("50.000 = " + limapuluhrb);
    // console.log("10.000 = " + sepuluhrb);
    // console.log("5.000 = " + limarb);
    // console.log("2.000 = " + duarb);
    // console.log("1.000 = " + saturb);
    



}