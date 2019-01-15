// Кортеж - упорядоченный набор фиксированной длины
let x: [string, number]; // определение кортежа
x = ["Hello", 20]; // инициализация кортежа

console.log(x); // выведет ["Hello", 20]
console.log(x[0]); // Hello
console.log(x[1]); // 20

// кортеж на три значения
let y: [number, string, string] = [1, "Hello", "world"];
console.log(y[2]); // "world"

// y[0].substr(1);  //[ts] Property subst does not exist on type 'number'
