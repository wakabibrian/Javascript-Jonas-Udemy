//================== Values and Variables =====================//
/*
let firstName = "Wakabi";
let age = 36;
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable is a box to which we can store a value
// Then we can reference to that variable over and over again

// ==== Variable declaration rules
// Use camelCase
// Don't start with a number
// Can only contain numbers, letters, underscore(_), dollar sign ($)
// Variables must be descriptive
let myFirstJob = "Fitter";
let myCurrectJob = "Media Manager";
*/

//================== Data Types =====================//
/*
// Value is either an object or a primitive

// 7 Primitive data types
// Numbers - Floating point numbers. Used for decimals or integers. let age = 23
// Strings - Squence of characters. Used for text. let firstName = "Wakabi"
// Boolean - Logical type that can only be true or false. Used for taking decisions. let fullAge = true
// Undefined - A value that is taken by a variable that is not yet defined ("empty value"). let children
// Null - Also means "empty value"
// Symbol - A value that is unique and can not be changed.
// BigInt - Large integers than the Number type can hold.

// Javascrit has dynamic typing. When we create a new variable we do not have to manually define the data type of the value stored in a variable. Instead, data types are defined automatically
//In JS, it is the value that has a type not the variable

let javascriptIsFun = true;
console.log(javascriptIsFun);
//typeof returns the type of a value
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Wakabi");

// Dynamic typing - This means that we can easily change the type of the value holing the the variable
javascriptIsFun = "YES!";

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(year);
console.log(typeof year);
*/

//================== let, const and var =====================//
/*
// let - Used for declaring variables that can change later
let age = 30;
age = 31; //Reassigning a value to a variable or mutate the age variable

// const - Used for declaring variables that are not supposed to change in the future
const birthYear = 1991; //immutable variable
// birthYear = 1990;
console.log(birthYear);

// var - Is the old way of declaring variables
*/

//==================  Basic Operators =====================//
/*
const now = 2037;
const ageWakabi = now - 1990;
console.log(ageWakabi);

console.log(ageWakabi * 2);
console.log(ageWakabi / 10);
console.log(2 ** 3); // 2 to the power of 3

// Concatnent/Joining strings
const firstName = "Wakabi";
const lastName = "Brian";

console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 2;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x+1
x--; // x = x -1
console.log(x);

// Comparison operators - These return boolean values
ageSarah = now - 2018;
console.log(ageWakabi > ageSarah); // >, <, >=, <=
*/

//==================  Operator Precedence =====================//
// Google mdn Operator Precedence for reference
// Higher precedence are executed first

//==================  Strings and Template Literals =====================//
/*
// String concantenation
let firstName = "Brian";
let job = "Media Manager";
let birthYear = 1990;
let currentYear = 2037;

let brian =
  "I'm " +
  firstName +
  " , a " +
  (currentYear - birthYear) +
  " years old " +
  job;
console.log(brian);

// Template literals
let newBrian = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}`;
console.log(newBrian);

// Always use back ticks even for normal strings just to help not to always figure out which quotations to use

// Multiple line strings
// Old way
console.log(`This \nis a \nmultiple line \nstring.`);

// New way
console.log(`This
is a 
multiple line
string. 
`);
*/

//==================  Taking Decisions: if / else Statements =====================//
/*
const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarh is too young. Wait another ${yearsLeft} years :)`);
}

// Example
const birthYear = 1990;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

//==================  Type Conversion and Coercion =====================//
/*
// Type conversion - When we exciplitly wanr to convert from one type to another
const inputYear = "1990";
console.log(Number(inputYear) + 18); //Converting strings to numbers
console.log(inputYear + 18); //Not converted
console.log(Number("Wakabi")); //Returns NaN - Not a number
console.log(typeof NaN); //NaN is an invalid number

console.log(String(23)); //Converting numbers to strings

// Type Coercion - Implicitly/automatically converting from one type to another
console.log("I am " + 23 + " years old."); //Number is automatically converted to a string.
console.log("23" - "10" - 3); //String is automatically converted to a number
console.log("23" * "2"); //String is converted to number
console.log("26" / "2"); //String is converted to number
*/

//==================  Truthy and Falsy Values =====================//
/*
// Falsy values are values that are not exactly falsy but wil become falsy when we try to convert them into a boolean.
// There are only 5 Falsy values: 0, "", undefined, NaN, null,{}
// Everything else are truthy values,values that will be converted to true.
// Forexample: 2, 4, "Wakabi"
console.log(Boolean(0));
console.log(Boolean("Wakabi"));
console.log(Boolean(undefined));
console.log(Boolean(4));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean({}));

// Example
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 0; //This is a bug
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

//==================  Equality Operators: == vs. === =====================//
/*
const age = 18;
if (age === 18) console.log("You just became an adult :)");

console.log("18" === 18); //false - Does not perform type coercion (Strict)
console.log("18" == 18); //true - Performs type coercion (Loose)
// Always use the strict.

const favorite = prompt("Whats your favorite number");
console.log(favorite);

if (favorite == 23) console.log("Cool! 23 is an amazing number");
if (favorite === 23) console.log("Cool! 23 is an amazing number");

// Convert the prompt to a number
const favorite1 = Number(prompt("Whats your favorite number"));
if (favorite1 == 35) console.log("Cool! 35 is an amazing number");
if (favorite1 === 35) console.log("Cool! 35 is an amazing number");

if (favorite !== 23) {
  console.log("Why not 23?");
}
*/

//==================  Boolean Logic =====================//
// The AND, OR and NOT operators
// AND - only true if all are true. (&&)
// OR - true if atleast one of them is true (||)
// NOT - Just inverts (!)

//==================  Logical Operators =====================//
/*
const hasDriversLicence = true;
const hasGoodVision = false;
const isTired = true;
console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}
*/

//==================  The switch Statement =====================//
/*
const day = "sunday";

switch (day) {
  case "monday":
    console.log("Driving lessons");
    console.log("Coding");
    break;
  case "tuesday":
    console.log("Edit videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Driving lessons");
    console.log("Learning media staff");
    break;
  case "friday":
    console.log("Box parking");
    console.log("Prayig");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    console.log("Praying");
    break;
  default:
    console.log("Invalid date");
}

// if...else
if (day === "monday") {
  console.log("Driving lessons");
  console.log("Coding");
} else if (day === "tuesday") {
  console.log("Edit videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Driving lessons");
  console.log("Learning media staff");
} else if (day === "friday") {
  console.log("Box parking");
  console.log("Prayig");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
  console.log("Praying");
} else {
  console.log("Invalid date");
}
  */

//==================  Statements and Expressions =====================//
/*
// An expression is a piece of code that produces a value, e.g 3+4, 1991, true && true
// A statement is a bigger piece of code which is executed and doesnot necessarily produce a value
// e.g
if (23 > 10) {
  const str = "23 is bigger than 10";
}

// In template literal we can only put an expression but not a statement
console.log(`I am ${23 - 10} years old`);
*/

//==================  The Conditional (Ternary) Operator =====================//
/*
const age = 18;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);

// if statement
let drink2;
if (age >= 18) {
  drink2 = "Wine";
} else {
  drink2 = "Water";
}

console.log(drink2);

// Using a ternary operator, we can have conditionals inside the template literals
console.log(
  `According to Brian's age, the drink he is supposed to take is ${age >= 18 ? "Wine" : "Water"}`,
);
*/
