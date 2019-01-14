"use strict";
function let1() {
    // console.log(i); // Variable 'i' is used before being assigned.
    // console.log(test); // Variable 'test' is used before being assigned.
    for (let i = 0; i < 10; i++) {
        // let test = i;
    }
    console.log(i); // 10
    console.log(test); // 9
}
let1();
// Повторное определние переменной приводит к ошибке
function let2() {
    let a = 10;
    //var a = 20; //[ts] cannot redeclare block-scoped variable a
    console.log(a); // 10
}
let2();
// 0, 1, 2, 3, 4
// будет работат только при наличии опции для компилятора "target":"ES6"
function let3() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () { console.log(i); }, 10);
    }
}
let3();
//# sourceMappingURL=03-let-scoping.js.map