"use strict";
//=============== Activating Strict Mode ===============//
/*
// Strict mode helps us to write secure JavaScript code
// You just add "use strict" at the beginning of the script, it has to be the very first statement
// It helps us to avoid accidental errors
// It forbids us to do certain things
// It creates visible errors in the developer console
// Javascript can also just fail silently

let hasDriversLincence = false;
const passTest = true;

if (passTest) hasDriversLincence = true;
if (hasDriversLincence) console.log("I can Drive :)");

// Can also introduce the keywords which might be used later as a reserved word.
// const interface = "black";
// const private = true;
*/

//=============== Functions ===============//
/*
// A function is a piece of code that we can reuse over and over again
// A function is like a variable, but a variable holds a value while a function can hold one or more complete lines of code.
// Defining the function
function logger() {
  console.log("My name is Wakabi");
}

// Calling/ running / invoking the function
logger();
logger();

// A function can receive data and return data back
// Parameters
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  //   Return data
  return juice;
}

//Capturing the value in a variable
const appleJuice = fruitProcessor(5, 0); // Arguments;
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice);

// Functions are important for implementing DRY (Don't Repeat Yourself) code

// Inbuilt functions
const num = Number("2");
console.log(num);
*/

//=============== Function Declarations vs. Expressions ===============//
/*
// Different ways of Declaring/Writing a Function
// Function Declaration - We use the function keyword to declare a function like we declare a variable
function calcAge1(birthYear) {
  //   const age = 2037 - birthYear;
  //   return age;
  return 2037 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);
// Parameter is a placeholder and argument is the actual value that we use to fill in that value

// Function Expression - Expresssion produces a value and we store it into a function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1990);
console.log(age2);

// Main differences:
// 1. We can call function declarations before defining the function but we can not do it for function expression
// Prefer to use function expressions because prefer storing everything in variables and defining functions before use
const age3 = calcAge3(1990);

function calcAge3(birthYear) {
  return 2037 - birthYear;
}

console.log(age3);
*/

//=============== Arrow Functions ===============//
/*
// Arrow function (ES6) a special form of function expressions that is shorter and faster to write
const calcAge = (birthYear) => 2037 - birthYear;
const age = calcAge(1990);
console.log(age);

const introduction = (firstName, secondName) =>
  `My name is ${firstName} ${secondName}`;
const introduce = introduction("Wakabi", "Brian");
console.log(introduce);

const yearsUntilRetirement = (birthYear, firstName) => {
  // Calculate current age
  const currentAge = 2037 - birthYear;
  // Calculate retirement/years remaining
  const retirement = 65 - currentAge;
  //   Return string
  return `${firstName} retires in ${retirement} years`;
};

const brianRetirment = yearsUntilRetirement(1990, "Brian");
const miracleRetirement = yearsUntilRetirement(1995, "Miracle");
console.log(brianRetirment);
console.log(miracleRetirement);

// Arrow functions do not get the this keyword
*/

//=============== Functions Calling Other Functions ===============//
/*
// Function, cutPieces  that cut fruits into multiples of 4 pieces
const cutPieces = function (fruit) {
  return 4 * fruit;
};

const fruitProcessor = function (apples, oranges) {
  // Cut apple fruits into pieces by calling the cutPiecies function
  const applePieces = cutPieces(apples);
  // Cut orange fruits into pieces by calling the cutPiecies function
  const orangePieces = cutPieces(oranges);

  // Process and return juice with the cut pieces
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
  return juice;
};

console.log(fruitProcessor(2, 3));

// Example 2
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  // Call the calAge function
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

const brianRetirment = yearsUntilRetirement(1990, "Brian");
const miracleRetirement = yearsUntilRetirement(1950, "Wakabi");
console.log(brianRetirment);
console.log(miracleRetirement);
*/

