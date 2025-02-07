const accountId = 14459
let accountEmail = "avani@google.com";
var accountPass = "123456"
accountCity = "Jaipur";
let accountState;

// accountId = 2;  // not allowed.
accountEmail = "xyz@google.com";
accountPass = "457890";
accountCity = "Udaipur";
console.log(accountId);
/*
Prefer not to use var. 
because of issue in block scope and functional scope 
*/
// second method to log all the things togather.in table form.
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);


