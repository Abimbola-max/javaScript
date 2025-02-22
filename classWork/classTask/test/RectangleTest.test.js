const {Shape, Rectangle} = require("../Shape.js");

test("get the name of the shape", () => {
    let shape = new Shape("Rectangle");
    let result = shape.getName();
    let actual = "Rectangle";
    expect(result).toBe(actual);
});

test ("get area of square", () => {
    let rectangle = new Rectangle("Rectangle", 4, 4);
    let result = rectangle.getArea(4,4)
    let actual = 16;
    expect(result).toBe(actual);
})