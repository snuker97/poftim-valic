let userText = "parola mea".toUpperCase();
let userTextToChar = [];
let key = "142";
let cryptedText = "";

for (let i = 0; i < userText.length; i++) {
    if (userText.charCodeAt(i) >= 65 && userText.charCodeAt(i) <= 90) {
        userTextToChar.push(userText.charCodeAt(i) - 65);
    }
}

for (let i = 0; i < userTextToChar.length; i++) {
    let keyPosition = i % key.length;

    cryptedText += String.fromCharCode(+(userTextToChar[i]) + +(key[keyPosition]) + 65);
}

console.log(cryptedText);