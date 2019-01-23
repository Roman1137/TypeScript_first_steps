interface IEqualityComparer<T> {
    equals(item: T): boolean;
}

// так, как я буду работать с коллекцией уникальных данных,мне нужно как-то понять,
// что они уникальные. Для этого, мне нужен метод equals. Но дело в том, что я не знаю
// какой тип данных там будет, так что пусть и метод equals тоже нужно будет реализовать.

// Для IEqualityComparer<T> тип T будет такой же, как для UniqueCollection
class UniqueCollection<T extends IEqualityComparer<T>> {
    private data: T[] = [];

    public add(item: T): void {
        // метод equals будет реализовываться. Он виден благодаря <T extends IEqualityComparer<T>>
        const isUnique: boolean = this.data.every((x) => !x.equals(item));
        if (isUnique) {
            this.data.push(item);
        }
    }

    public showData(): void {
        this.data.forEach((x) => console.log(x));
    }
}

class Order implements IEqualityComparer<Order> {
    constructor(
       public id: number,
       public customer: string,
       public product: string
    ){}

    public equals(item: Order): boolean {
        return this.id === item.id;
    }
}

let order1 = new Order(1, "John", "Laptop");
let order2 = new Order(2, "Robin", "Mobile Phone");
let order3 = new Order(3, "Bob", "Book");
let order4 = new Order(1, "John", "Book");

const collection = new UniqueCollection<Order>();
collection.add(order1);
collection.add(order2);
collection.add(order3);
collection.add(order4);

collection.showData();
