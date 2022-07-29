/**
 * Consists of three classes namely:
 * Intl.NumberFormat, Intl.DateTimeFormat and Intl.Collator
 */
//Intl.NumberFormat
let value =Intl.NumberFormat("en", {
    style: "currency", //can be either currency, percent or decimal
    //the following two properties only apply if the style is currency
    currency : "USD",
    currencyDisplay : "name", //either code, name or symbol. eg. code - USD, name - US dollar, symbol- $.
    useGrouping : true,//set the symbol to show if the number should have a thousand separator or not.
    minimumIntegerDigits : 2,
    minimumFractionDigits : 2,
    maximumFractionDigits : 2,
});
console.log(value.format(20));