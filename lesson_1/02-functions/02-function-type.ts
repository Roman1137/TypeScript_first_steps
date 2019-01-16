// при создании переменной можно указать тип данных определяющий сигнатуру функции.
// параметры => возвращаемый тип
let myAdd: (x: number, y: number) => number; // myAdd имеет вот такой тип данных
let myProc: () => void; // переменной может быть присвоена функция, которая ничего не принимает и не возвращает

function myAddDeclaration(x: number, y: number): number {
    return x + y;
}

myAdd = myAddDeclaration;
console.log(myAdd(10, 20)); // выводим на консоль возвращаемое значение функции

myProc = function () {
    console.log("Hello world");
};

let myProc2 = () => {
    console.log("Hello world2");
};

myProc(); // вызов функции
myProc2(); // вызов функции
