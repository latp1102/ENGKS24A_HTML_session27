let students = [];

function addStudents() {
    let count = +prompt("Nhập số lượng sinh viên: ");
    for (let i = 0; i < count; i++) {
        let name = prompt(`Nhập sinh viên thứ: ${i + 1}`);
        students.push(name);
    }
}

function displayStudents() {
    if (students.length === 0) {
        console.log("Danh sách sinh viên trống");
    } else {
        console.log(`Danh sách sinh viên: ${students.join("\n")}`);
        
    }
}

function searchStudent() {
    let name = prompt("Nhập tên sinh viên cần tìm: ");
    let found = students.find(student => student === name);
    if (found) {
        console.log(`Tìm thấy sinh viên ${found}`);
        
    } else {
        console.log(`Sinh viên không có trong danh sách`);
        
    }
}

function deleteStudent() {
    let name = prompt("Nhập tên sinh viên cần xóa: ");
    let index = students.indexOf(name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Đã xóa sinh viên: ${name}`);
        
    } else {
        console.log(`Sinh viên không có trong danh sách`);
    }
}

function studentManager() {
    let choice;
    do {
        choice = +prompt("Chọn chức năng:\n1. Nhập danh sách sinh viên\n2. Hiển thị danh sách sinh viên\n3. Tìm kiếm sinh viên theo tên\n4. Xóa sinh viên khỏi danh sách\n5. Thoát");
        
        switch (choice) {
            case 1:
                addStudents();
                break;
            case 2:
                displayStudents();
                break;
            case 3:
                searchStudent();
                break;
            case 4:
                deleteStudent();
                break;
            case 5:
                console.log("Thoát chương trình");
                
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
                
        }
    } while (choice !== 5);
}

studentManager();
