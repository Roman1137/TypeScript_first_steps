class Employee {
    public name: string;
    position: string; // по умолчанию public т.к нету модификатора
    private company: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
        this.company = "My Company";
    }

    printToConsole(): void {
        console.log(`Employee ${this.name}, position - ${this.position}, company - ${this.company}`);
    }
}

let emp1: Employee = new Employee("Ivan", "Developer");
emp1.name = "John";
emp1.position = "QA Automation";

// emp1.company = "..."; [ts] // : Property 'company' is private and only accessible within class 'Employee'.

emp1.printToConsole();
