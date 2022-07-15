//Returns a new string with all matches of a pattern replaced by the replacement string
//The global flag must be set, else a TypeError is thrown

//specifying strings as params or function as params are same as replace though it has some differences:
//1. Misses the named capturing groups in strings as params($<name>)
//2. The groups in function as params is namedGroups.
//The rest is equally the same.

let string =
  "The quick brown fox jumps over the lazy german dog. If the counterpart finnish dog reacted, was it really lazy?";
let regExp = new RegExp(/(?<nationality>german|finnish)?(\s)?(dog)/, "gi");
let newStr = string.replaceAll(
  regExp,'$3');
console.log(newStr);
