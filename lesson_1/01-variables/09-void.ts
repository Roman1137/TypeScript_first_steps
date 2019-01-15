// тип данных void - тип данных, указыващий на отсутстви какого-либо значения.
// используется для того, чтобы при определении функции ЯВНО указать на отсутствие возвращаемого значения.
function myProcedure(): void {
    console.log("hello");
}

// тип void можно использовать для определения переменных, но такой переменной можно
// присвоить только значение undefined
let someVoidValue: void = undefined;

// переменная типа undefined
let undefinedVariable: undefined = undefined;
// переменная типа null
let nullVariable: null = null;

// по умолчанию, значение null и undefined могут быть присвоены любому другому типу данных
// при опции компилятора --strictNullChecks, null и undefined могут быть использованы
// для инициализации типов

// что-то у меня компилятор всё равно ругается.
// let testNumber: number = undefined;
