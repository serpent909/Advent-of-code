let fs = require("fs");
let text = fs.readFileSync("./2021/Day5.txt").toString('utf-8');
let textByLine = text.split(/\n\r[ ]/g);
let coordList = textByLine[0].split("\n");

let count = 0;

for (let i = 0; i < coordList.length; i++) {
    coordList[i] = coordList[i].replace("\r", "")
    coordList[i] = coordList[i].replace(" -> ", ",")
}

coordList.forEach(coord => {
    coord = coord.split(",")
})


let filteredCoordList = coordList.filter(matchingCoords)

function matchingCoords(isMatching) {
    let coordArray = isMatching.split(",");
    if (coordArray[0] === coordArray[2]) {
        return isMatching;
    } else if (coordArray[1] === coordArray[3]) {
        return isMatching;
    }
}

let zeroArray = Array(1000).fill().map(() => Array(1000).fill(0))

for (let i = 0; i < filteredCoordList.length; i++) {

    let test = filteredCoordList[i].split(",");

    if ((test[0]) === (test[2])) {
        
        let diff = Math.abs(test[1] - test[3]);
        let min = Math.min(test[1], test[3]);
        markZeroArrayX(diff, min, test[0]);
    }
    else if (test[1] === test[3]) {
        let test = filteredCoordList[i].split(",");
        if (test[1] == test[3]) {
            let diff = Math.abs(test[0] - test[2]);
            let min = Math.min(test[0], test[2]);
            markZeroArrayY(diff, min, test[1]);
        }
    } else {

    }
}

function markZeroArrayX(diff, min, row) {
    for (i = min; i < (min + diff + 1); i++) {
        zeroArray[i][row] = zeroArray[i][row] + 1;
    }
}

function markZeroArrayY(diff, min, column) {
    for (i = min; i < (min + diff + 1); i++) {
        zeroArray[column][i] = zeroArray[column][i] + 1;
    }
}

for (let i = 0; i < zeroArray.length; i++) {
    for(let j = 0; j < zeroArray.length; j++) {
        if(zeroArray[i][j] > 1) {
            count++
        }

    }
}

console.log(count);




