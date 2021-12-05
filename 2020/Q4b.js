let fs = require("fs");
let text = fs.readFileSync("./Q4a.txt").toString('utf-8');
let textByLine = text.split(/\n\r/gm);
const dataTypes = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const validEyeColour = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
let validPassportCount = 0;

for (let i = 0; i < textByLine.length; i++) {

    if (dataTypes.every(term => textByLine[i].includes(term))) {
        splitData = textByLine[i].split((/[\n, ' ']/g));
        splitData.shift();
        
        splitData = splitData.map((term) => {
            return term.trim();
        })

        let dataTypesValidCount = 0;
        for (let j = 0; j < splitData.length; j++) {

            if (splitData[j].startsWith("byr")) {
                let byr = splitData[j].substring(splitData[j].indexOf(":") + 1);
                byrChk(byr) ? dataTypesValidCount++ : dataTypesValidCount;
            }
            if (splitData[j].startsWith("iyr")) {
                let iyr = splitData[j].substring(splitData[j].indexOf(":") + 1);
                iyrChk(iyr) ? dataTypesValidCount++ : dataTypesValidCount;
            }
            if (splitData[j].startsWith("eyr")) {
                let eyr = splitData[j].substring(splitData[j].indexOf(":") + 1);
                eyrChk(eyr) ? dataTypesValidCount++ : dataTypesValidCount;
            }
            if (splitData[j].startsWith("hgt")) {
                let hgt = splitData[j].substring(splitData[j].indexOf(":") + 1);
                hgtChk(hgt) ? dataTypesValidCount++ : dataTypesValidCount;
            }
            if (splitData[j].startsWith("hcl")) {
                let hcl = splitData[j].substring(splitData[j].indexOf(":") + 1);
                hclChk(hcl) ? dataTypesValidCount++ : dataTypesValidCount;
            }
            if (splitData[j].startsWith("ecl")) {
                let ecl = splitData[j].substring(splitData[j].indexOf(":") + 1);
                eclChk(ecl) ? dataTypesValidCount++ : dataTypesValidCount;
            }
            if (splitData[j].includes("pid")) {
                let pid = splitData[j].substring(splitData[j].indexOf(":") + 1);
                pidChk(pid) ? dataTypesValidCount++ : dataTypesValidCount;
            }
        }
        if (dataTypesValidCount === 7) {
            validPassportCount++;
        }
    }
}

console.log(validPassportCount);

function byrChk(byr) {
    if (byr >= 1920 && byr <= 2002) {
        return true;
    }
}

function iyrChk(iyr) {
    if (iyr.length = 4 && iyr >= 2010 && iyr <= 2020) {
        return true;
    }
}

function eyrChk(eyr) {
    if (eyr.length = 4 && eyr >= 2020 && eyr <= 2030) {
        return true;
    }
}

function hgtChk(hgt) {
    if (hgt.includes("cm")) {
        let heightCm = hgt.substring(0, hgt.indexOf("cm"));
        if (heightCm >= 150 && heightCm <= 193) {
            return true;
        }
    } else if (hgt.includes("in")) {
        let heightIn = hgt.substring(0, hgt.indexOf("in"));
        if (heightIn >= 59 && heightIn <= 76) {
            return true;
        }
    }
}

function hclChk(hcl) {
    if (hcl.length === 7) {
        let regex = new RegExp("#+[0-9a-f]{6}");
        if (regex.test(hcl)) {
            return true;
        }
    }
}

function eclChk(ecl) {
    if (validEyeColour.includes(ecl)) {
        return true;
    }
}

function pidChk(pid) {
    if (pid.length === 9) {
        let regex = new RegExp("[0-9]{9}");
        if (regex.test(pid)) {
            return true;
        }
    }
}






