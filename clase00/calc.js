const multiplyWithoutAsterisk = (num1, num2) => {
    if (num1 == 0 || num2 == 0) return 0;
    let result = 0
    for (let i = 0; i < Math.abs(num1); i++) { result += Math.abs(num2)
        }
    return ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) ? -Math.abs(result) : result
}

var mult = multiplyWithoutAsterisk(5, -5);
console.log(mult)

var mult = multiplyWithoutAsterisk(0, -5);
console.log(mult)

var mult = multiplyWithoutAsterisk(-3, 0);
console.log(mult)

var mult = multiplyWithoutAsterisk(-2, -5);
console.log(mult)

var mult = multiplyWithoutAsterisk(-7, 2);
console.log(mult)