import Human from "./Human.js";

class Person extends Human {
    #gender;

    constructor(name, age, gender) {
        super(name, age);
        this.#gender = gender;
    }

    speak() {
        
    }
}

let person = new Person("Gloria", 65, "female");
console.log(person.name);
console.log(person.speak());