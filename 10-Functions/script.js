'use strict';
//=============== Default Parameters ===============//
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // Old way of assigning default values - ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/

//=============== Functions Accepting Callback Functions ===============//
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

// Higher-order functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// JS uses callbacks all the time
const highFive = function () {
  console.log('Hi Five!');
};

document.body.addEventListener('click', highFive);

['Brian', 'Miracle', 'Britney'].forEach(highFive);

// Why JS uses callbacks all the time
// It makes it easier connect into more reusable and interconnected parts
// Callbacks allow us to create abstractions - we hide the detail of code implementation and we don't care about those details
*/

//=============== Functions Returning Functions ===============//
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greetHello = greet('Hello');
greetHello('Brian');
greetHello('Micheal');
greetHello('Lorryn');

greet('Hola!')('Britney');
greet('Whatsup')('Miracle');
