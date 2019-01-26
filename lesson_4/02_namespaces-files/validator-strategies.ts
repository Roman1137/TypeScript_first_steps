namespace Validation {

    // интерфейс для классов валидатора
    export interface IValidatorStrategy {
        message: string;

        validate(value: string): boolean;
    }

    export class RequiresValidator implements IValidatorStrategy {
        public message: string = "Обязательное поле";

        public validate(value: string): boolean {
            return value === "";
        }
    }

    export class NumberValidator implements IValidatorStrategy {
        public message: string = "Значение должно быть числом";

        public validate(value: string): boolean {
            return !/\d+/.test(value);
        }
    }

    export class EmailValidators implements IValidatorStrategy {
        public message: string = "Значение должно быть email адресом";

        public validate(value: string): boolean {
            return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
        }
    }
}