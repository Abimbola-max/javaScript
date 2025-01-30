function assertEquals() {

	const getMen = () => {
		let numberOfMen = 23;
		return numberOfMen
	};

	function getLadies () {
		let numberOfLadies = 6;
		return numberOfLadies
	};

	return getMen() === getLadies();
	
};

console.log("This is a nested function below");
console.log(assertEquals());



function count() {

	let value = 0;

	return {
		increment: function() {
		return value++
		},
		
		decrement: ()=> {
		return value--
		},
		
		getValue: function() {
		return value
		}
	}

};
let counter = count();
counter.increment();
console.log("This is function as a returned object");

console.log(counter.getValue());

let firstName = "bibi";
function greet(name) {
	return `Hello ${name}`
};

function executeFunction(callBack, userName){
	return callBack(userName);
}

console.log("This is a function as an argument below");
let result = executeFunction(greet, firstName)
console.log(result);



function counts() {
	let value = 0;

	function increaseValueByTwo() {
		let result = value + 2;
		console.log(result);
		console.log(value);	
	};

	increaseValueByTwo();
};
counts();



















