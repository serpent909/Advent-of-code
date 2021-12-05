let fs = require("fs");
let text = fs.readFileSync("./Q5a.txt").toString("utf-8");
let textByLine = text.split(/\n/g);
let row;
let column;
let seatIdArray = [];

textByLine.forEach(function (line) {

    row = 0;
    column = 0;
    let maxPosRow = 128;
    let minPosRow = 1;
    let maxPosColumn = 8;
    let minPosColumn = 1;
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
    for (let i = 7; i < 10; i++) {
        if (hello[i] === 'L') {
            maxPosColumn = maxPosColumn - (maxPosColumn - minPosColumn + 1) / 2;
            column = maxPosColumn;
        } else if (hello[i] === 'R') {
            minPosColumn = minPosColumn + (maxPosColumn - minPosColumn + 1) / 2;
            column = minPosColumn;
        }
    }

    let seatId = ((row -1) * 8) + column - 1;
    seatIdArray.push(seatId);

});

let sortedSeatArray = seatIdArray.sort((a, b) => a - b);
for (let i = 0; i < sortedSeatArray.length; i++) {
    console.log(sortedSeatArray[i])
}

for (let i = 1; i < sortedSeatArray.length; i++) {
    if(sortedSeatArray[i] - sortedSeatArray[i-1] > 1) {
        console.log(sortedSeatArray[i]);
    }

}
