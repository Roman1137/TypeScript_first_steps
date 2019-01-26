// Вместо ///// <reference path="validator-selector.ts" /> используется следующее:
import {ValidatorSelector} from "./validator-selector";

export class Validator {
    public config: any;

    constructor(config: any) {
        this.config = config;
        ValidatorSelector.initialize();
    }

    public validate(data: any): ValidationResult {
        const messages: string[] = [];

        for (const propertyName in data) {
            // метод hasOwnProperty() проверяет, что свойство принадлежит именно объекту, а не
            // прототипу
            if (data.hasOwnProperty(propertyName)) {
                const validatorName = this.config[propertyName];

                if (!validatorName) {
                    continue;
                }

                const validator = ValidatorSelector.select(validatorName);
                const invalid = validator.validate(data[propertyName]);

                if (invalid) {
                    const message = "Не правильное знаение для " + propertyName + ", " + validator.message;
                    messages.push(message);
                }
            }
        }

        return {
            valid: messages.length === 0,
            errors: messages,
        };
    }
}

export class ValidationResult {
    public valid: boolean;
    public errors: string[];
}