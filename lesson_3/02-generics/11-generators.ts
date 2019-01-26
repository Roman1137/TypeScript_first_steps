// generator function - это возможность создать коллекцию, применить минимум
// усилий и написав минимум кода.

// function* - generator function
// останавливается после каждого слова yield(до тех пор, пока не будет вызван метод next() ещё раз)
function* stringSequence() {
    yield "Hello";
    yield " ";
    yield "world";
    yield "!";
}

// сам по себе вызов генератор фукции не приводит ни к каким действиям! Мы просто полуаем объект
// который можна будет воспользоваться.
// тут мы просто получаем generator object, само ТЕЛО ФУНКЦИИ НЕ ВЫПОЛНЯЕТСЯ
// зажми ctrl и наведи на метод. Увидишь, что она вощзвращает IterableIterator<"Hello" | " " | "world" | "!">
let iterable1 = stringSequence();
let result = "";

// когда будет вызван метод next(), то начнёт выполняться generator function ДО ПЕРВОГО КЛЮЧЕВОГО СЛОВА yield
// после этого функция ПРИОСТАНОВИТ СВОЮ РАБОТУ до следующего вызова метода next()
// а цыкл for-of перед каждой итерацией дёргает метод next()!
for (const item of iterable1) {
    result += item;
}
console.log(result);

class MyStringCollection {
    private values: string[] = [];

    constructor() {
        this.values[0] = "Hello";
        this.values[1] = " ";
        this.values[2] = "world";
        this.values[3] = "!";
    }

    public* getValues() {
        for (const item of this.values) {
            yield item;
        }

        /*for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }*/
    }
}

// iterable2 IterableIterator<string>
let iterable2: IterableIterator<string> = new MyStringCollection().getValues();
result = "";
for (const item of iterable2) {
    result += item;
}

console.log(result);
console.log(iterable2);
