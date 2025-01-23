
numbers = [1,2,10,6,7,8]


let evenCount = 0
let oddCount = 0

for (let i = 1; i < numbers.length; i++) {
	if (i % 2 != 0) {
		oddCount++;
	} else {
		evenCount++;
	}
} 

let result = [evenCount, oddCount]

console.log(result)
