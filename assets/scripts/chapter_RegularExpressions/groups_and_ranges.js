
//**Capturing groups and back referencing***************************

let string = "Lucas Francis, 2022, Copyright.";
let regex = /(\w+)\s(\w+)(,)\s\d+\3\s\w+/; //using \n => where n is a positive integer for back referencing.
let match = regex.exec(string);
console.log(`${match[2]}, ${match[1]}`); //using capturing groups. Items are stored as an array.

//******End of back capturing groups and back referencing*************

//****** Named capturing group and its back reference*****************

let namedCaptureGroupRegExp = /(?<title>\w+),\soh\s\k<title>/i; //Named capture group and a back reference. ie. (?<title>\w+) referenced by \k<title>
let str = "Lord, Oh lord!"
console.log(str.match(namedCaptureGroupRegExp))

//*******End of Named capturing group and its back reference************

//**** Using named capturing group to deduce a country code from a phone number. e.g. (254)712345678 => country code is 254.********

let countryCodeRegExp = /\((?<area_code>\d+)\)/;
let phoneNumber = '(254)720593754';
let code = phoneNumber.match(countryCodeRegExp);
console.log(code.groups.area_code);

//************************ End of using named capturing group to deduce a country code from a phone number***************************