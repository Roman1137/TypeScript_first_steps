// импорт всего содержимого модуля в переменную validators
import * as validators from "./01-validators";

const ccValidator = new validators.CreditCardValidator();
const urlValidator = new validators.UrlValidator();

console.log(ccValidator, urlValidator);

// вот так, мы можем использовать интерфейс IValidator, который тоже лежит в переменной 'validators'
/*class MyC implements validators.IValidator {

}*/
