// enum - перечисление, тип данных, который позволяет набору целочисленых значений присвоить имена.
// по умолчанию перечисления нумеруют всвои элементы начиная с 0
// если зажать ctrl и навести то можна увидеть, что: Red = 0, Green = 1, Blue
enum Color { Red, Green, Blue}

let c1: Color = Color.Green;
console.log(c1); // выведет 1

// в примере ниже, каждому элементу перечисления явно устанавливаются значение
enum Status {
    Success = 1,
    Error = 5,
    Rejected = 100500,
}

let c2: Status = Status.Success;
console.log(c2);

// так, как первому элементу явно установлено значение 2, то все последующие
// будут продолжать нумерацию с 2
// Circle = 2, Triangle = 3, Square = 4
enum Shape {
    Circle = 2,
    Triangle,
    Square,
}

let c3: Shape = Shape.Square;
console.log(c3);

// если обращаться к перечислению через индексатор у указывать целочислкнное значение
// то можна получить строковое значение.
// Например, на строке ниже выведет Rejected, т.к Rejected = 100500
let c4: string = Status[100500];
console.log(c4);

////////////////////////////////////////////////////////////
// Пример использования перечислений
////////////////////////////////////////////////////////////

enum Fruit {Apple, Orange, Tomato}

function printWord(word: number): void {
    switch (word) {
        case 0:
            console.log("Apple");
            break;
        case 1:
            console.log("Orange");
            break;
        case 2:
            console.log("Tomato");
            break;
    }
}

function printWord2(word: Fruit): void {
    switch (word) {
        case Fruit.Apple:
            console.log("Apple");
            break;
        case Fruit.Orange:
            console.log("Orange");
            break;
        case Fruit.Tomato:
            console.log("Tomato");
            break;
    }
}

printWord(2);

printWord2(Fruit.Apple);
