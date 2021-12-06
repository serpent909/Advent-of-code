let fs = require("fs");
let text = fs.readFileSync("./2021/Day5.txt").toString('utf-8');
let textByLine = text.split(/\n\r[ ]/g);
let coordList = textByLine[0].split("\n");

let count = 0;
let alternativeCount = 0;

for (let i = 0; i < coordList.length; i++) {
    coordList[i] = coordList[i].replace("\r", "")
    coordList[i] = coordList[i].replace(" -> ", ",")
}

coordList.forEach(coord => {
    coord = coord.split(",")
})

let filteredCoordList = coordList;

let zeroArray = Array(1000).fill(0).map(() => Array(1000).fill(0))

for (let i = 0; i < filteredCoordList.length; i++) {

    let test = filteredCoordList[i].split(",");
    let x1 = parseInt(test[0]);
    let y1 = parseInt(test[1]);
    let x2 = parseInt(test[2]);
    let y2 = parseInt(test[3]);

    if (x1 == x2) {
        let diff = Math.abs(y1 - y2);
        let min = Math.min(y1, y2);
        markZeroArrayX(diff, min, x1);
        
    } else if (y1 == y2) {
        let diff = Math.abs(x1 - x2);
        let min = Math.min(x1, x2);
        markZeroArrayY(diff, min, y1);

    } else if ((Math.abs(x1 - y2)) == (Math.abs(x2 - y1))) {
        let diff = Math.abs(Math.abs(x1 - y2));
        markZeroArrayXY(diff, x1, y1, x2, y2);

    } else if ((Math.abs(x1 - x2)) == (Math.abs(y1 - y2))) {
        let diff = Math.abs(Math.abs(x1 - x2));
        markZeroArrayXY(diff, x1, y1, x2, y2);
    }
}

function markZeroArrayX(diff, min, row) {
    for (let i = min; i < (min + diff + 1); i++) {
        zeroArray[row][i] = zeroArray[row][i] + 1;
        
    }
}

function markZeroArrayY(diff, min, column) {
    for (let i = min; i < (min + diff + 1); i++) {
        zeroArray[i][column] = zeroArray[i][column] + 1;
    }
}

function markZeroArrayXY(diff, x1, y1, x2, y2) {

    let minX = Math.min(x1, x2);
    let minY = Math.min(y1, y2);
    let maxX = Math.max(x1, x2);
    let maxY = Math.max(y1, y2);

    //done!
    if (x1 < x2 && y1 < y2) {
        let j = minY;
        for (let i = minX; i < (maxX + 1); i++) {
            zeroArray[i][j] = zeroArray[i][j] + 1;
            j++;
        }

        //done!
    } else if (x1 >= x2 && y1 >= y2) {
        let j = maxY;
        for (let i = maxX; i > (minX - 1); i--) {
            zeroArray[i][j] = zeroArray[i][j] + 1;
            j--;
        }

        //done!
    } else if (x1 <= x2 && y1 >= y2) {
        let j = maxY
        for (let i = minX; i < (maxX + 1); i++) {
            zeroArray[i][j] = zeroArray[i][j] + 1;
            j--;
        }

        //done!
    } else if (x1 >= x2 && y1 <= y2) {
        let j = minY
        for (let i = maxX; i > (minX - 1); i--) {
            zeroArray[i][j] = zeroArray[i][j] + 1;
            j++;
        }

    } else {
        console.log("hi")

    }
}

for (let i = 0; i < zeroArray.length; i++) {
    for (let j = 0; j < zeroArray.length; j++) {
        if (zeroArray[i][j] > 1) {
            count++
        } else {
            alternativeCount++;
        }
    }
}

console.log(count, alternativeCount)