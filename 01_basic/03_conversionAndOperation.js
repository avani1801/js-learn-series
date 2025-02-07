let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33 . is easily convert in 33
// "33abc" => NaN - means Not a Number.
// true => 1; false =>0 .  if true than it will print 1. and if false than 0.

let isLoggedIn = 1;
 
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false (result would be this)
// "" => false (result would be this)
// "hitesh" => true (result would be this)

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//   *************************** Operations ***************************************   

let value = 3;
let negValue = -value;

console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); 
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " avani";

// Illustration of string manipulation using spaces between concatenated strings
let str3 = str1 + str2;
console.log(str3);

// complex situation below
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Advice against confusing coding practices; emphasizes clarity for maintainability.
console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

// increment operator ++ read mdn. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment








