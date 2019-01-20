class Rectangle {
    // cначала нужно объявить public, а только потом private
    public  radius: number;
    private width: number;
    private _height: number;

    // Подход с getWidth, SetWidth - хорош, но имеет ряд недостатков.
    // Один из них, то, что при обращении к экземпляру класса у нас будет куча
    // методов getSomething, setSomething вместо чистых имён полей, которые нас интересуют.

    // метод для получени значения закрытого свойства
    public getWidth(): number {
        return this.width;
    }

    // метод для установки значения закрытому свойству
    public setWidth(value: number): void {
        if (value <= 0) {
            this.width = 1;
        } else {
            this.width = value;
        }
    }

    // accessors - механизм, который позволяет парахватывать обращение к члену объекта
    // на запись(set) или чтение(get)
    // Но тут есть ньюанс: закрытое полу нужно создать с нижним подчеркиванием.
    // Иначе, компилятор будет ругаться т.е методы аксессоры и приватное поле будут иметь одинаковое имя.

    // getter
    get height(): number {
        return this._height;
    }

    // setter
    // попробовал установить возвращаемое значение - A 'set' accessor cannot have a return type annotation.
    set height(value: number) {
        if (value <= 0) {
            this._height = 1;
        } else {
            this._height = value;
        }
    }

    public calculateArea(): number {
        return this.width * this._height;
    }
}

let rect1: Rectangle = new Rectangle();
rect1.setWidth(100); // установка width с помощью метода
rect1.height = 20; // установка height с помощью set
rect1.radius = 30;

console.log(rect1.getWidth());
// обрати внимание на цвет height и radius
console.log(rect1.height);
console.log(rect1.radius);

let rectArea: number = rect1.calculateArea();
console.log(rectArea);
