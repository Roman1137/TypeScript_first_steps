// Указывая ограничения по Generic`ам, мы жертвуем их универсальностью, но за то
// получаем дополнительные возможности по написанию бизнес логики внутри Generic`а.

interface ICountable {
    count: number;
}

// <T extends ICountable> - ограничение, указывающе на то, что T (type variable)
// должна быть типом данных, который реализовывает интерфейс ICountable.
// Дело в том, что мне нужно, чтобы в классе SortableList было поле count
// и когда,я буду использовать сущности типа T, то я смогу сделать так: item.count, так, как <T extends ICountable>.

class SortableList<T extends ICountable> {
    private data: T[] = [];

    public add(item: T): void {
        this.data.push(item);
    }

    public showSorted(): void {
        // (a, b) => a.count - b.count - это дело компилируется благодаря ОГРАНИЧЕНИЮ <T extends ICountable>.
        // TS компилятор знает, что ТИП ДАННЫХ, переданны в качестве T, будет содержать свойство count
        const sorted: T[] = this.data.sort((a, b) => a.count - b.count);
        sorted.forEach((s) => console.log(s));
    }
}
// тут можна и не писать implements ICountable, главное, чтобы в классе OrderArchive
// были те поля, которые есть в ICountable.
// но если этих полей не будет, то мне будет сложно понять в чём проблемма.
class OrderArchive implements ICountable {
    constructor(
        public month: string,
        public count: number,
        public totalAmount: number,
    ) {}
}

let list1 = new SortableList<OrderArchive>();
list1.add(new OrderArchive("January", 11, 55555));
list1.add(new OrderArchive("February", 8, 18100));
list1.add(new OrderArchive("March", 12, 22900));

// выведет на консоль список, ОТСОРТИРОВАННЫЙ ПО count
list1.showSorted();