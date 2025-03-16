const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question(`Nhập chiều cao của bạn: `, (input) => {
    console.log(`Chiều cao của bạn là: ${input} cm`)

    if (input != 0) {
        let soLeChieuCao = input - 100;
        // Tính cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu
        let canNangLyTuong = (soLeChieuCao * 9) / 10;
        let canNangToiDa = soLeChieuCao;
        let canNangToiThieu = (soLeChieuCao * 8) / 10;

        // b. In kết quả trên cùng một dòng
        console.log(`Can Nang Ly Tuong: ${canNangLyTuong}, Can Nang Toi Da: ${canNangToiDa}, Can Nang Toi Thieu:  ${canNangToiThieu}`);
    }

    readline.close();
})
