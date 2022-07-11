//Executes a search for a match in a string and returns an array of info or null on a mismatch

let string = "Walk on foot, not barefooted.\nFOOTBALL is a foot game!";
let regExp = new RegExp('foot', 'igmd');
let array;
while ((array = regExp.exec(string)) !== null) {
    console.log(`Found ${array[0]}, at indices ${array.indices[0]}. Next starts at ${regExp.lastIndex}`)
}

//using capture groups
let str_2 = 'The Quick Brown Fox Jumps Over The Lazy Dog';
let reg_2 = /quick\s(brown).*(jumps)/igd;
let result = reg_2.exec(str_2);

//state of result 🔝 after running the script
console.table({
    "Original string matched":result.input,
    "Characters matched": result[0],
    "Parenthesized": [result[1], result[2]],
    "Index": result.index,
    "Indices": (function (x) {
        let [arr, init] = [[], 0];
        for(init;init < x.indices.length;arr.push(x.indices[init]),init++)/*Empty body*/;
        arr.push({"Indices length":x.indices.length})
        return arr;
    })(result),
});

//state of reg_2 after running the script
console.table({"Last index": reg_2.lastIndex, "source regex" : reg_2.source})