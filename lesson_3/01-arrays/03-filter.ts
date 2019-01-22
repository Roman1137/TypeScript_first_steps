// filter - возвращает новый массив, состоящий из элементов отобранных функцией-предикатом

let array4: number[] = [1, 2, 3, 4, 5, 6];

// получаем все четные элементы
let array5 = array4.filter((value) => (value % 2) === 0);

console.log(array4);
console.log(array5);
