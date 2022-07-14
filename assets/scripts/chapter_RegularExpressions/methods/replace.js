//Returns a new string with some or all matches of a pattern replaced by a replacement
//To replace all, include a global flag

let string =
  "The quick brown fox jumped over the lazy dog. The yellow fox was intriguingly fast";
let regXp = new RegExp(/(?<color>brown|yellow)?(\s)(fox)/, "ig");
//--------------------Using special characters ('$x') as replacement strings--------------------

//using named capturing groups
let captStr = string.replace(regXp, "$<color>");

//replacing with matched string
let matchStr = string.replace(regXp, "$&");

//inserting $
let _$toStr = string.replace(regXp, "$$");

//insert string portion preceding match
let insertPreString = string.replace(regXp, "$`");

//insert string portion following match
let insertPostString = string.replace(regXp, "$'");

//insert nth parenthesized substring match, as long as its a regular expression match
let replaceNth = string.replace(regXp, "$3"); //the 3rd parenthesized substring is fox.
console.table({
  "Using named capturing groups => ": captStr,
  "Replacing with matched string => ": matchStr,
  "Inserting $ to string => ": _$toStr,
  "Inserting string before match => ": insertPreString,
  "Inserting string after match => ": insertPostString,
  "Using nth parenthesized substring => ": replaceNth,
});