//=============== Introduction to Arrays ===============//
/*
// Before arrays:
const friend1 = "Micheal";
const friend2 = "Peter";
const friend3 = "Joshua";

// Data structures like arrays help to bundle items together into a single variable
const friends = ["Micheal", "Peter", "Joshua"];
console.log(friends);

const y = new Array(1991, 1996, 2021, 2020);
console.log(y);

// Accessing array items
console.log(friends[0]);
console.log(friends[1]);

// Number of elements in an array
console.log(friends.length);

// Getting last element in the array
console.log(friends[friends.length - 1]);

// Inside the [] you can put any expression

// Changing or mutating the array
friends[2] = "John";
console.log(friends);

// Only primitive values are immutable, thats why we can mutate arrays even though they are declared with const
// But we can not replace the entire array
// friends = ["Jane", "Michell", "Ronah"]; //This gives an error

// An array can hold values with different types
const firstName = "Wakabi";
const brian = [firstName, "Brian", 2035 - 1990, ["Micheal", "Peter", "Joshua"]];
console.log(brian);

// Example 2
const calcAge = function (birthYear) {
  return 2026 - birthYear;
};

const years = [1990, 1991, 1995, 2019];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);

console.log(age1, age2, age3, age4);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

//=============== Basic Array Operations (Methods) ===============//
/*
const friends = ["Micheal", "Peter", "Joshua"];
// push - Adding elements to the end of the array
friends.push("Joel");
console.log(friends);

//Push function return the new length of the array
const newlength = friends.push("Sam");
console.log(newlength);

// unshift - Adding elements to the beginning of the array
friends.unshift("Sarah");
console.log(friends);
// Also unshift returns the length of the new array

// pop - Removes elements from the end of the array / last element of the array
friends.pop();
console.log(friends);
// pop returns the removed element
const popped = friends.pop();
console.log(popped);

// shift - Removes the first element of the array
friends.shift();
console.log(friends);

// indexOf - Tells us which position in the array is a certain element
console.log(friends.indexOf("Micheal"));

// includes - finding if the element is in the array.
console.log(friends.includes("Peter"));
console.log(friends.includes("Brian"));

if (friends.includes("Micheal")) {
  console.log("You have a friend called Micheal");
}
  */

//=============== Introduction to Objects ===============//
/*
const brian = {
  firstName: "Wakabi",
  lastName: "Brian",
  job: "Media Manager",
  friends: ["Micheal", "Peter", "Joshua"],
};

// An object has keys/properties and values
// With objects the order doesnot matter, arrays the order matters
*/

//=============== Dot vs. Bracket Notation ===============//
/*
const brian = {
  firstName: "Wakabi",
  lastName: "Brian",
  job: "Media Manager",
  friends: ["Micheal", "Peter", "Joshua"],
};

console.log(brian);

// Dot notation helps to get the value of a property.
console.log(brian.firstName);

// Using the Bracket Notation
console.log(brian["lastName"]);
const nameKey = "Name";

// In the [] you can put any expression
console.log(brian["first" + nameKey]);
console.log(brian["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Brian? Choose between lastName, firstName, job, and friends",
);

if (brian[interestedIn]) {
  console.log(brian[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between lastName, firstName, job, and friends",
  );
}

// Adding new properties to the object
brian.location = "Lweza";
brian["age"] = 2026 - 1990;
console.log(brian);

// Challenge
// Brian has 3 friends and his best friend is called Micheal
console.log(
  `${brian.lastName} has ${brian.friends.length} friends and his best friend is called ${brian.friends[0]}`,
);
*/

//=============== Object Methods ===============//
/*
const brian = {
  firstName: "Wakabi",
  lastName: "Brian",
  birthYear: 1990,
  job: "Media Manager",
  friends: ["Micheal", "Peter", "Joshua"],
  hasDriversLicence: true,

  // Method - A function attached to an object
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.lastName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? "a" : "no"} drivers licence`;
  },
};

// const age = brian.calcAge(1990);
// console.log(age);
// console.log(brian["calcAge"](1990));

// Most efficient solution - calculate the age once
brian.calcAge();

console.log(brian.age);
console.log(brian.age);
console.log(brian.age);
console.log(brian.age);

// Brian is a 47-year old media manager, and he has a drivers licence
console.log(brian.getSummary());
*/

