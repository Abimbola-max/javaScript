let text = prompt("Enter your name: ");
let shiftValue = prompt("Enter your name: ");

function getEncrypteText(text, shiftValue) {
    let encyptText = "";
    for (let index = 0; index < text.length; index++) {
        let char = text[index];
        if (index.toLowerCase()) {
            const alphabet = "abcdefghijklmnopqrstuvwxyz";
            const letter = alphabet.indexOf(char);
            const shiftedIndex = letter + shiftValue % 26;
            const shiftedChar = alphabet.charAt(shiftedIndex);
            encyptText += char + shiftedChar;

        } else if (index.toUpperCase()) {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const letter = alphabet.indexOf(char);
            const shiftedIndex = letter + shiftValue % 26;
            const shiftedChar = alphabet.charAt(shiftedIndex);
            encyptText += char + shiftedChar;
        } else {
            encyptText += char;
        }
    }
    return encyptText;

}