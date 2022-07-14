//Returns a new string with some or all matches of a pattern replaced by a replacement
//To replace all, include a global flag

let string =
  "The quick brown fox jumped over the lazy dog. The yellow fox was intriguingly fast";
let regXp = new RegExp(/(?<color>brown|yellow)?(\s)(fox)/, "ig");

/**
 * Specify a string as a parameter
 */
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

/**
 * Specifying a function as a parameter
 * The function's return value is used as the replacement string.
 */
//Function arguments.
//match => This is the matched substring. Same as '$&' above.
//p1, p2, ... => The nth parenthesized capturing group, inclusive of named capturing groups.
//offset => The offset of the matched substring in relation to the string. eg. if string was 'abcd' and the match was 'cd', offset = 2.
//string => The whole string being examined
//groups => named capturing groups, where key are the group names.

let str = "abcd12345/*-+%";

/**
 * **NB: The args above have to be arranged in that order**
 */
const replacerFunc = (match, p1, p2, p3, offset, string, groups) => {
  return [
    p1,
    p2,
    p3,
    ((x) => {
      let str = "\n";
      for (let i in x) {
        str += i + ":" + x[i] + "\n";
      }
      return str;
    })(groups),
  ].join("-");
};

let newStr = str.replace(
  /(?<name>[^\d]+?)(?<number>\d+?)([^\w\s]+)/i,
  replacerFunc
);
console.log(newStr);

//Switch names in a string
let s = "Shine your way, Kobe Bryant";
let reg = new RegExp(/(?<firstname>Kobe)\s(?<lastname>[\w]+)/, "gi");
let switched = s.replace(reg, "$2 $1");
console.log(switched);

//change string functions camelCase to camel-case.eg. borderTop to border-top
function changeCase(x) {
  if (x) {
    let regXp = /[A-Z]/g;
    let newStr = "";
    if (regXp.test(x)) {
      newStr = x.replace(regXp, function (match, offset, string) {
        //check offset to see if it appears at string beginning
        return (offset > 0 ? "-" : "") + match.toLowerCase();
      });
    } else
      newStr =
        "Your string does not seem to have the camelCase to be changed to camel-case!";
    return newStr;
  }
}
console.log(changeCase("FontWeight")); //logs font-weight

//The following code receives a farenheit value and converts it to a celcius one
function f2c(x = "0F") {
  let expReg = new RegExp(/(-?\d+(?:\.\d*)?)F\b/, "ig");
  return x.replace(
    expReg,
    (match, p1, offset, string) => ((p1 - 32) * 5) / 9 + "C"
  );
}

console.log(f2c("-3.0f"));