//=============== Iteration: The for Loop ===============//
/*
// This violets the DRY principle
// console.log("Lifting weight repetition 1");
// console.log("Lifting weight repetition 2");
// console.log("Lifting weight repetition 3");
// console.log("Lifting weight repetition 4");
// console.log("Lifting weight repetition 5");

// For loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}🏋️‍♀️`);
}
// let rep = 1- Innitializer;
// rep <= 10 - Condition
// rep++ - Counter
*/

//=============== Looping Arrays, Breaking and Continuing ===============//
/*
// Looping through arrays
const brianArray = [
  "Wakabi",
  "Brian",
  "Media Manager",
  2037 - 1990,
  [("Micheal", "Peter", "Joshua")],
  true,
];

const types = [];

for (let i = 0; i <= brianArray.length - 1; i++) {
  console.log(brianArray[i]);

  // Filling the array
  // types[i] = typeof brianArray[i];
  types.push(typeof brianArray[i]);
}

console.log(types);

// Example
const years = [1990, 1991, 1995, 2019, 1987];
const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
  ages.push(2026 - years[i]);
}
console.log(ages);

// Continue and Break
// Continue - skip
// Break - terminate
console.log("=======Only Strings========");
for (let i = 0; i <= years.length - 1; i++) {
  if (typeof brianArray[i] !== "string") continue;
  console.log(brianArray[i]);
}

console.log("=======Break when you find a number========");
for (let i = 0; i <= years.length - 1; i++) {
  if (typeof brianArray[i] === "number") break;
  console.log(brianArray[i]);
}
  */

//=============== Looping Backwards and Loops in Loops===============//
/*
// 0, 1, 2, 3, 4
console.log("====0, 1, 2, 3, 4====");
for (let i = 0; i <= 4; i++) {
  console.log(i);
}

// 4, 3, 2, 1, 0
console.log("====4, 3, 2, 1, 0====");
for (let i = 4; i >= 0; i--) {
  console.log(i);
}

// Example
const brian = [
  "Wakabi",
  "Brian",
  "Media Manager",
  2037 - 1990,
  [("Micheal", "Peter", "Joshua")],
  true,
];

// 5, true
// 4, [("Micheal", "Peter", "Joshua")]
// ...
// 0, "Wakabi"
console.log("====Example====");
for (let i = brian.length - 1; i >= 0; i--) {
  console.log(i, brian[i]);
}

// Loops in Loops
// =======Starting Exercise 1:
// Lifting weight repeation 1
// Lifting weight repeation 2
// Lifting weight repeation 3
// Lifting weight repeation 4
// =======Starting Exercise 2:
// Lifting weight repeation 1
// Lifting weight repeation 2
// Lifting weight repeation 3
// Lifting weight repeation 4
//...
// =======Starting Exercise 5:
// Lifting weight repeation 1
// Lifting weight repeation 2
// Lifting weight repeation 3
// Lifting weight repeation 4
console.log("====Loop in loops====");
for (let exercise = 1; exercise <= 5; exercise++) {
  console.log(`=======Starting Exercise ${exercise}:`);
  for (let rep = 1; rep <= 4; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/

//=============== The while Loop ===============//
/*
// While loop we only specify the condition
console.log("====For loop====");
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

console.log("====While loop====");
let rep = 1;
while (rep <= 5) {
  console.log(`Lifting weight repetition ${rep}`);
  rep++;
}

// While loop is more versatile than the for loop because it doesnt need a counter
// All it needs is a condition
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

console.log("You rolled a 6");

// Whenever you need a loop without a counter you use the while loop
*/

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i <= bills.length - 1; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(calcTip(bills[i]) + bills[i]);
// }

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i];
//   }

//   const average = sum / arr.length;
//   return average;
// };

// console.log(calcAverage(totals));

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
