//currying - Presetting some arguments in a function.
function exponents(num, exponent) {
  return num ** exponent;
}

//currying using bind
let fifthExp = exponents.bind(this, 5);
console.log(fifthExp(2));

//currying using closures
let tenth = function (x) {
  return function (y) {
    return x * y;
  };
};

console.log(tenth()(2));
