// Primitive or reference
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt - they all call by value.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;  // here value is undefined.

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bignumber = 3456789123456789n  // rarely use


// Reference  (Non Primitive or reference)
// Array, Objects, Functions

// array defines in []
// object defines in { }
const heros = ["marvel", "batman", "spiderman"];  
{
    name: "alexa";
    age: 22;
}

const myFunction = function(){
    console.log("Hello World");
    
}

// for reference - read -  https://262.ecma-international.org/5.1/#sec-11.4.3 - typeof Operator


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Two types of memory - memory management in JavaScript
// Stack (can be use in Primitive types.) , Heap ( can be use where non-premitive types  )

let myYoutubeName = "welcome to my channel";
let anotherName = "Netflix channel";
anotherName = "Disney channel";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@asdf",
}
let userTwo = userOne;

userTwo.email = "avani@google.com";

console.log(userOne.email);
console.log(userTwo.email);

