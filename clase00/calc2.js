const multiplyWithoutAsterisk = (num1, num2) => {
    let result = 0;
    let positive = true;

    if (num1 == 0 || num2 == 0){
        return result;
    } else if( (num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
      
        for (let i = 0; i < Math.abs(num2); i++) {
            result += num1;
        }
    } 
    if (Math.abs(num1) > Math.abs(num2)) {
    } else {
        for (let i = 0; i < Math.abs(num1); i++) {
            result += Math.abs(num2);
        }
    }
    if (positive){
        return result;
    } else {
        return -Math.abs(result);
    }
}
var mult = multiplyWithoutAsterisk(5, -5);
console.log(mult)

var mult = multiplyWithoutAsterisk(0, -5);
console.log(mult)

var mult = multiplyWithoutAsterisk(-2, -5);
console.log(mult)

var mult = multiplyWithoutAsterisk(-5, 2);
console.log(mult)