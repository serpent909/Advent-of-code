let fs = require("fs");
let text = fs.readFileSync("./2020/Q4a.txt").toString('utf-8');
let textByLine = text.split(/\n\r/gm);
const terms = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let count=0;

for(let i = 0; i < textByLine.length; i++) {
    let string = textByLine[i];
    if(terms.every(term => string.includes(term))) {
        count++;
    }
}
console.log(count);

