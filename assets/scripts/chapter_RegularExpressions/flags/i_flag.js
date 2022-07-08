//RegExp.prototype.ignoreCase
//Indicates that case should be ignored while attempting a match in a string

let string = "Walk on foot, not barefooted, FOOTBALL is a foot game!";
let regExp = /foot/igd;
console.log(regExp.ignoreCase);
let array;
while((array = regExp.exec(string)) !== null) {
    console.log(`Found ${array[0]} at indices ${array.indices[0]}`);
}