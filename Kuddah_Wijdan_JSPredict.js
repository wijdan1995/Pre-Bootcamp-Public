// Predict 1 (I was born in 1980)
// Predict 2 (I was born in 1980)
// Predict 3 (Summing Numbers!
// num1 is: 10
// num2 is: 20
// 30)




var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}
console.log(num1);
console.log(num2);