let string = "The quick brown fox, yeah, the only quick brown damn fox, jumped over the lazy dog";
let regXp = /quick\s(brown).*?(?<animal>fox)/d;
//regXp.lastIndex = 36;
let matched = string.match(regXp);
console.log(matched)