"use strict";
// Без явного указания типа
const message1 = "Hello";
const message11 = "Hello";
let message2 = "Hello!";
// TypeScript коспилятор может определить значение автоматически по значению, которое я присваиваю переменной первый раз.
// "let" без присвоения типа в TS, это как "var" в С#
// но, лучше всё таки указывать тип данных.
let message3 = "Hello!";
//ошибка. по этому и не нужно было объявлять так: let message3 : string
//message3 = 2;
//# sourceMappingURL=01-variables.js.map