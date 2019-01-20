// Базовый тип данных
class Shape1 {
    public name: string;

    constructor(name) {
        this.name = name;
    }

    public getInfo(): string {
        return `This is ${this.name}`;
    }
}

// Произовдный класс
class Rect extends Shape1 {
    public width: number;
    public height: number;

    // Так сделать не получилось
    // constructor(public width: number, public  height: number)
    constructor(width: number, height: number) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    // Переопределяем метод из родительского класса
    public getInfo(): string {
        const baseInfo: string = super.getInfo();
        return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
    }
}

// производный тип данных
class Circle extends Shape1 {
    public radius: number;

    constructor(radius: number) {
        super("Circle");
        this.radius = radius;
    }

    // Переопределяем метод из родительского класса
    public getInfo(): string {
        const baseInfo: string = super.getInfo();
        return `${baseInfo} Radius = ${this.radius}`;
    }
}

let shapes: Shape1[] = [];
shapes.push(new Rect(100, 200));
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));

// в массив shapes можно добавлять только объекты, имеющие
// ИДЕНТИЧНУЮ С КЛАССОМ Shape1 структуру
// т.е объекты, кторые созданы не с помощью конструктора Shape1, а те,
// у которых есть свойства name и getInfo
shapes.push({
    name: "foo",
    getInfo: () => "bar",
});

for (const shape of shapes) {
    const info = shape.getInfo();
    console.log(info);
}
