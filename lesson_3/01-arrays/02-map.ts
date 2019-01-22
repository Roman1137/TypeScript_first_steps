// map обходит все элементы массива и возвращает новый массив со значениями,
// которая вернула callback функция, которая передается в map()

let array2: number[] = [1, 2, 3, 4, 5];

let array3: number[] = array2.map((val) => Math.pow(val, 2));

console.log(array2);
console.log(array3);
