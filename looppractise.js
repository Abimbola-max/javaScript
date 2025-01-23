const ps = require("prompt-sync")
const prompt = ps();

let counter = 0
let total = 0
let scores = []

while(counter < 3){
 score = parseInt(prompt("Enter scores: "))
total = total + score
scores.push(score)
counter++
}
	
	let average = Math.floor(total / scores.length)
console.log("Total is: " + total)
console.log("Average is: " + average)

