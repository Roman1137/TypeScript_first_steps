"use strict";
// В TypeScript все параметры функции являются обязательными.
// но если после имена параметра указать символ ? , то параметр СТАНОВИТСЯ опциональным.
// Если при вызове такой функции опциональный параметр не передать - его значение становится undefined.
// Опциональные параметры могут быть только последними параметрами в списке параметров метода.
// optional parameters
function getFullName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
let fullName1 = getFullName("Ivan", "Ivanov");
let fullName2 = getFullName("Ivan");
console.log(fullName1);
console.log(fullName2);
// параметры со значение по умолчанию - это параметры метода, для которых в объявлении функции
// присвоено значение, которое будет использоваться если функция будет вызвана без
// указания значения для данного параметра или если в качестве значения будет передано undefined
// Разница между optional и default-initialize параметрами в том, что если пр вызове метода не
// передать вообще ничего, то в случен optional - возьмется undefined, а в default-initialize - значение,
// что указано.
// default-initialize parameters
function getDisplayedName(firstName, lastName = "Ivanov") {
    return "Display Name: " + firstName + " " + lastName;
}
let fullName3 = getDisplayedName("Ivan", "Ivanov");
let fullName4 = getDisplayedName("Ivan");
let fullName5 = getDisplayedName("Ivan", undefined); // идентиен предыдущему вызову
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
//# sourceMappingURL=03-optional-params.js.map