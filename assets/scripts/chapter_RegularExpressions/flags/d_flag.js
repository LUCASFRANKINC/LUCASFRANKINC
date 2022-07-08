//RegExp.prototype.hasIndices
// has_indices prototype. Indicates whether a match should have the start and end
//indices of each capture group.
let string = "Walk on foot, not barefooted, football is a foot game!";
let regExp =new RegExp("foot", "gd");
let array;
console.log(regExp.hasIndices);

while((array = regExp.exec(string)) !== null) {
    console.log(`Found ${array[0]} at index ${array.indices[0]}`)
}