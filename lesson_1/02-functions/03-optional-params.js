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
//# sourceMappingURL=03-optional-params.js.map