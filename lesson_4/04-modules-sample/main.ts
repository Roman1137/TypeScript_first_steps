/*тут мы избавляемся от namespace вообще.
вместо него мы используем модули.
Посмотри, насколько удобней использовать модули, по сравнению с namespaces*/

// после компиляции ts файлы удут преоразованы в js
// для работы примеров в tsconfig.json нужно установить "module": "es6"
import {ValidationResult, Validator} from "./validator";

export let data1 = {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 25,
    email: "ivanov@example.com",
};

let data2 = {
    firstName: "Ivan",
    lastName: "",
    age: "qwe",
    email: "example.com",
};

// определение правил проверки объекта
let config = {
    firstName: "required",
    lastName: "required",
    age: "number",
    email: "email"
};

const validator = new Validator(config);
const result: ValidationResult = validator.validate(data1);
console.log(result.valid); // true
console.log(result.errors);

const result2 = validator.validate(data2);
console.log(result2.valid); // false
console.log(result2.errors);
