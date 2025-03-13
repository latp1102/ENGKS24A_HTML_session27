const isArithmeticSequence = (arr) => {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(num => Number.isInteger(num))) {
        return "dữ liệu không hợp lệ";
    }

    const diff = arr[1] - arr[0]; 
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false;
        }
    }
    return true;
};

console.log(isArithmeticSequence([2,4,6,8]));
console.log(isArithmeticSequence("abc"));
