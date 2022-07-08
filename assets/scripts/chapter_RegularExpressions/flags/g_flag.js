//RegExp.prototype.global
//It indicates that the regular expression should be tested against all possible matches in a string

let string = "Walk on foot, not barefooted, football is a foot game!";
let regExp = new RegExp('foot', 'g');
console.log(regExp.global);
console.log(string.replace(regExp, 'hand'));