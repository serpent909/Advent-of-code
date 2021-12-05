let fs = require("fs");
let text = fs.readFileSync("./2021/Day3.txt").toString('utf-8');
let textByLine = text.split("\n");
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;
let eight = 0;
let nine = 0;
let ten = 0;
let eleven = 0;
let twelve = 0;

console.log(textByLine);

for (let i = 0; i < textByLine.length; i++) {
    let splitLine = textByLine[i].split("")
    one += parseInt(splitLine[0])
    two += parseInt(splitLine[1])
    three += parseInt(splitLine[2]);
    four += parseInt(splitLine[3]);
    five += parseInt(splitLine[4]);
    six += parseInt(splitLine[5]);
    seven += parseInt(splitLine[6]);
    eight += parseInt(splitLine[7]);
    nine += parseInt(splitLine[8]);
    ten += parseInt(splitLine[9]);
    eleven += parseInt(splitLine[10]);
    twelve += parseInt(splitLine[11]);


}

console.log(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve)