interface IRectangeShape {
    name?: string; // свойство не обязательное
    width: number;
    height: number;
}

function drawRectangle(rect: IRectangeShape) {
    if (rect.name) {
        console.log("Name - " + rect.name);
    }

    console.log(rect.width + "*" + rect.height);
}

let rectangle1 = {
    name: "Rectangle 1",
    width: 100,
    height: 75,
};

let rectangle2 = {
    width: 55,
    height: 33,
};

let rectangle3 = {
    name: "Rectangle 3",
    width: 100,
};

drawRectangle(rectangle1);
drawRectangle(rectangle2);
// ошибка, потому, что у аргумента rectangle3 нету
// обязательного свойства height
// drawRectangle(rectangle3);
