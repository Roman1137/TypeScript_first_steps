// triple slash reference
// используется как директива для компилятора и считается валиднй только если определена В НАЧАЛЕ ФАЙЛА.
// данный синтаксис используется для определения зависимостей между фалами. Так, как в данном файле
// используется пространство имен Validation, которое находится в файле Validation.ts, директива указывает компилятру, что файл
// должен использоваться при компиляции текущего файла main.ts.

/// <reference path="validator.ts" />
// применяется компилятором, чтобы определить правильеую последовательность компиляции файлов.
// дело в том, что для работы одного файла могут понадобиться другие файлы. Таким образом, компилятору
// стоит начать с тех файлов, которые не зависят от других файлов.

// Определяем последовательность файлов для компиляции
// 1. Нам нужно, чтобы работал main.ts. Идем в main.ts -> он зависит от validator.ts
// 2. Идем в validator.ts -> он зависит от validator-selector.ts
// 3. Идём в validator-selector.ts -> он зависит от validator-strategies.ts
// 4. Идем в validator-strategies.ts -> он не от кого не зависит.

// Итого: чтобы заработал main.ts, файлы должны компилироваться в след. последовательности:
// 1.validator-strategies.ts
// 2.validator-selector.ts
// 3.validator.ts
// 4.main.ts

// Сейчас 'соберем' все эти файлы в один - app.js с помощью специальной команды для компилятора
// Переходим в папку C:\project\TypeScript_Fundamentals\lesson_4\02_namespaces-files>
// Выполняем: tsc --outfile app.js main.ts  , где app.js - файл, куда будет ложиться весь код,
//                                                main.ts - файл с которого будет начинаться компиляция
// Теперь можна запустить app.js и всё заработает.

// Когда у меня были проблеммы с wdio, то мне как раз не хватало такой ссылки(/// reference) на типы.

namespace NamespaceFileSample {

    let data1 = {
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

    export function run() {
        let validator = new Validation.Validator(config);
        let result: Validation.ValidationResult = validator.validate(data1);
        console.log(result.valid); // true
        console.log(result.errors);

        let result2 = validator.validate(data2);
        console.log(result2.valid); // false
        console.log(result2.errors);
    }
}

NamespaceFileSample.run();