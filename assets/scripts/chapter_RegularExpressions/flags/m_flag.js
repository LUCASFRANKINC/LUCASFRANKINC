//RegExp.prototype.multiline
//Indicates that for '^' and '$' change from matching only the start or end of the entire string
//to the start or end of any line in the string.

let string = "Footlocker, Walk on foot.\nNot barefooted,\nfootball is a foot game!";
let regExp = new RegExp('^foot', 'igm');
console.log(regExp.multiline);
let newStr = string.replace(regExp, 'hands');
console.log(newStr)