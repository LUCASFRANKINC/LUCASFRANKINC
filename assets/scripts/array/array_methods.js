'use strict';
//Array methods
let arr = [1, 2, 3, 4];

//forEach() method
arr.forEach((value, index, array) => {
    array[index] = value * 100;
});
// console.log(arr);

//map() method
let arrFromMap = arr.map(value => Math.pow(value, 2));
// console.log(arrFromMap);

//find() and findIndex() methods
let find = arrFromMap.find(value => value % 3 === 0);
let findInd = arrFromMap.findIndex(value => Math.sqrt(value) === 400);
//console.log(find, findInd);

//filter()
let sparse = [10, undefined, undefined, 12, 13, 24, 25];
let filtered = sparse.filter(value => value % 2 === 0);
sparse = sparse.filter(value => value !== undefined && value !== null);
//console.log(sparse)

//every() method
// console.log(sparse.every(value => !!value));

//some() method
// console.log(sparse.some(value => !!value))

//reduce() and reduceRight() methods
let reduced = sparse.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
//console.log(reduced);
let reducedRight = sparse.reduceRight(((previousValue, currentValue) => currentValue ** previousValue));
//console.log(reducedRight);

//uses of flatMap()
let str = ["Hey there Lucas!", "", "You ought to make it someday!"]
let words = str.flatMap(value => value.split(" "));
let nums = [1, 5, 2, -4, 4];
let altered = nums.flatMap(value => value < 0 ? [] :
    (value % 2 === 0) ? [value] :
        [value - 1, 1]);
//console.log(altered)

//concat() method
//console.log(nums.concat([12, 'Jaden',[10, "leaked",['Ahit',['bruv', 13]]]]).flat(Infinity));
//console.log(nums)

//splice() method
let spArr = [12, 45, "Jade", "Ryan", 2];
spArr.splice(0, 0, "Luke", ['Father', 'Forever']);
spArr.splice(1, 1, ['Ryan', 'Son', "I love you!"], 'xoxo');
//console.log(spArr);

let cpyArr = [1, 2, 3, 4, 5];
cpyArr.copyWithin(1);
cpyArr.copyWithin(2, 3, 5);
cpyArr.copyWithin(-2, -3, -1);
cpyArr.copyWithin(-4, -5, -2);
cpyArr.copyWithin(2, 1)
cpyArr.copyWithin(0, -2, 5);
// console.log(cpyArr)

//indexOf() and lastIndexOf()
let checker = [10, 2, 3, 43, 10, 10, NaN];
let indexes = checker.flatMap((value, index) => value === 10 ? [index] : [])
// console.log(indexes)

//Working on array-like objects
let arrayLike = {0: "Luke", 1: "Ryan", 2: "We", length: 3};
console.log(Array.prototype.flatMap.call(arrayLike, value => value.length !== 4 ? [] : [value]));