// namespace(пространство имён) - механизм для группировки кода и определения отдельных областей видимости.
// Код, помещённый в пространство имён, находится в области видимости пространства имён, а не в глобальноый области видимсоти.
// Для того, чтобы элементы пространствоа имён были доступны за пределами пространства имён, небходимо использовать ключевое слово 'export'

// определение пространства имён с именем Sample1
namespace Sample1 {

    //класс MyClass1 будет доступен за пределами пространства имён Sample1
    export class MyClass1 {
        public message(): void {
            console.log("Sample1.MyClass1.message");
        }
    }

    // класс MyClass2 НЕ будет доступен за пределами пространства имён Sample1
    // @ts-ignore
    class MyClass2 {
        public message(): void {
            console.log("Sample1.MyClass2.message");
        }
    }
}

namespace Sample2 {

    // можем создать класс MyClass1 т.к мы находимся в другом namespace
    export class MyClass1 {
        public message(): void {
            console.log("Sample2.MyClass1.message");
        }
    }

    // @ts-ignore
    class MyClass2 {
        public message(): void {
            console.log("Sample2.MyClass2.message");
        }
    }
}

// следующий код находится в глобальной области видимости

// Использование класса MyClass1 из пространства имён Sample1
let temp1 = new Sample1.MyClass1();
temp1.message();
// Класс MyClass2 не доступен т.к я не экспортировал его(не использовал 'exports')
// let temp11 = new Sample1.MyClass2();

let temp2 = new Sample2.MyClass1();
temp2.message();
