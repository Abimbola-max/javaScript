const array = [];
//const array1 = [1, "egg", {firstName, lastName}, null, []]

const arrayOfNumbers = new Array(2);

arrayOfNumbers[0] = 20;
arrayOfNumbers[1] = 2;

arrayOfNumbers.push(1);
arrayOfNumbers.push(3);
arrayOfNumbers.push(4);

console.log(arrayOfNumbers);

console.log(Array.of("off", 1, "bar"));

let firstName = "Bimbola";

let newArray = Array.from(firstName)
console.log(newArray);

//console.log(arrayOfNumbers.pop());
console.log(arrayOfNumbers.shift());
console.log(arrayOfNumbers.unshift());
console.log(arrayOfNumbers.slice());

let animals = ["dog", "chicks", "goats", "fish", "rat", "sheep", "sheGoat"]

let answer = animals.splice(4,2,"hen", "cow")
console.log(answer); // removes and returns the deleted items
console.log(animals); // returns the elements left


let firstString = "Bimbola";
let newString = " Bibi";

console.log(firstString.concat(newString));