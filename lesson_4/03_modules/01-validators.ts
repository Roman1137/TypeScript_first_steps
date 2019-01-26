/*
* Модуль - отдельный файл со свойей областью видимости. Переменные, функции, классы, и т.д,
* определённые в модуле не доступны за его пределами.
* Если namespace - это кусок кода, со своей локальной областью видимости, то модуль - это файл.
*
* ЛЮБОЙ ФАЛОЙ, В КОТОРОМ на верхнем уровне находится import или export ЯВЛЯЕТСЯ МОДУЛЕМ.
* Зависимости между модулями определяются с помощью ключевого слова import
*
* Модули импортируются с помощью загрузчиков модулей. Во время выполнения, загрузчик модуля,
* ответственный за ограничения модуля и его загрузку перед его выполнением
*
* Загрузки модулей - Webpack, CommonJS, SystemJS, requier.js
*/

// Так, как у нас на верхнем уровне есть export, то, этот файл - МОДУЛЬ.

export interface IValidator {
    validate(value: string): boolean;
}

export class CreditCardValidator implements IValidator {
    public validate(value: string): boolean {
        return !!value;
    }
}

export class UrlValidator implements IValidator {
    public validate(value: string): boolean {
        return !!value;
    }
}

