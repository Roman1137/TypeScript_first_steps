
// будем делать так, чтобы класс MyNumberCollection работал с циклом for-of
class MyNumberCollection {
    private data: number[] = [];

    public add(value: number) {
        this.data.push(value);
    }

    // этот метод используется для того, чтобы получить итератор
    // метод [Symbol.iterator] играет роль метода values() и предыдущего примера
    // [Symbol.iterator] служит сигнализатром для интерапретатора, что в классе есть интератор
    // и мы должны использовать [Symbol.iterator], чтобы вернуть итератор
    public [Symbol.iterator]() {
        let current: number = 0;
        const data = this.data;

        // [Symbol.iterator](), возвращает итератор, в котором есть метод next()
        // вот это(то, что ниже) и есть итератор
        return {
            next() {
                if (current < data.length) {
                    return {
                        done: false,
                        value: data[current++],
                    };
                } else {
                    return {
                        done: true,
                        value: null,
                    };
                }
            },
        };
    }
}

let myNumberCollection = new MyNumberCollection();
myNumberCollection.add(10);
myNumberCollection.add(20);
myNumberCollection.add(30);
myNumberCollection.add(40);


// C помощью for-of, мы сможем пройтись по объекту,
// внутри которого существует ИТЕРАТОР!
// Можна сказать, что интерпретатор, на экземпляре класса myNumberCollection, запускет
// метод values(), в данном случае - это [Symbol.iterator] и ПОЛУЧАЕТ ИТЕРАТОР.
// потом он использует метод next() в цикле while до тех пор, пока не будет done: true
for (const item of myNumberCollection) {
    console.log(item);
}