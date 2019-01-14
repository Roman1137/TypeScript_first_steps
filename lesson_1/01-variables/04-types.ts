// Boolean
let isDone: boolean = false;
// isDone = 1; // [ts] type '1' is not assignable to type 'boolean'

console.log(isDone);

// Number
let a1Decimal: number = 10;
let a2Hex: number = 0x000a;
let a3Binary: number = 0b1010;
let a4Octal: number = 0o12;

console.log(a1Decimal);
console.log(a2Hex);
console.log(a3Binary);
console.log(a4Octal);

// String
let firstName: string = "Ivan";
let age: number = 25;
let messageTemplate: string = `Hello, my name is ${firstName} I'm ${age} years old`; // template string
let messageConcat: string = "Hello, my name is " + firstName + " I'm " + age + " years old."; // concatenation

console.log(messageTemplate);
console.log(messageConcat);

// ссылка на issue о tslint https://github.com/palantir/tslint/issues/1704

console.log("dgfdgvxcvxcf");
