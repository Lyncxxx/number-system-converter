const literalNums = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
};

// Source - https://stackoverflow.com/a/175787
// Posted by Dan, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-19, License - CC BY-SA 4.0

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

// Function to validate octal input
function isInOctalRange(strNum) {
    for (let i = 0; i < strNum.length; i++) {
        const n = parseInt(strNum[i]);
        if (n < 0 || n > 7) {
            return false;
        }
    }
    return true;
}

// Validate the binary input
function validateBinary(strNum) {
    for (let i = 0; i < strNum.length; i++) {
        const n = parseInt(strNum[i]);
        if (n != 0 && n != 1) {
            return false;
        }
    }
    return true;
}

// Validate hexadecimal input
function validateHex(strNum) {
    for (let i = 0; i < strNum.length; i++) {
        if (!isNumeric(strNum[i])) {
            if (!Object.values(literalNums).includes(strNum[i])) {
                return false;
            }
        }
    }
    return true;
}

// Functions for converting from decimal to other bases
function decimalToBinary(number) {
    let strBinary = '';
    while (number > 0) {
        let rest = number%2
        strBinary = rest + strBinary;
        number = Math.floor(number/2);
    }
    return strBinary;
}

function decimalToOctal(number) {
    let strOctal = '';
    while (number > 0) {
        let rest = number%8;
        strOctal = rest + strOctal;
        number = Math.floor(number/8);
    }
    return strOctal;
}

function decimalToHexadecimal(number) {
    let strHexadecimal = '';
    while (number > 0) {
        let rest = number%16;
        if (rest >= 10) {
            rest = literalNums[rest];
        }
        strHexadecimal = rest + strHexadecimal;
        number = Math.floor(number/16);
    }
    return strHexadecimal;
}

// Functions for converting from other bases to decimal
function binaryToDecimal(strBinary) {
    let exponent = strBinary.length -1;
    let decimalValue = 0;
    for (let i = 0; i < strBinary.length; i++) {
        let currDigit = parseInt(strBinary[i]); 
        decimalValue +=  currDigit * (2 ** exponent);
        exponent -= 1;
    }
    return decimalValue;
}


function hexadecimalToDecimal(hexNum) {
    let c = hexNum.length - 1;
    let sum = 0;
    let currNum = 0;
    for (let i = 0; i < hexNum.length; i++) {
        let currChar = hexNum[i];
        if (isNumeric(currChar)) {
            currNum = parseInt(currChar);
        } else {
            currNum = Object.keys(literalNums).find(k => literalNums[k] === currChar);
        }
        sum += currNum * (16 ** c);
        c--;
    }
    return sum;
}

function octalToDecimal(number) {
    let exponent = number.length-1;
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let currNum = parseInt(number[i]);
        sum += currNum * (8 ** exponent);
        exponent--;
    }
    return sum;
}

// Functions called by event listeners
function convertFromDecimal() {
    binaryInput.value = decimalToBinary(parseInt(decimalInput.value)) ;
    octalInput.value = decimalToOctal(parseInt(decimalInput.value))
    hexadecimalInput.value = decimalToHexadecimal(parseInt(decimalInput.value));
}

function convertFromBinary() {
    if (validateBinary(binaryInput.value)) {
        decimalInput.value = binaryToDecimal(binaryInput.value);
        octalInput.value = decimalToOctal(binaryToDecimal(binaryInput.value));
        hexadecimalInput.value = decimalToHexadecimal(binaryToDecimal(binaryInput.value));
    }
}

function convertFromOctal() {
    if (isInOctalRange(octalInput.value)) {
        decimalInput.value = octalToDecimal(octalInput.value);
        binaryInput.value = decimalToBinary(decimalInput.value);
        hexadecimalInput.value = decimalToHexadecimal(decimalInput.value);
    } 
}

function convertFromHexadecimal() {
    hexadecimalInput.value = hexadecimalInput.value.toUpperCase();
    if (validateHex(hexadecimalInput.value)) {
        decimalInput.value = hexadecimalToDecimal(hexadecimalInput.value);
        binaryInput.value = decimalToBinary(decimalInput.value);
        octalInput.value = decimalToOctal(decimalInput.value);
    }
}

// Catch the inputs
const binaryInput = document.getElementById('binary');
const decimalInput = document.getElementById('decimal');
const octalInput = document.getElementById('octal');
const hexadecimalInput = document.getElementById('hexadecimal');

// event listeners
decimalInput.addEventListener('input', convertFromDecimal);
binaryInput.addEventListener('input', convertFromBinary);
octalInput.addEventListener('input', convertFromOctal);
hexadecimalInput.addEventListener('input', convertFromHexadecimal);