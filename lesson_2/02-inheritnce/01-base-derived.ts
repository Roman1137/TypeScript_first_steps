class Base {
    public value1: string;
    protected value2: string;
    private value3: string;

    constructor() {
        this.value1 = "public value 1";
        this.value2 = "protected value 2";
        this.value3 = "protected value 3";
    }

    public method1(): void {
        console.log("public method 1 call");
    }

    protected method2(): void {
        console.log("protected method 2 call");
    }

    private method3(): void {
        console.log("private method 3 call");
    }

    public someMethod() {
        console.log(this.value3);
        this.method3();
    }
}

class Derived extends Base {
    constructor() {
        super(); // вызов конструктора базового класса. Обязательная операция при наследовании

        console.log("public property = " + this.value1);
        console.log("protected property = " + this.value2);

        this.method1();
        this.method2();
    }
}

let derived1: Derived = new Derived();

// доступен только method1 так, как он public.
// Остальные методы не доступны.
console.log(derived1.value1);
