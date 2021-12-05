let fs = require("fs");
let text = fs.readFileSync("./2021/Day1a.txt").toString('utf-8');
let textByLine = text.split("\n");
let increased = 0;
let decreased = 0;
let lowerLine = 0;
let upperLine = 0;

for(let i = 0; i < textByLine.length - 3; i++) {
 lowerLine = (parseInt(textByLine[i]) + parseInt(textByLine[i + 1]) + parseInt(textByLine[i+2]));
 upperLine = (parseInt(textByLine[i+1]) + parseInt(textByLine[i+2]) + parseInt(textByLine[i+3]));

 

 if(upperLine > lowerLine) {
     increased++;
 }

 if (upperLine <= lowerLine) {
    decreased++;
 }

}

console.log(upperLine)
console.log(increased);
console.log(decreased);