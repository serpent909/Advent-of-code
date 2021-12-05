let fs = require("fs");
let text = fs.readFileSync("./Q2a.txt").toString('utf-8');
let textByLine = text.split("\n");
let validCount = 0;

textByLine.forEach(function(line) { 
    line = line.replace("\r", "");
    line = line.replace(/ /g, "");
    console.log(line);
    numbersArray = line.match(/\d+/g);
    let num1 = parseInt(numbersArray[0]);
    let num2 = parseInt(numbersArray[1]);
    let lettersArray = line.match(/[a-z]/g);
    let testLetter = lettersArray[0];
    lettersArray.shift();
    let testLetterCount = 0;
    lettersArray.forEach(letter => {
    if(letter === testLetter) {
        testLetterCount++;
    }
    });
    if(testLetterCount >= num1 && testLetterCount <= num2) {
        validCount++;
    }
});
    
console.log(validCount);

