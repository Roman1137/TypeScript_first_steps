// Метод arr.concat(value1, value2, … valueN) создаёт новый массив,
// в который копируются элементы из arr, а также value1, value2, ... valueN.

let arr10: number[] = [1, 2];
let newArr = arr10.concat(3, 4, 5);
console.log(newArr); // [ 1, 2, 3, 4, 5 ]

// У concat есть одна забавная особенность.
// Если аргумент concat – массив, то concat добавляет элементы из него.
let newArr2 = newArr.concat([6, 7, 8], 9);
console.log(newArr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]