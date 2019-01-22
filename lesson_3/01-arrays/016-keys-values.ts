// Методы keys(), values(), entries() возвращают объект-iterator, который можна использовать
// для перебора в for..of

let arr13 = ["one", "two", "three"];
let keysIterator = arr13.keys();
for (const key of keysIterator) {
    console.log(key);
}

let valuesIterator = arr13.values();
for (const value of valuesIterator) {
    console.log(value);
}

let entriesIterator = arr13.entries();
for (const entry of entriesIterator) {
    console.log(entry); // [ 0, 'one' ], потом [ 1, 'two' ], потом [ 2, 'three' ]
}

// Метод Object.keys возвращает массив ключей
console.log(Object.keys(arr13)); // [ '0', '1', '2' ]
console.log(Object.getOwnPropertyNames(arr13)); // [ '0', '1', '2', 'length' ]
