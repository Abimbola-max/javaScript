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


function greet(name) {
	return `Hello ${name}`
};
console.log("This is a function as an argument below");
let result = executeFunction(greet, firstName)


function callBack(name) {
	return `Hello ${name}`
};

function executeFunction1(callBack, userName){
	return callBack(userName);
}
console.log("This is a function as an argument below");
let result = executeFunction(greet, firstName)


















