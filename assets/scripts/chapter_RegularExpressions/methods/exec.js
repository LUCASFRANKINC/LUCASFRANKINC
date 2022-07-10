//Executes a search for a match in a string and returns an array of info or null on a mismatch

let string = "Walk on foot, not barefooted.\nFOOTBALL is a foot game!";
let regExp = new RegExp('foot', 'igmd');
let array;
while((array = regExp.exec(string)) !== null) {
    console.log(`Found ${array[0]}, at indices ${array.indices[0]}. Next starts at ${regExp.lastIndex}`)
}