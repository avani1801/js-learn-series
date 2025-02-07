// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  // here the result would be true. 
/* b'coz An equality check == and comparisions > < >= <= work differently.
Comparisions convert null to a number, treating it as 0.
Thats why (3) null >= 0 is true and (1) null > 0 is false. 
Avoid These types of conversion
*/

// strict ===    its check  strictly and also check datatype.
