class MyGenericClass<T> {
    public value: T;

    public method1(value: T): void {
        console.log(value);
    }

    public method2(): T {
        return this.value;
    }
}

// Экземпляр обобщенного типа, закрытый типом number
let myGenericNumber = new MyGenericClass<number>();
myGenericNumber.method1(10);
myGenericNumber.value = 100;
console.log(myGenericNumber.method2());

// Экземпля обобщенного типа, закрытый типом string
let myGenericString = new MyGenericClass<string>();
myGenericString.method1("hello");
myGenericString.value = "world";
console.log(myGenericString.method2());