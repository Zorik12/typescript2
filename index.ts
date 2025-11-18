console.log(1);

function calculate(num1, num2, operator) {
    const operations = {
        "+": (k, y) => k + y,
        "-": (k, y) => k - y,
        "*": (k, y) => k * y,
        "/": (k, y) => y !== 0 ? k / y : "Ошибка: деление на ноль"
    };
    
    const operation = operations[operator];
    return operation ? operation(num1, num2) : "Ошибка: неверный оператор";
}

console.log(calculate(10, 5, "+")); 
console.log(calculate(10, 5, "-"));  
console.log(calculate(10, 5, "*")); 
console.log(calculate(10, 5, "/"));  
console.log(calculate(10, 0, "/"));  
console.log(calculate(10, 5, "^"));  