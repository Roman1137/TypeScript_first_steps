class MyClass1 {
    // если закомменировать, то ничего не получится.
    // тут, как в C# нужно обьявить поля и инициализировать их в конструкторе.
    value: string;

    // опеделение конструктора для инициализации класса
    constructor() {
        console.log("Работает конструктор класса MyClass1");
        this.value = "Hello World";
    }
}

console.log("Создани экземпляра класса MyClass1");
let temp = new MyClass1();
console.log(temp.value);