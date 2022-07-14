//Used to check pattern presence and its index within a string
//Returns -1 if no match is found.
let string = "The brown fox jumped over the lazy old dog.";
let regXp = new RegExp(/[^\w\s]/,'ig');
let search = string.search(regXp);
console.log(`Index ${search + ": character is " + string[search]}`);