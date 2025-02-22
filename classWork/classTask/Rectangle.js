import Shape from "./Shape.js";

class Rectangle extends Shape {

    #side1
    #side2

    constructor(name, side1, side2) {
        super(name);
        this.#side1 = side1;
        this.#side2 = side2;
    }

    get side1() {
        return this.#side1;
    }
    get side2() {
        return this.#side2;
    }
    set side1(side1) {
        this.#side1 = side1;
    }
    set side2(side2) {
        this.#side2 = side2;
    }

    getArea(side1, side2) {
        if (side1 !== this.#side2) {
           return "Not a square";
        }
        let area = this.#side1 * this.#side2;
        return area;
    }

    isSquare(side1) {
        return this.#side1 * this.#side1;
    }
}

module.exports = Rectangle;

let shape = new Rectangle("rectangle", 2, 4);
let getShape = shape.getArea(2, 4);
console.log(getShape);
let shape2 = shape.isSquare(2);
console.log("The square is " + shape2);
