//RegExp.prototype.dotAll
//Indicates that the dot special character (".") should additionally match the following line terminator
//characters in a string.e.g. \n,\f.

let string = "Footlocker, Walk on foot.\nNot barefooted,\ffootball is a foot game!";
let regExp = new RegExp(',.football', 's');
console.log(string.match(regExp));
console.log(string)