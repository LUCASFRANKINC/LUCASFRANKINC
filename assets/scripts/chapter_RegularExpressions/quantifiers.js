/**
 *These are the quantifiers. Adding "?" to a quantifier makes it non-greedy, i.e. it stops as
 * soon as a match is found.
 */

let string = "caaaaaaaaandy";
//*********************Match 0 or more times************************
console.log(`Using * : ${string.match('ca*?')}`);

//*********************Match 1 or more times************************
console.log(`Using + : ${string.match('ca+?')}`);

//*********************Match 0 or 1 times************************
console.log(`Using ? : ${string.match('ca??')}`)

//*********************Match n occurrences of x************************
console.log(`Using x{n} : ${string.match('\w*a{9}?')}`);

//*********************Match at least n occurrences of x************************
console.log(`Using x{n,}: ${string.match('\w*a{2,}?')}`);

//*********************Match at least n occurrences or at most m of x************************
console.log(`Using x{n,m}: ${string.match('\w*a{1,4}?')}`)