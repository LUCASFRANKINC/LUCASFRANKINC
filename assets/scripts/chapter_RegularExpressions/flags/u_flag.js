//RegExp.prototype.unicode
//It enables various Unicode-related features.

let string = "༻ is a beautiful mark.";
let regexp = new RegExp("\u{0F3B}", "u");
console.log(regexp.unicode);
let newStr = string.replace(regexp, "\u{0F3A}")
console.log(newStr)