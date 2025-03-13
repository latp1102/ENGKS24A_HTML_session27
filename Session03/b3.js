function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

function rectangleArea(width, height) {
    return width * height;
}

function rectanglePerimeter(width1, height1) {
    return 2 * (width1 + height1);
}

function areaCircle (radius1) {
    return (radius1*radius1) * Math.PI;
}

function mathMenu() {
    let choice;
    do {
        choice = +prompt("Chọn chức năng:\n1. Tính diện tích hình tròn\n2. Tính chu vi hình tròn\n3. Tính diện tích hình chữ nhật\n4. Tính chu vi hình chữ nhật\n5. Thoát");
        
        let result;
        switch (choice) {
            case 1:
                let radius1 = parseFloat(prompt('Nhập bán kính hình tròn:'));
                result = areaCircle(radius1);
                console.log(`Diện tích hình chữ nhật: ${result.toFixed(2)}`);
                break;
            case 2:
                let radius = parseFloat(prompt("Nhập bán kính hình tròn: "));
                result = circlePerimeter(radius);
               console.log(`Chu vi hình tròn: ${result.toFixed(2)}`);
               
                break;
            case 3:
                let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
                let height = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
                result = rectangleArea(width, height);
                console.log(`Diện tích hình chữ nhật: ${result.toFixed(2)}`);
                break;
            case 4:
                let width1 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
                let height1 = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
                result = rectanglePerimeter(width1, height1);
                console.log(`Chu vi hình chữ nhật: ${result.toFixed(2)}`);
                break;
            case 5:
                console.log("Thoát chương trình");
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
        }       
    } while (choice !== 5);
}

mathMenu();
