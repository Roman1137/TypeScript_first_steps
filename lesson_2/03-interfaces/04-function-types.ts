// интерфейс описывает сигнатуру функции.
// функция должна принимать одно строковое значение и
// возвращать boolean
interface ISearchible {
    (value: string): boolean;
}

// подскзывает сделать так: type ISearchible = (value: string) => boolean;
// подсказывает потому, что интерфейс вмещает только одно поле - value.
// если в интферйсе удет 2 поля и больше - подсказки не будет.
type ISearchible2 = (value: string) => boolean;

// подскзывает сделать так: type ISearchible = (value: string) => boolean;

let myArray1: ISearchible = function (value: string): boolean {
    return !!value;
};

// имена переметов не обязательно должны совпадать с именами в интерфейсе
let myArray2: ISearchible = function (data: string): boolean {
    return !!data;
};