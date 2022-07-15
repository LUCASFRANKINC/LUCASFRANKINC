/**
 * Final regexp proj
 * TODO: Ensure that the phone number is listed in one of the given formats:
 * @example 
 * (254)-720-593754
 * (254).720.593754
 * (254)/720/593754
 * ? The parentheses are optional
 */
function phoneNumChecker(num){
    if(!num) throw "The number cannot be empty!";
    let regXp = /^(?:\d{3}|\(\d{3}\))([\.\/-])(?:\d{3})\1(?:\d{6})$/;
    return regXp.test(num) ? `${num} is ok!` : `${num} has a breach!`;
}

console.log(phoneNumChecker('(254)-721-402985'));