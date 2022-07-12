class Calculator {
    add(a,b){return a+b;}
    substract(a,b){return a-b;}
    multipy(a,b){return a*b;}
    divide(a,b){return Math.round(a/b)}
}
const calculator = new Calculator;
module.exports = calculator;