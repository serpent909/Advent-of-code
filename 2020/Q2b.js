let fs = require("fs");
let text = fs.readFileSync("./Q2a.txt").toString('utf-8');
let textByLine = text.split("\n");
let validCount = 0;


textByLine.forEach(function (line) {
    line = line.replace("\r", "");
    line = line.replace(/ /g, "");
    numbersArray = line.match(/\d+/g);
    let position1 = parseInt(numbersArray[0]);
    let position2 = parseInt(numbersArray[1]);
    let lettersArray = line.match(/[a-z]/g);
    let testLetter = lettersArray[0];
    lettersArray.shift();
    let letterMatches = 0;
    if (lettersArray[position1 - 1] === testLetter) {
        letterMatches++
    }
    if (lettersArray[position2 - 1] === testLetter) {
        letterMatches++
    }
    if (letterMatches === 1) {
        validCount++;
    }
});

console.log(validCount);