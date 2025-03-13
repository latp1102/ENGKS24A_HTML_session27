function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function square(a, b) {
    return a * b;
}

function even(a, b) {
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}

function check() {
    let choice;
    do {
        choice = +prompt("Chọn chức năng:\n1. Cộng\n2. Trừ\n3. Nhân\n4. Chia\n5. Thoát");
        
        if (choice >= 1 && choice <= 4) {
            let num1 = parseFloat(prompt("Nhập số thứ nhất: "));
            let num2 = parseFloat(prompt("Nhập số thứ hai: "));
            let result;
            
            switch (choice) {
                case 1:
                    result = sum(num1, num2);
                    break;
                case 2:
                    result = subtract(num1, num2);
                    break;
                case 3:
                    result = square(num1, num2);
                    break;
                case 4:
                    result = even(num1, num2);
                    break;
            }
            console.log(result);
            
        } else if (choice !== 5) {
            console.log("Thoát chương trình");
            
        }
    } while (choice !== 5);
}

check();
