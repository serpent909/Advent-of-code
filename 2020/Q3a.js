let fs = require("fs");
let text = fs.readFileSync("./Q3a.txt").toString('utf-8');
let textByLine = text.split("\n");
let currentCharacter = "";
let treesEncountered = 0;

for (let i = 0; i < textByLine.length; i++) {
    textByLine[i] = textByLine[i].replace("\r", "");
    textByLine[i] = [...textByLine[i]];
}

for(let i = 0; i < textByLine.length; i++) {
    let characterPosition = Math.abs((i * 3) % 31);
    currentCharacter = textByLine[i][characterPosition];
    if(currentCharacter === "#") {
        treesEncountered++;
    }
}

console.log(treesEncountered);


