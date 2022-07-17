// * **************************TIMESTAMPS*******************************

/**
* ? JavaScript represents dates internally as integers that specify the number of milli‐
* ? seconds since (or before) midnight on January 1, 1970, UTC time
* * For any Date object, the getTime() method returns this internal value, and the 
* * setTime() method sets it. So you can add 30 seconds to a Date with code like this, for example
@example
new Date().getTime() + 30000;//!Specified in ms, also called timestamps
 */
let dateObj = new Date();
dateObj.setTime(dateObj.getTime() + 300000);//*1sec=1000ms.Therefore, 300000ms=>300sec=>5mins
console.log(dateObj.toString())

/**
** ********************************Developer's win win!***********************************************
*!The static Date.now() method returns the current time as a timestamp and is helpful when you want to
*!measure how long your code takes to run. 
@example
const startTime = Date.now()
functionRunning()
const endTime = Date.now()
console.log(`It took ${endTime-startTime} to run me!`)
*/
