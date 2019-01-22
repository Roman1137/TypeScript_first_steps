// С помощью spread оператора, мы можем превратить массив/объект в часть другого массива/другого объекта.

let dataArray1: number[] = [1, 2, 3];
// с помощью spread оператора, добавим массив dataArray1 в массив dataArray2
let dataArray2: number[] = [1000, 200, ...dataArray1];

console.log(dataArray2);

let point2D = {x: 10, y: 20};
// эту же фишку можна провернуть с object`ами.
let point3D = {...point2D, z: 30};

console.log(point3D);
