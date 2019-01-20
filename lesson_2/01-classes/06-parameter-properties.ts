class Person {
    // Если при определении параметров в конструкторе указать для них модификаторы доступа
    // то это переметры автоматически станут полям класса с соотвествующим уровнем доступа
    // и значениями, которые будут установлены при вызове конструткора.
    constructor(public name: string, private age: number) {}
    // Это то же самое, что и:
    /*  name: string;
        age: number;
        constructor(name:string, age: number) {
            this.name = name;
            this.age = age;
        }*/

    public print() {
        console.log(this.name + " " + this.age);
    }
}

let person: Person = new Person("Roman", 25);
person.print();

person.name = "11111";
//person.age = 111; // Property 'age' is private and only accessible within class 'Person'.
