const person = {
		name: "Bimbola",
		age: "24",
		sex: "female",
		complexion: "dark",
		stateOfOrigin: "ondo",
		country: "Nigeria",
		};

for (let index in person) {
	console.log(index + ": " + person[index])
}

