'use strict';
//checking if we are in strict mode
const strict = (function () {
    return !this
})();
console.log(`In strict mode: ${strict}`);

//Immediately invoked function expressions(IIFE)
(function () {
    console.log(new Date().toLocaleString())
})();

!function (x) {
    console.log(`Hello, ${x}`);
}("Luke");

//recursive functions
const fact = {
    'factIt': function factorial(x) {
        return x <= 1 ? 1 : x * factorial(x - 1);
    }
}

const sumRange = function sum(range) {
    return range <= 1 ? 1 : range + sum(range - 1);
}

// console.log(fact?.["factIt"]?.(4));
// console.log(sumRange?.(5));

//for nested functions, always use arrow functions or assign this to a variable then use the variable inside the nested function
let m = {
    a: 3, b: 4, hypotenuse() {
        const SELF = this;
        return checker();

        function checker() {
            return Math.hypot(SELF.a, SELF.b);
        }
    }
}

//console.log(m.hypotenuse());

function max(x = Number.NEGATIVE_INFINITY, ...values) {
    for (let i of values) {
        if (x < i) x = i;
    }
    return x;
}

// console.log(max(1000000, 10, 100, 2, 3, 1000, 4, 5, 6))

//params as array literals
function arrParams([x1, y1], [x2, y2]) {
    return [x1 + x2, y1 + y2];
}

// console.log(arrParams([4,5],[6,7]));

//params as object literals
function objParams({x, y}, scalar) {
    return {x: x * scalar, y: y * scalar}
}

// console.log(objParams({x:1,y:2},2));

//params as object literals but having different naming on params and invocation
function obParamsDiffer({x: x1, y: y1}, {x: x2, y: y2}) {
    return ({x: x1 + x2, y: y1 + y2});
}

// console.log(obParamsDiffer({x:10, y:12}, {x:13,y:34}));

//assign param names to args when invoking via object destructuring
function arrayCopy({from, to = from, n = from.length, fromIndex = 0, toIndex = 0}) {
    const arraySlice = from.slice(fromIndex, fromIndex + n);
    to.splice(toIndex, 0, ...arraySlice);
    return to;
}

// console.log(arrayCopy({from: [9, 4, 5, 7, 6], to: [1, 2, 3, 10, 8], fromIndex: 2, n: 2, toIndex: 3}));

function arrValSum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) throw new TypeError("Holder should be an array type");
    for (const val of arr) {
        if (typeof val !== 'number') throw new TypeError("Value must be a number!")
        sum += val;
    }
    return sum;
}

// console.log(arrValSum([10,40,32,7,"6"]))

//functions as values
const ops = {
    add(x, y) {
        return x + y
    }, subtract(x, y) {
        return x - y
    }, multiply(x, y) {
        return x * y
    }, divide(x, y) {
        return x / y
    }, modulo(x, y) {
        return x % y
    }, pow(x, y) {
        return Math.pow(x, y)
    },
}

function operate(operation, first_op, second_op) {
    if (typeof ops[operation] !== "function") throw "no operator found!";
    return ops[operation](first_op, second_op);
}

// console.log(operate("modulo", 10, operate("me", 2, 2)));

//function props
uniqueInteger.counter = 0;

function uniqueInteger() {
    return uniqueInteger.counter++
}

// console.log(uniqueInteger());
// console.log(uniqueInteger());
// console.log(uniqueInteger());

//function that caches computations
function factorial(x) {
    if (x > 0 && Number.isInteger(x)) {
        if (!(x in factorial)) {
            factorial[x] = x * factorial(x - 1);
        }
        return factorial[x];
    } else return NaN;
}

// factorial[1] = 1;//initialize cache to hold this code base
// factorial(15)
// console.log(factorial);

//function closures
const incr = (function () {
    let counter = 0;
    return function () {
        return counter++;
    }
})()
// console.log(incr());
// console.log(incr());
// console.log(incr());
// console.log(incr);

//more closures
function setter() {
    let counter = 0;
    return {
        count() {
            return counter++
        }, reset() {
            return counter = 0;
        }
    }
}

// let a = setter(), b = setter();
// console.log(a.count())
// console.log(a.count())
// console.log(a.count())
// console.log(b.reset())
// console.log(a.count())
// console.log(b.count())
// console.log(a.count())
// console.log(b.count())

//closures using params, getters and setters
function setUsingParams(param) {
    return {
        get count() {return param++},
        set count(m) {
            if(m > param) param = m
            else throw "Error! Value has to be greater!"
        }
    }
}

// let init = setUsingParams(100);
// console.log(init.count)
// console.log(init.count)
// console.log(init.count)
// init.count = 400;
// console.log(init.count)
// console.log(init.count)

//private property handler
function privateProp(obj, propName, predicateFunc) {
    let value;
    obj[`get${propName}`] = () => value;
    obj[`set${propName}`] = (v) => {
        if(predicateFunc && predicateFunc(v)) value = v;
        else throw new TypeError("Check the predicate type!");
    }
}
// let o = {};
// privateProp(o, "Name", x => typeof x === 'string');
// o.setName("Frank");
// console.log(o.getName());
// o.setName("Luke")
// console.log(o.getName());

//multiple closures using loops
function constFunc() {
    let funcs = [];
    for(let i =0; i<10; i++) {
        funcs[i] = () => 'fdd'+i;
    }
    return funcs;
}
// let arr3 = constFunc();
// console.log(arr3[7]());

//using call()
function Username(name, email) {
    this.name = name;
    this.email = email;
}
function Kenyan(name, email) {
    Username.call(this, name, email);
    this.native = "Kenyan";
}
// console.log(new Kenyan("Francis Karuri", "dev.lucasfrank254@gmail.com"))

let animals = [
    {species : 'Lion', rank : 'King'},
    {species : 'Shark', rank : 'Twin'},
];
for(let i=0; i<animals.length; i++) {
    (function(i){
        this.print = function() {
            console.log(`${i}:${this.species}, ${this.rank}`);
        }
        this.print();
    }).call(animals[i], i);
}