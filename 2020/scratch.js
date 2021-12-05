class PassportCheck {

    constructor() {
        this.name = 'PassportCheck'
    }
}

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

