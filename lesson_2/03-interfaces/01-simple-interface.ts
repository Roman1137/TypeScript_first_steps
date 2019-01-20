// Интерфейсы позволяют описать требования к объектам, которые мы
// собираемся использовать.

function printValue1(obj: { name: string }) {
    console.log(obj.name);
}

let myObj1 = {value: 10, name: "Hello"};
printValue1(myObj1);

let myObj2 = {data: 10, param: "Hello"};
//printValue1(myObj2); ошибка т.к в объекте myObj2 нету свойства 'name'

// определяем интерфейс NamedValue
// Данны интерфейс можно рассматривать как требования к объектам
// ИМЕТЬ СВОЙСТВО с именем 'name' типа string
interface INamedValue {
    name: string;
}

// функция printValue2 принимает параметр типа INamedValue
// в качестве параметра можно передать экземпляр класса, который реалиовал интерфейс INamedValue
// или объект, который по своей структуре ПОДХОДИТ под указанный интерфейс.
function printValue2(obj: INamedValue) {
    console.log(obj.name);
}

let myObj3 = { value: 10, name: "World"};
printValue2(myObj3);

let myObj4 = { data: 10, param: "Hello"};

// ошибка т.к объект myObj4 не имеет свойства 'name'
//printValue2(myObj4);