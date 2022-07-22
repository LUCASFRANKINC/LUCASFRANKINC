let obj = {
  firstname: "Francis",
  lastname: "Lucas",
  age: 26,
  displayDetails() {
    return `${this.firstname + " " + this.lastname + " aged " + this.age}`;
  },
};
console.log(obj.displayDetails());

let obj2 = {
  firstname: "John",
  lastname: "Wick",
  age: 45,
};

console.log(obj.displayDetails.call(obj2));