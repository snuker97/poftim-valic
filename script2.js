/* Cifrul lui Vernam */

let userText = 'la multi ani'.toUpperCase();
let userTextCode = [];

let generatedKeyCode = [];
let generatedKeyWord = '';

let cryptCode = [];
let cryptWord = '';

for (let i = 0; i < userText.length; i++) {
    let randomNum = Math.floor(Math.random() * 26);

    if (userText.charCodeAt(i) >= 65 && userText.charCodeAt(i) <= 90) {
        userTextCode.push(userText.charCodeAt(i) - 65);

        // Generarea cuvintelor unice pentru cheie
        while (generatedKeyCode.indexOf(randomNum) !== -1) {
            randomNum = Math.floor(Math.random() * 26);
        }
        generatedKeyCode.push(randomNum);
    }
}


for (let i = 0; i < generatedKeyCode.length; i++) {
    cryptCode.push((userTextCode[i] + generatedKeyCode[i]) % 26);
}

for (let i = 0; i < cryptCode.length; i++) {
    cryptWord += String.fromCharCode(cryptCode[i] + 65);
}

console.log(userTextCode);
console.log(generatedKeyCode);
console.log(cryptCode);
console.log(cryptWord);

// Afisarea cheiei in cuvinte
for (let i = 0; i < generatedKeyCode.length; i++) {
    generatedKeyWord += String.fromCharCode(generatedKeyCode[i] + 65);
}
