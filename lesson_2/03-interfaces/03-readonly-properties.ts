interface IPointInterface {
    // свойство readonly может быть установлено только в момент создания объекта
    readonly x: number;
    readonly y: number;
}

let point: IPointInterface = {x: 20, y: 30};
//Cannot assign to 'y' because it is a read-only property.
//point.y = 500;