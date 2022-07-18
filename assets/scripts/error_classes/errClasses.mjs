import Ping from ("../important files/ping");
/**
 * ~Error objects have two properties: message and name, and a method: toString().
 * &The value of the message property is the value you passed to the Error() constructor,converted to a string if necessary.
 * &For error objects created with Error() , the name property is always “Error”.
 * &toString()=> method returns the value of the name property followed by a colon and space and the value of the message property.
                Although it is not part of the ECMAScript standard, Node and all modern browsers
                also define a stack property on Error objects. The value of this property is a multiline
                string that contains a stack trace of the JavaScript call stack at the moment that
                the Error object was created. This can be useful information to log when an unexpected error is caught.

                JavaScript also defines a number of subclasses that it uses to
                signal particular types of errors defined by ECMAScript. These subclasses are
*!              EvalError, RangeError, ReferenceError, SyntaxError, TypeError, and URIError.
                Each of these subclasses has a constructor that takes a single message
                argument. And instances of each of these subclasses have a name property whose
                value is the same as the constructor name.
 */

class ValidationError extends Error {
  constructor(message, type) {
    super(message);//calls the super Error(message) obj
    this.type = type;
    this.name = "Validation Error";
  }
}

let ping = new Ping();

const emailChecker = email => {
    let mess = ""
    try{
         if(/^[^@]+@[^@\.]+\..+[^\W]$/g.test(email)){

         }
         else throw new ValidationError("The email is invalid!", "Email Error")
    }
    catch(ex) {
        if(ex instanceof ValidationError && ex.name === "Validation Error") console.log("A validation error occurred!");//using instanceof or name property to check error type
        const {message, name, type, stack} = ex;
        console.table({message, name, type, stack})
    }
    finally{
        return mess;
    }
}
console.log(emailChecker("lu.casfrank254@ddf.co.ke#"))


//                       WRAPPING EXCEPTIONS
/**
 * We can wrap lower-level exceptions, which are of instances of a subclass of a parent exception constructor and create higher-level errors.
 * To do this, we can catch and rethrow lower-level exceptions and catch them in higher-level code.
 * First, we have to create a parent and child classes which extend from the Error class
 */

pingDomain("www.gmail.com")