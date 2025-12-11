//? Dates 
//* min & sec --> 0-59 , hrs --> 0-23 , day 0"sunday" -6 , months --> 0-11
let d = new Date();
console.log(d);
//* getters 
console.log(d.getDate());
console.log(d.getMonth()+1);
console.log(d.getFullYear());
console.log(d.getTime()); //? ms to hrs
console.log(d.getHours());
//* setters
// d.setDate(23)
console.log(d);
//* to 
console.log(d.toLocaleString('ar-EG'));

//& /////////////////////////////////////
//? Symbols --> create unique values
let s1 = Symbol("123");
let s2 = Symbol("123");
console.log(s1===s2);
console.log(s1 , typeof s1);

console.log(Number.isNaN(123));//false(check for NAN value)
console.log(Number.isNaN("123"));//false
