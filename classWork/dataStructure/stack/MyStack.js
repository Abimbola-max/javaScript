class MyStack {

    #size = 0
    #capacity
    #elements = [];

    constructor(size) {
        this.#size = size;
        this.#capacity = size;
    }

    isStackEmpty() {
        return this.#size === 0;
    }

    push(number) {
        if (this.isFull()) this.increaseCapacity();
        this.#elements += number;
    }

    isFull() {
        return this.#size === this.#capacity;
    }

    increaseCapacity() {
        this.#capacity = this.#capacity * 2;
    }

    getSize() {
        return this.#elements.length
    }

    pop(number) {
        for (let element in this.#elements) {
            if (this.#elements.hasOwnProperty(element)) {
                element = this.#size--;
            }
        }
    }
}


module.exports = MyStack;