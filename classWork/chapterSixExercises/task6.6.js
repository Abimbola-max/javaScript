function displayPattern(number) {
    for (let i = 1; i <= number; i++) {
        let line = "";
        for (let j = 1; j <= number - i; j++) {
            line += " ";
        }
        for (let k = i; k >= 1; k--) {
            line += k + " ";
        }
        console.log(line);
    }
}
let number = 5;
displayPattern(number);