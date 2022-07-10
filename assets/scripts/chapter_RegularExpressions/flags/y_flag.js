/**RegExp.prototype.sticky
Indicates that it matches only from the index indicated by the ***lastIndex*** property of this regular
expression in the target string.*/

let string = "Footlocker, Walk on foot. Not barefooted.\nFootball is a foot game!";
let regExp = new RegExp("foot", 'yd');
console.log(regExp.sticky);
regExp.lastIndex = 46;
let array;
while((array = regExp.exec(string)) !== null) {
    console.log(`Found ${array[0]} at indices ${array.indices[0]}`)
}

/**
 * Anchored sticky flag - when used with the ***^*** assertion
 * If used, it should match beginning of input and if multiline, should match each beginning of line
 */
regExp = new RegExp("^foot", "ymi");
regExp.lastIndex = 0;
let newStr = string.replace(regExp, "Dead");
console.log(newStr);