"use strict";
// Boolean
let isDone = false;
// isDone = 1; // [ts] type '1' is not assignable to type 'boolean'
console.log(isDone);
// Number
let a1Decimal = 10;
let a2Hex = 0x000a;
let a3Binary = 0b1010;
let a4Octal = 0o12;
console.log(a1Decimal);
console.log(a2Hex);
console.log(a3Binary);
console.log(a4Octal);
// String
let firstName = "Ivan";
let age = 25;
let messageTemplate = `Hello, my name is ${firstName} I'm ${age} years old`; // template string
let messageConcat = "Hello, my name is " + firstName + " I'm " + age + " years old."; // concatenation
console.log(messageTemplate);
console.log(messageConcat);
// ссылка на issue о tslint https://github.com/palantir/tslint/issues/1704
console.log("dgfdgf");
//# sourceMappingURL=04-types.js.map