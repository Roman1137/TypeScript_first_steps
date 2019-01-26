import {RequiresValidator, NumberValidator, EmailValidators, IValidatorStrategy} from "./validator-strategies";

export class ValidatorSelector {
    // в качестве ключа - строковое поле id, в качестве значения - Validator.IValidatorStrategy
    private static validatiors: { [id: string]: IValidatorStrategy } = {};

    static initialize() {
        // так, как всё находится в одном namespace Validation, то можна как и писать Validation.RequiresValidator();, так и просто new RequiresValidator();
        ValidatorSelector.validatiors["required"] = new RequiresValidator();
        ValidatorSelector.validatiors["number"] = new NumberValidator();
        ValidatorSelector.validatiors["email"] = new EmailValidators();

        // для избежания повторной инициализации
        ValidatorSelector.initialize = () => {};
    }

    static select(name: string): IValidatorStrategy {
        const validator: IValidatorStrategy = ValidatorSelector.validatiors[name];
        if (validator) {
            return validator;
        } else {
            throw new Error("Не найден валидатор " + name);
        }
    }
}