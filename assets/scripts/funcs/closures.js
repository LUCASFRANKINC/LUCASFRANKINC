//A closure is a function having access to the parent scope, even after the parent function has closed.
//Global variables can be made local/private by use of closures
//Closures make it possible for a function to have private variables.
const inc = (function(){
    let val = 0;
    return function() {
       return val++;
    }
})();
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());