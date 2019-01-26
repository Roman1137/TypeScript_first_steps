namespace Shapes {
    export class Circle {
        constructor() {console.log("Circle");}
    }

    export class Square {
        constructor() {console.log("Square");}
    }

    export namespace Complex {
        export class Image {
            constructor() {console.log("Image");}
        }
        export class Animation {
            constructor() {console.log("Animation");}
        }
    }
}

// создание псевдоними с именем complex для пространства имён Shapes.Complex
import complex = Shapes.Complex;

let img1 = new complex.Image();
// то же самое:
let img2 = new Shapes.Complex.Image();
