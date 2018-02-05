/* CAESAR */

let direction = 0; // 0 dreapta | 1 stanga
let shift = 3;
let userText = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG".toUpperCase();
let userTextChar = [];
let outputText = "";

if (!direction) {
    shift = 26 - shift;
}

for (let i = 0; i < userText.length; i++) {
    if (userText.charCodeAt(i) >= 65 && userText.charCodeAt(i) <= 90) {
        userTextChar.push((userText.charCodeAt(i) + shift - 65) % 26 + 65);
    }
    else {
        userTextChar.push(userText.charAt(i));
    }
}

for (let i = 0; i < userTextChar.length; i++) {
    userTextChar[i] = String.fromCharCode(userTextChar[i]);
    outputText += userTextChar[i];
}

console.log(userText);
console.log(userTextChar);
console.log(outputText);
console.log('\n');



