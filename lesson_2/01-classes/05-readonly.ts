// помощью ключевого слова readonly можно создать поля только для чтения.
// Такое поле может быть инициализировано В ДВУХ СЛУЧАЯХ:
//      - в момент его создания
//      - в конструкторе
class Dog {
    public readonly name: string;
    public readonly numberOfLegs: number;

    constructor(name: string) {
        this.name = name;
    }
}

let dog: Dog = new Dog("Sharik");
console.log(dog.name);
console.log(dog.numberOfLegs);

// dog.numberOfLegs = 50; // Cannot assign to 'numberOfLegs' because it is a read-only property
// dog.name = "qwerty"; //  Cannot assign to 'name' because it is a read-only property
