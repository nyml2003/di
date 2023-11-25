import {Calculator} from "./calculator/calculator";

let calculator = Calculator.getInstance();
console.log(calculator.exec("add", [1, 2, 3, 4, 5]));
console.log(calculator.exec("sub", [1, 2, 3, 4, 5]));
console.log(calculator.exec("mul", [1, 2, 3, 4, 5]));
console.log(calculator.exec("div", [1, 2, 3, 4, 5]));
console.log(calculator.exec("pow", [1, 2, 3, 4, 5]));