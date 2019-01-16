// первая перегрузка функции, которая принимает один параметр типа string
function showMessage(message: string): void;
// вторая перегрузка функции, которая принимает один параметр типа number
function showMessage(message: number): void;
// непосредственно реализация функции, не является перегрузкой
// она испльзуется только для того, чтобы написать функцию(реализацию)
// в во врешний мир будут доступны перегрузки выше
function showMessage(message: any): void {
    if (typeof message === "number") {
        switch (message) {
            case 1: {
                console.log("Hello world");
            }       break;
            case 2: {
                console.log("Привет мир");
            }       break;
        }
    } else if (typeof message === "string") {
        console.log(message);
    }
}

// когда начинаю писать showMessage, то вижу, что есть только 2 перегрузки.
// function showMessage(message: any): void - нету. Она нужно только для того,
// чтобы написать логику, что используется под капотом перегрузками
showMessage(1);
showMessage("test");
// showMessage(true); //ошибка уровня компиляции

