let array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum: number = 0;

// forEach - обход всех элементов массива и запуск определённой функции
// для значения каждого элемента
array1.forEach((value) => sum += value);
console.log("sum " + sum);

// увеличение каждого элемента массива на 1
// принимает в качестве параметра: значение элемента массива, его индекс и сам массив
array1.forEach((value: number, index: number, array: number[]) => {
   array[index] = value + 1;
});

console.log(array1);
