//1. filter Method. 
const items = [
    {name: 'Bike',  price: 100 },
    {name: 'TV',  price: 200 },
    {name: 'Album',  price: 10 },
    {name: 'Book',  price: 5 },
    {name: 'Phone',  price: 500 },
    {name: 'Computer',  price: 1000 },
    {name: 'keyboard',  price: 25 },
]

const filteredItems = items.filter((item) => {
    return item.price <=100
})

console.log(items)
console.log(filteredItems)

// 2. Map - allows you to detect one array in convert in to new array
const itemNames = items.map((item) => {
    return item.price
})

console.log(itemNames)

// 3. Find Method - to find th single object in an array.
const foundItem = items.find((item) => {
    return item.name === "Book"
})

console.log(foundItem)

// 4. forEach method - 
items.forEach((item) => {
    console.log(item.name)
})

// 5. to written true or false 
const hasInexpensiveItems = items.some((item) => {
    return item.price > 100
})

console.log(hasInexpensiveItems)

//6. every method - check in every items 
const hasExpensiveItems = items.every((item) => {
    return item.price <= 1000
})

console.log(hasExpensiveItems)

// 7. reduce Method - 
/*The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.*/
const total = items.reduce((currentTotal, items) => {
    return items.price + currentTotal
} , 0)

console.log(total)

//8. include Method - 
/*The includes() method returns true if an array contains a specified value.
The includes() method returns false if the value is not found. */

const allNumber = [0, 1, 2, 3, 4, 5];
const includesTwo = allNumber.includes(3);

console.log(includesTwo);

//9.  .push() Method (most commonly use)- which adds value in the array.
allNumber.push(7);
console.log(allNumber);

//10.  .pop() - remove last value of array. you need not to add anything in ().
allNumber.pop();
console.log(allNumber);
//11.  .unshift() - add new value in starting of the array.but all value of array would be change.
allNumber.unshift(11);
console.log(allNumber);

//11.  .unshift() - delete value in starting of the array.
allNumber.shift();
console.log(allNumber);

// slice , splice Method

console.log("A", allNumber);

const myn1 = allNumber.slice(1, 3)

console.log(myn1);
console.log("B", allNumber);

const myn2 = allNumber.splice(1, 3)
console.log("C", allNumber);
console.log(myn2);

// .concat() - merge 2 arrays in one.

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "Batman"]
const allHeros = marvel_heros.concat(dc);

console.log(allHeros);

// ...spread - it spread 2 arraays in each element. same result as concat() .you can use more than 2 arrays.

const all_new_heros = [...marvel_heros, ...dc];
console.log(all_new_heros);

// Multi arrays in one array - Instead of infinity you can manually add depth .here 3 deth.
const multi_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const multi_array_toGather = multi_array.flat(Infinity);
console.log(multi_array_toGather);

/* Below this method  is used in data scraping . when you select data from web page than it can be in any format . wheather 
it is in object, array , string or any. */
console.log(Array.isArray("bigData"));

//Here we ask that if its array or not and thw  result is false. its not array.
// And Now you want to convert it  into array than follow below step.
console.log(Array.from("bigData"));

//adding another array.
console.log(Array.from({name : "bigData"})); /* here result would be [].*/

// .of -  gathers all values in one array.
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));






