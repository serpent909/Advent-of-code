let fs = require("fs");
let text = fs.readFileSync("./Q3a.txt").toString('utf-8');
let textByLine = text.split("\n");
let currentCharacter = "";
let treesEncountered1 = 0;
let treesEncountered2 = 0;
let treesEncountered3 = 0;
let treesEncountered4 = 0;
let treesEncountered5 = 0;


for (let i = 0; i < textByLine.length; i++) {
    textByLine[i] = textByLine[i].replace("\r", "");
    textByLine[i] = [...textByLine[i]];
}
//One
for(let i = 0; i < textByLine.length; i++) {
    let characterPosition = Math.abs((i) % 31);
    currentCharacter = textByLine[i][characterPosition];
    if(currentCharacter === "#") {
        treesEncountered1++;
    }
}
//Two
for(let i = 0; i < textByLine.length; i++) {
    let characterPosition = Math.abs((i * 3) % 31);
    currentCharacter = textByLine[i][characterPosition];
    if(currentCharacter === "#") {
        treesEncountered2++;
    }
}
//Three
for(let i = 0; i < textByLine.length; i++) {
    let characterPosition = Math.abs((i * 5) % 31);
    currentCharacter = textByLine[i][characterPosition];
    if(currentCharacter === "#") {
        treesEncountered3++;
    }
}
//Four
for(let i = 0; i < textByLine.length; i++) {
    let characterPosition = Math.abs((i * 7) % 31);
    currentCharacter = textByLine[i][characterPosition];
    if(currentCharacter === "#") {
        treesEncountered4++;
    }
}
//Five
for(let i = 0; i < textByLine.length; i+=2) {
    let characterPosition = Math.abs((i/2) % 31);
    currentCharacter = textByLine[i][characterPosition];
    if(currentCharacter === "#") {
        treesEncountered5++;
    }
}

console.log(treesEncountered1, treesEncountered2, treesEncountered3, treesEncountered4, treesEncountered5);