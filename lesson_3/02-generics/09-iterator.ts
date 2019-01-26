// ШАБЛОН ПРОЕКТИРОВАНИЯ ИТЕРАТОР

// данный интерфейс будет реализован классом, который содержит данные, которые можно извлечь
// коллекция данных
interface IMyIterable<T> { // в C# это IEnumerable
    values(): IMyIterator<T>;
}

// данный интерфейс описывет объект, контролирующий обход данных в коллекции
interface IMyIterator<T> { // в C# это IEnumerator
    next(): IMyIteratorResult<T>;
}

// данный интерфейс описывает объект, определяющий результаты работы итератора
interface IMyIteratorResult<T> {
    done: boolean;
    value: T;
}

class Point1 {
    constructor(public x: number, public y: number) {
    }
}

// коллекция
class Vector implements IMyIterable<Point1> {
    private points: Point1[] = [];

    public add(item: Point1) {
        this.points.push(item);
    }

    public values(): IMyIterator<Point1> {
        return new VectorIterator(this.points);
    }
}

class VectorIterator implements IMyIterator<Point1> {
    private current: number = 0;

    constructor(private points: Point1[]) {
    }

    public next(): IMyIteratorResult<Point1> {
        if (this.current < this.points.length) {
            return {
                done: false,
                value: this.points[this.current++],
            };
        }
        else {
            return {
                done: true,
                value: null,
            };
        }
    }
}

let vector: Vector = new Vector();
vector.add(new Point1(10, 20));
vector.add(new Point1(1, 30));
vector.add(new Point1(0, 2));
vector.add(new Point1(15, 12));

// Использование интератора
let iterator = vector.values(); // тут возвращаеется итератор!

let next: IMyIteratorResult<Point1>;
do {
    next = iterator.next();
    if (next.done) {
        break;
    }
    console.log(next);
} while (true);
