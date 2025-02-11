// 1
const person = {
		name: "Bimbola",
		age: "24",
		sex: "female",
		complexion: "dark",
		stateOfOrigin: "ondo",
		country: "Nigeria",
		};

for (let index in person) {
	console.log("Task one");
	console.log(index + ": " + person[index]);
}

//2

const car = {
		 

};

//3
const laptop = {
		brand: "Dell",
		price: "1200",
};
laptop.color = "blue";
console.log("Task three");
console.log(laptop);

//4
const phone = {
		brand: "Apple",
		price: 999,

};

phone.price = 1500;
console.log("task four");
console.log(phone);

//5.

let cab = {
		firstName: "Abimbola",
		lastName: "Aishat",

	greet: function() {
		return("Hello");
	}
		
};
let value = Object.values(car);
console.log(value);

//6.

const personDetails = {
			firstName: "abisoye",
			LastName: "abimbola",
			age: 23
};

for (let indexCount in personDetails) {
	console.log("\"" + indexCount + ":" + personDetails[indexCount] + "\"");
}

//7.

const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearPublished: 1925
};
const{title, author} = book;

console.log(`${title} by ${author}`);






		



