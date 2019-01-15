let year: string[]; // массив строковых значений
year = ["January", "Februry"];

// Type 'number' is not aasignable to type 'string'
// year = [1, "January", "Februry"];

// определние числового массива и его инициализация
let list: number[] = [1, 2, 3];
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}


// Создание массива, используя generic тип данных Array(TS Lint немного ругается)
let values: Array<number> = [-1, -2, -3];
for (const value of values) {
    console.log(value);
}
