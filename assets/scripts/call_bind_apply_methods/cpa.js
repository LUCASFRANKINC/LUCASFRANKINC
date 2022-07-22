let obj = {
    firstname: "Francis",
    lastname: "Lucas",
    age: 26,
  };
function displayDetails(state, hometown) {
    return `${this.firstname + " " + this.lastname + " aged " + this.age + " from " + hometown +", state of " + state}`;
  }
  
  let obj2 = {
    firstname: "John",
    lastname: "Wick",
    age: 45,
  };
  
  //function borrowing. For call, pass args individually, comma-separated. For apply, pass args as an array. Both methods invoke directly by passing in
  //the reference for this.
  console.log(displayDetails.call(obj, "Kenya", "Nairobi"));

  console.log(displayDetails.apply(obj2,["Uganda", "Msipitwe"]));

  //Does not directly invoke the method but gives you the copy of the same method that you can invoke later.
  let printDetails = displayDetails.bind(obj, "Aharem", "Tennessee");
  console.log(printDetails())