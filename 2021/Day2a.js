let fs = require("fs");
let text = fs.readFileSync("./2021/Day2.txt").toString('utf-8');
let textByLine = text.split("\n");
let horizontal = 0;
let depth = 0;
let aim = 0;

textByLine.forEach (function(line) {
    splitLine = line.split(" ");
    if(splitLine[0] === "forward"){
        horizontal = horizontal + parseInt(splitLine[1]);
        depth = depth + (aim * parseInt(splitLine[1]));
    } else if(splitLine[0] === "down") {
        aim = aim + parseInt(splitLine[1]);
    } else if (splitLine[0] === "up") {
        aim = aim - parseInt(splitLine[1]);
    }
});

console.log(horizontal, depth)

 

