let fs = require("fs");
let text = fs.readFileSync("./2021/Day3.txt").toString('utf-8');
let textByLine = text.split("\n");
let position = 0;

checkMostCommonAtPosition(textByLine)

function checkMostCommonAtPosition(textByLine) {

    let zero = 0;
    let one = 0;

    for (i = 0; i < textByLine.length; i++) {
        if (parseInt(textByLine[i].split("")[position]) === 0) {
            zero++;
        } else if (parseInt(textByLine[i].split("")[position]) === 1) {
            one++;
        }
    }
    if (zero > one) {
        var filteredArray = textByLine.filter(function (value) {
            return parseInt(value.split("")[position]) === 0;
        });

    } else if (one >= zero) {
        var filteredArray = textByLine.filter(function (value) {
            return parseInt(value.split("")[position]) === 1;
        });
    }
    console.log(filteredArray);
    position++;
    if (filteredArray.length > 1) {
        checkMostCommonAtPosition(filteredArray);

    } else {
        let number = parseInt(parseInt(filteredArray[0]), 2);
        console.log(number)
    }
}




