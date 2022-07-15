//Divides a string into an ordered list of substrings, puts them into an array and returns it.
//split(separator, limit(*optional*))

//split empty string. Returns an array with one element => an empty string
let string = "";
console.log(string.split());

//function to split a string with a specified separator
function splitString(str, sep) {
    const separated = str.split(sep);
    console.table({"Original string: ": str, "Separator: ": sep, "Output: ": separated});
}

splitString("The old shit: yeah: it's damn : doom", ":");

//use a regular expression to split. Plus a limit of 3 names only.
//NB: Used non-capturing parentheses. Else, the matches would have been include
//in the array
let names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand & Cynthia Ruthrock";
let regXp = /\s*(?:;|&)\s*/g;
let sep = names.split(regXp, 3);
console.log(sep);

//Illustrating use of capturing parentheses
let str = "Get 3 avocadoes and 14 apples";
let regWithCaptParentheses = new RegExp(/((?:\d+)\s(?:\w+))(?:\s?)/);
console.log(str.split(regWithCaptParentheses));