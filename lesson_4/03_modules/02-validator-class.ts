// импорт интерфейса Validator из модуля 01-validators
import {IValidator} from "./01-validators";
// Так, как import сверху - значит этот файл уже тоже МОДУЛЬ

// импорт нескольких типов
// import {Validator, CreditCardValidator} from "./01-validators";

class PhoneNumberValidator implements IValidator {
    public validate(value: string): boolean {
        return !!value;
    }
}

const phoneVal = new PhoneNumberValidator();
console.log(phoneVal.validate("000-00-00"));
