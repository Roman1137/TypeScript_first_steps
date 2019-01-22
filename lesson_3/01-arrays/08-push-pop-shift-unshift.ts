// Массив - может применяться как очередь(first in - first out).
// а так же, как стек - last in - first out.
// https://learn.javascript.ru/array

// КОНЕЦ МАССИВА
// pop - УДАЛЯЕТ элемент из КОНЦА массива и ВОЗВРАЩАЕТ ЕГО
console.log("pop");
let fruits = ["Яблоко", "Апельсин", "Груша"];
console.log(fruits.pop());
console.log(fruits + "\r\n");

// push - ДОБАВЛЯЕТ элемент в КОНЕЦ массив и  ВОЗВРАЩАЕТ НОВУЮ ДЛИНУ(length) МАССИВА
console.log("pop");
let fruits1 = ["Яблоко", "Апельсин", "Груша"];
let lengthNew = fruits1.push("Мандарин");
console.log(lengthNew);
console.log(fruits1 + "\r\n");

// НАЧАЛО МАССИВА

// shift - УДАЛЯЕТ элемент из НАЧАЛА массива и ВОЗВРАЩАЕТ ЕГО
console.log("shift");
let fruits2 = ["Яблоко", "Апельсин", "Груша"];
console.log(fruits2.shift());
console.log(fruits2 + "\r\n");

// unshift - ДОБАВЛЯЕТ элемент в НАЧАЛО массива и ВОЗВРАЩАЕТ НОВУЮ ДЛИНУ(length) МАССИВА
console.log("unshift");
let fruits3 = ["Яблоко", "Апельсин", "Груша"];
let lengthNew1 = fruits3.unshift("Мандарин");
console.log(lengthNew1);
console.log(fruits3 + "\r\n");

// Методы push и unshift могут добавлять сразу несколько элементов
let fruits5 = ["Яблоко"];
fruits5.push("Апельсин", "Персик");
fruits5.unshift("Ананас", "Лимон");
console.log(fruits5);