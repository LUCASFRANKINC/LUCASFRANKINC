//use test() whenever you need to check whether a pattern is found in a string

function testInput( regExp, string) {
    let midString = "";
    midString = regExp.test(string) ? "contains" : "does not contain";
    return `${string} ${midString} ${regExp.source}`;
}

console.log(testInput(/quick\s(brown).*?(jumps)/igd, 'The Quick Brown Fox Jumps Over The Lazy Dog'));

//check for several tests on string
let string = "Foot-walker! Walk on foot, not barefooted.\nFOOTBALL is a foot game!";
let regXp = /foot/mig;
let arr;
while((arr = regXp.test(string)) !== false) {
    console.log(`Found ${regXp.lastIndex}, ${regXp.source}`);
}