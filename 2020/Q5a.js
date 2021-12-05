let fs = require("fs");
let text = fs.readFileSync("./Q5a.txt").toString("utf-8");
let textByLine = text.split(/\n/g);
let row;
let highestRow = 0;

textByLine.forEach(function (line) {

    row = 0;
    let maxPosRow = 128;
    let minPosRow = 1;
    let hello = line.split('');
    for (let i = 0; i < 7; i++) {

        if (hello[i] === 'F') {
            maxPosRow = maxPosRow - (maxPosRow - minPosRow + 1) / 2;
            row = maxPosRow;

        } else if (hello[i] === 'B') {
            minPosRow = minPosRow + (maxPosRow - minPosRow + 1) / 2;
            row = minPosRow;
        }

    }
    if(row > highestRow) {
        console.log(line);
        highestRow = row;
    }
})

console.log(highestRow)
