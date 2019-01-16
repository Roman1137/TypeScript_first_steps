// arrow function - специальный синтаксис определения функций.

// в переменной increment находится функция, которая принимает один параметр и
// возвращает его значение, увеличенное на один.

// вот тут используется анонимная функция
let increment = function (x: number) {return x + 1; };

let incrementArrow1 = (x: number) => {return x + 1; };

let incrementArrow2 = (x: number) => x + 1;

// тут 'x' имеет тип 'any'
let incrementArrow3 = (x) => x + 1;

// а уже тут 'x' имеет тип 'number'
let incrementArrow4: (x: number) => number = (a) => a + 1;
