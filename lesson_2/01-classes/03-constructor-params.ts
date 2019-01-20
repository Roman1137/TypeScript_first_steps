class Student {
    firstName: string;
    age: number;

    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }

    print() {
        console.log(`Student - ${this.firstName}, age - ${this.age} years`);
    }
}

let student1 = new Student("Ivan", 25);
let student2 = new Student("John", 23);

student1.print();
student2.print();
