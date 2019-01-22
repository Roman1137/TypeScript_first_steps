// Метод slice(begin, end) копирует участок массива от begin до end,
// не включая end. Исходный массив при этом не меняется.
// Синтаксис метода slice одинаков для строк и для массивов. Тем проще его запомнить.

let arr5 = ["Почему", "надо", "учить", "JavaScript"];
let arr52 = arr5.slice(1, 3); // элементы 1, 2 (не включая 3)
console.log(arr52); // надо, учить

// Если не указать end – копирование будет до конца массива
console.log(arr5.slice(1)); // взять все элементы, начиная с номера 1

// Можно использовать отрицательные индексы, они отсчитываются с конца
console.log(arr5.slice(-2)); // копировать от 2-го элемента С КОНЦА и дальше в сторону конца

// Если вообще не указать аргументов – скопируется весь массив:
console.log(arr5.slice());
