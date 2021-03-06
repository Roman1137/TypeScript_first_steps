
// https://learn.javascript.ru/array
// Длина length – не количество элементов массива, а последний индекс + 1.

// Так уж оно устроено.
let arr = [];
arr[1000] = true;

console.log(arr.length); // 1001

// Используем length для укорачивания массива
// Обычно нам не нужно самостоятельно менять length… Но есть один фокус, который можно провернуть.
// При уменьшении length массив укорачивается.

// Причем этот процесс необратимый, т.е. даже если потом вернуть length обратно – значения не восстановятся:
let arr1 = [1, 2, 3, 4, 5];

arr1.length = 2; // укоротить до 2 элементов
console.log(arr1); // [1, 2]

arr1.length = 5; // вернуть length обратно, как было
console.log(arr1[3]); // undefined: значения не вернулись
// Самый простой способ очистить массив – это arr.length=0.
