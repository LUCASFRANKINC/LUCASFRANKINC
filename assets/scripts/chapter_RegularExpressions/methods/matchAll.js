//Returns an iterator of all results matching a string against a regular expression, including
//capturing groups

//Must be called with the global flag, else a TypeError is thrown.
let string =
  "The quick brown fox jumped, yeah, that quick brown damn fox jumped over the lazy brown dog";
let regXp = new RegExp(/quick\s(?<color>brown).*?(?<animal>fox)/, "ig");
let array = [...string.matchAll(regXp)];
for (let i of array) {
  console.log(`Matched string is ${i[0]}.\nCaptured data is ${
    i[1] + " and " + i[2]
  }.
    \rMatching index is ${i.index}.\nThe groups are ${(function (x) {
    let arr = [];
    for (let key in x.groups) arr.push(`${key}:${x.groups[key]}`);
    return arr;
  })(i)}`);
}
