// интерфейс описыаает ТРЕБОВАНИЕ К generic функции, которая принимает параметр типа Т
// и возвращает значения этого же параметра
interface IGenericFunc {
    <T>(value: T): T;
}
// так, как в интерфейсе только одно поле, то предлагает переделать на:
type GenericFuncType = <T>(value: T) => T;

// Вот как выглядит интерфейс но с обычной функцией
interface ISearchible {
    (value: string): boolean;
}

function testFunc<T>(value: T): T {
    return value;
}

// компилятор смотрит, чтобы типы совпадали, а именно
// сигнатура функции в интерфейсе IGenericFunc и testFunc.
// а так же, мы сделали просто тип - GenericFuncType и компилятор тоже сравнивает этот тип и сигнатуру функции.
let myGenericFunc: IGenericFunc = testFunc;
let myGenericFunc1: GenericFuncType = testFunc;
console.log(myGenericFunc(10));
console.log(myGenericFunc1(10));
