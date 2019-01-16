function repeatOperation(count: number, callback: () => void): void {
    console.log("start");
    for (let i = 0; i < count; i++) {
        callback();
        // контекст этой функции - это глобальный объект window.
        // если в callback функции используется контект, он будет браться отсюда, как в примере test1(),
        // если не сделать так, как в примерах test12, test123
    }
    console.log("stop");
}

let settings = {
    displayName: "test object",

    test1: function () {
        // 1:35:00. Суть такая, что когда я писал этот callback, то, да, мне this.displayName было доступно.
        // Но, когда эта функция будет выполняться, то этот callback передастся в функцию repeatOperation,
        // а она то находится в совсем другом контексте(window), а у window нету свойства displayName.
        // Чтобы решить эту проблемму раньше делали так:
        // let that = this; И использовали that вместо this (console.log(that.displayName)) - чтобы не потерять контекст.
        // смотри пример ниже.
        repeatOperation(3, (function () {
            console.log(this.displayName); // выведет 3 раза undefined
        }));
    },

    test12: function () {
        const that = this;
        repeatOperation(3, (function () {
            console.log(that.displayName); // выведет 3 раза "test object"
        }));
    },

    test123: function () {
        repeatOperation(3, (function () {
            console.log(this.displayName); // выведет 3 раза "test object"
        }).bind(this));
    },

    test2: function () {
        // arrow function захватывает контекст, в котором эта arrow function создавалась.
        // ключевое слово this будет указывать на объект settings
        // когда мы передадим нашу arrow function, то контекст сохранится.
        repeatOperation(3, () => console.log(this.displayName));
    }
};

settings.test1();
settings.test12();
settings.test123();

settings.test2();