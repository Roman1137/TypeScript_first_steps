// abstract - ключевое слово, которое позволяет создавать абстрактные методы и абстрактные классы.
// абстрактный класс - это класс, который может выступать только в роли базового класса.
// Создать экземпляр абстрактного класса нельзя
// абстрактный метод - это метод, который не иметт реализации в текущем классе, но обязательно должен быть реализова
// абстрактные методы могут создаваться только в абстрактных классах.

abstract class Animal {
    // можна сделать конструктор protected
    // protected constructor(public name: string) {}
    constructor(public name: string) {}

    public abstract makeSound();

    public move(): void {
        console.log(this.name + " передвигается");
    }
}

class Cat extends Animal {
    constructor() {
        super("Кот");
    }

    // обязательная реализация абстрактного метода из базовго класса
    // если назвать метод по-другому, то будет ошибка коспиляции так, как мы не
    // реализовали абстрактный метод makeSound()
    public makeSound() {
        console.log("Мяу-мяу");
    }
}

class Cow extends Animal {
    constructor() {
        super("Корова");
    }

    // обязательная реализация абстрактного метода из базовго класса
    public makeSound() {
        console.log("Му-у-у-у-у");
    }
}

let murzik: Cat = new Cat();
murzik.makeSound();
murzik.move();

let burenka: Cow = new Cow();
burenka.makeSound();
burenka.move();

// let a = new Animal(); //  Cannot create an instance of an abstract class.
