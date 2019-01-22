// Метод sort() сортирует массив на месте
let arr6 = [1, 2, 15];
arr6.sort();
console.log(arr6); // Выведет [ 1, 15, 2 ]. Странно, да?
// Это потому, что по-умолчанию массив сортирует, преобразуя элементы в строке.
// Поэтому и порядок у них строковый, ведь "2" > "15".

// Для указания своего порядка сортировки в метод arr.sort(fn)
// нужно передать функцию fn от двух элементов, которая умеет сравнивать их.
function compareNumeric(a: number, b: number): number {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

let arr7 = [56, 333, 66];
arr7.sort(compareNumeric);
console.log(arr7);

// Сравнение compareNumeric в одну строку
// Функцию compareNumeric для сравнения элементов-чисел можно упростить до одной строчки.
function compareNumeric2(a: number, b: number): number {
    return a - b;
}

let arr8 = [56, 333, 66];
arr8.sort(compareNumeric2);
console.log(arr8);