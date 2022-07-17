//The current time
console.log("Current time: " + new Date()); 

/**
 * If you pass one numeric argument, the Date() constructor interprets that argument
as the number of milliseconds since the 1970 epoch
 */
console.log("One num arg: " + new Date(0));

//Num of ms elapsed since 1/1/1970
console.log("Elapsed ms: " + Date.now()); 

/**If you specify two or more integer arguments, they are interpreted as the year, month,
day-of-month, hour, minute, second, and millisecond in your local time zone 
* ! The month is array index-based. 0-January, 11-December. when invoked with multiple numbers, the Date() constructor interprets
* ! them using whatever time zone the local computer is set to. If you want to specify a
* !date and time in UTC (Universal Coordinated Time, aka GMT), then you can use the Date.UTC()
*/
console.log("More args: " + new Date(2100, 11, 12, 10, 5, 30, 80));

//with timezone set, by default it prints your local timezone just as above. to print it in the utc specified, 
//use toUTCString() or toISOString() methods.
console.log("More args but timezone set(PRINTED WITH UTC): " + new Date(Date.UTC(2100,11,12)).toUTCString());
console.log("More args but timezone set(PRINTED WITH ISO): " + new Date(Date.UTC(2100,11,12)).toISOString());

/**if you pass a string to the Date() constructor, it will attempt to parse that
string as a date and time specification. The constructor can parse dates specified in
the formats produced by the toString() , toUTCString() , and toISOString()
methods */
console.log("Parse ISO date string to local timezone: " + new Date('2100-12-12T00:00:00.000Z'));//ISO string to be parsed.

//***********************************DATE METHODS**************************** */
/**
 * Once you have a Date object, various get and set methods allow you to query and
modify the year, month, day-of-month, hour, minute, second, and millisecond fields
of the Date. Each of these methods has two forms: one that gets or sets using local
time and one that gets or sets using UTC time. To get or set the year of a Date object,
 for example, you would use 
* * getFullYear() , getUTCFullYear() , setFullYear() , or setUTCFullYear()
* ? To get or set the other fields of a Date, replace “FullYear” in the method name with
* ? “Month”, “Date”, “Hours”, “Minutes”, “Seconds”, or “Milliseconds”.
* * 🏄💕 Some of the date set methods allow you to set more than one field at a time. 👌
* ! 1. setFullYear() and setUTCFullYear() optionally allow you to set the month and day-of-month
* ! 2. setHours() and setUTCHours() allow you to specify the minutes, seconds, and milliseconds fields in addition to the hours field
* TODO Please try them out! Anyhu, I wonder why I'd even explained...
 */

//The default Date object
let [dateObj, initDate] = [new Date(), new Date()];

//setting year using local timezone to +3.
dateObj.setFullYear(dateObj.getFullYear() + 3, dateObj.getMonth()+ 2); //=>Sept 17th, 2025
dateObj.setDate(dateObj.getDate() + 5);//=>Sept 22nd, 2025
dateObj.setHours(dateObj.getHours()+5, dateObj.getMinutes() + 15, dateObj.getSeconds()+4);//=>was 13:45:20, expect=>16:00:24

console.table({"Initially time":initDate.toString(), "Altered time":dateObj.toString()}); 

/**
* * **************Here is my output after running the code above!***************
* ┌────────────────┬────────────────────────────────────────────────────────────┐
* │    (index)     │                           Values                           │
* ├────────────────┼────────────────────────────────────────────────────────────┤
*?│ Initially time │ 'Sun Jul 17 2022 13:51:00 GMT+0300 (Moscow Standard Time)' │
*?│  Altered time  │ 'Mon Sep 22 2025 19:06:04 GMT+0300 (Moscow Standard Time)' │
* └────────────────┴────────────────────────────────────────────────────────────┘
*/

