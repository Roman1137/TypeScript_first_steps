// this - контекст функции. This - переменная, которая устанавливается при запуске функции.
function test1() {
    console.log(this);
}

test1(); // global object(window)

let someObj = {
    name: "test",
    testMeth: test1
};

someObj.testMeth(); // а тут уже контекстом будет someObj

// если мы пишем перед ЛЮБОЙ функцией new, то контекст в ней ПОМЕНЯЕТСЯ но новый пустой экземпляр.
// someInstance - пустой объект
let someInstance = new test1(); // new instance

// Но я контекстом МОГУ манипулировать. Можна привязать любой контекст к любой функции.
// Установка контекста в вызываемой функции
function test2(x: number, y: number) {
    console.log(x + y);
    console.log(this);
}

let someTestObj = {name: "test objet"};

// Установка контекста, вариант 1
// someTestObj - контекст, что будет внутри функции, 10 и 20 - это параметры.
// если не присвоить контект, то контекстом будет глобальный объект window
test2.call(someTestObj, 10, 20); // тут контекстом будет { name: 'test objet' }, выведет 30

// Установка контекста, вариант 2
// эффект точно тот же, что и при .call. Разница в том, что параметры метода мы
// передаем, как массив. Иногда удобней .call, а иногда - .apply
test2.apply(someTestObj, [30, 40]); // тут контекстом будет { name: 'test objet' },  выведет 70

// Установка контекста, вариант 3
// привязываем контекст и первый агрумент.
// newFunc - это новая функция, где контекст - someTestObj и первый аргумент уже = 50.
let newFunc = test2.bind(someTestObj, 50);
// в качестве второго аргумента передаем 60.
newFunc(60); // тут контекстом будет { name: 'test objet' }. выведет 110