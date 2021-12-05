let fs = require("fs");
let text = fs.readFileSync("./2021/Day4.txt").toString('utf-8');
let textByLine = text.split(/\n\r/g);
let bingoNumbers = textByLine[0].split(",");
var currentBoard = [];
let lowestNumbersToBingo = 0;

for (let i = 1; i < textByLine.length; i++) {
    currentBoard = textByLine[i].split(/\n/gm);
    currentBoard = formatBoard(currentBoard);
     if(findNumbersRequiredForBingo(currentBoard, bingoNumbers) === true) {
         console.log(true)
         continue;
     }
}

function formatBoard(currentBoard) {
    currentBoard.shift();
    for (let i = 0; i < currentBoard.length; i++) {
        currentBoard[i] = currentBoard[i].trim()
        currentBoard[i] = currentBoard[i] + " ";
        currentBoard[i] = currentBoard[i].replace("  ", " ");
        currentBoard[i] = currentBoard[i].replace("  ", " ");
        currentBoard[i] = " " + currentBoard[i]
    }
    return currentBoard;
}

function findNumbersRequiredForBingo(currentBoard, bingoNumbers) {
    numbersToBingo = 0;
    bingoNumbers = bingoNumbers;
    
    for (let i = 0; i < bingoNumbers.length; i++) {
        numbersToBingo++;
        let number = bingoNumbers[i];
        for (j = 0; j < currentBoard.length; j++) {

            if (currentBoard[j].includes(` ${number} `)) {
                currentBoard[j] = currentBoard[j].replace(` ${number} `, ` ${number}* `);
                if(checkBingo(currentBoard, number, numbersToBingo) === true) {
                    return true;
                };
            }
        }
    }
}

function checkBingo(currentBoard, number, numbersToBingo) {
    let row = [];

    for (let i = 0; i < currentBoard.length; i++) {
        let column = [];

        for (let j = 0; j < currentBoard.length; j++) {

            row = currentBoard[j].split(" ");
            if (checkRows(row)) {
                if(numbersToBingo > lowestNumbersToBingo)
                lowestNumbersToBingo = numbersToBingo;
                console.log(currentBoard, number, "row", lowestNumbersToBingo);
                return true;
            }
            column.push(row[i])
        }
        if (checkColumns(column)) {
            if(numbersToBingo > lowestNumbersToBingo)
            lowestNumbersToBingo = numbersToBingo;
            console.log(currentBoard, number, "column", lowestNumbersToBingo);
            return true;
        }
    }
}

function checkRows(row) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row[i].includes("*")) {
            count++
        }
        if (count === 5) {
            return true;
        }
    }
}

function checkColumns(column) {
    let count = 0;
    for (let i = 0; i < column.length; i++) {
        if (column[i].includes("*")) {
            count++
        }
        if (count === 5) {
            return true;
        }
    }
}