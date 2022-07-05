let string = "Lucas Francis, 2022, Copyright.";
let regex = /(\w+)\s(\w+)(,)\s\d+\3\s\w+/; //using \n => where n is a positive integer for back referencing.
let match = regex.exec(string);
console.log(`${match[2]}, ${match[1]}`); //using capturing groups. Items are stored as an array.