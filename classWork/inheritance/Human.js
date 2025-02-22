class Human {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    set firstName(name) {
        this.#name = name;
    }

    get FirstName() {
        return this.#name;
    }

    speak() {
        let language = "yoruba"
        return `${this.#name} speaks {this.language}`;
    };
}

let personTwo = new Human("bimbola", 12);
console.log(personTwo.FirstName);


export default  Human;