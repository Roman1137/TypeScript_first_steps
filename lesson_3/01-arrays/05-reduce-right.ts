// Метод reduce(callback, initialValue) применяет функцию к аккумулятору и каждому значению
// массива (слева-направо).

// callback
// Функция, которая передается в метод reduce первым аргументом, сама МОЖЕТ принимать 4 аргумента:
//       - previous value
//              Значение, возвращеное предыдущим выполнением функции callback, либо значение InitialValue если оно есть
//       - currentValue
//              Текущий обрабатываемый элемент массива
//       - currentIndex
//              Индекс текущего обрабатываемого элемента массива.
//       - array
//              Массив, для которого была вызвана функция reduce
// initialValue
// Необязательный параметр. Объект, используемый в качестве первого аргумента при первом
// вызове функции callback. Если его не передать, то в примере ниже при первом запуске:
// prev будет 10, а current - 2

let values2: number[] = [10, 2, 3, 4, 5, 6];

let total: number = values2.reduce((prev, current, index, array) => {
    console.log("prev " + prev + " current " + current + " index " + index + " array " + array);
    return prev + current;
}, 0);

// можна использовать не все параметры.
let total2: number = values2.reduce((prev, current) => {
    console.log("prev " + prev + " current " + current);
    return prev + current;
}, 50);

console.log(total);
console.log(total2);

// reduce right
// всё то же самое, но с теперь справа на лево
console.log("reduceRight()");
let total1: number = values2.reduceRight((prev, current, index, array) => {
    console.log("prev " + prev + " current " + current + " index " + index + " array " + array);
    return prev + current;
}, 0)
