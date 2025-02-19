let animal = {
    name: "unknown",
    color: "",
    sound: function(bark) {
        bark = "bark"
        return `${this.name} makes a sound ${bark}`;
    }
};

let dog = Object.create(animal);
console.log(dog);
dog.name = "Dog";
dog.color = "brown";
console.log(dog);
let dogSound = dog.sound();
console.log(dogSound);

let cat = {}
Object.setPrototypeOf(cat, animal);
console.log(cat);
cat.name = "pussy"
console.log(cat);
cat.color = "black";


function Human(name, age, complexion) {
    this.name = name;
    this.age = age;
    this.complexion = complexion;

    this.describe = () => {
        return `My name is ${this.name}, i am ${this.age} years old`;
    }
}

let personOne = new Human("bimbola", 12, "brown-skinned");
console.log(personOne);
console.log(personOne.describe());



class Human1 {
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
}

let personTwo = new Human1("bimbola", 12);
console.log(personTwo.FirstName);