const MyStack = require("./MyStack");

test("test my stack returns true when empty", () => {
    let stack = new MyStack(0);
    expect(stack.isStackEmpty()).toBeTruthy()
});

test ("test that my stack can perform push function,adds to an array", () => {
    let stack = new MyStack(10);
    stack.push(2);
    stack.push(4);
    expect(2).toEqual(stack.getSize());
    stack.push(5);
    expect(3).toEqual(stack.getSize());
})

test ("test that my stack can perform pop function, removes and return elements", () => {
    let stack = new MyStack(10);
    stack.push(2);
    stack.push(4);
    stack.push(7);
    stack.push(6);
    stack.pop();
    expect(4).toEqual(stack.getSize());
});