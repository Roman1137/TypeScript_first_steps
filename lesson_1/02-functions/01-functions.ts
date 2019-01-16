// обычная функция
function add1(x, y) {
    return x + y;
}

let result1 = add1(1, 2);
console.log(result1);

// типизированная функция. Принимает два аргумента типа number и возвращает значение типа number
function add2(x: number, y: number): number {
    return x + y;
}

let result2: number = add2(10, 20);
// let result3: number = add2(10); // ожидается два аргумента
// let result4: number = add2(10, "text"); // второй аргумент должен быть числовым
// let result4: string = add2(10, 20); // результат работы функци не может быть присвоен строковой переменной.
console.log(result2);
