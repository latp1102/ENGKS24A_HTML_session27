let numbers = [];

function nhapSoNguyen() {
    let input = prompt("Nhập danh sách số nguyên");
    numbers = input.split('').map(Number).filter(num => !isNaN(num));
}

function tinhTrungBinh() {
    if (numbers.length === 0) {
        console.log("Danh sách trống.");
        return;
    }
    let sum = numbers.reduce((value, num) => value + num, 0);
    console.log("Trung bình các số:", sum / numbers.length);
}

function timSoLonNhat() {
    let maxNumbers = numbers.filter(num => num % 2 === 0); 
    if (maxNumbers.length === 0) {
        console.log("Không có số chẵn trong danh sách");
        return;
    }
    console.log("Số chẵn lớn nhất là:", Math.max(...maxNumbers));
}

function timSoLeNhoNhat() {
    let minNumber = numbers.filter(num => num % 2 !== 0);
    if (minNumber.length === 0) {
        console.log("Không có số lẻ trong danh sách.");
        return;
    }
    console.log("Số lẻ nhỏ nhất là:", Math.min(...minNumber));
}

function menu() {
    let choice;
    do {
        choice = +prompt("Chọn chức năng:\n1. Nhập số nguyên\n2. Tính trung bình\n3. Tìm số lớn nhất\n4. Tìm số lẻ nhỏ nhất\n5. Thoát");
        switch (choice) {
            case 1:
                nhapSoNguyen();
                break;
            case 2:
                tinhTrungBinh();
                break;
            case 3:
                timSoLonNhat();
                break;
            case 4:
                timSoLeNhoNhat();
                break;
            case 5:
                console.log("Thoát chương trình");
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
        }
    } while (choice !== 5);
}

menu();
