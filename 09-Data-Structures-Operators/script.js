'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2}, and ${ing3}`,
    );
  },
};

// ========== The Spread Operator (...) =============== //
const arr = [7, 8, 9];
// Adding new items at the beginning of the array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);
// Whenever we need elements of the array individually we can use the spread operator

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spread Operator works on all iterables; arrays, strings, maps and sets but not objects
// Spread operator on strings
const str = 'Wakabi';
const letters = [...str];
console.log(letters);

// Real-world example
// const ingredients = [
//   prompt("Let's make pasta; Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1990, ...restaurant, founder: 'Wakabi' };
console.log(newRestaurant);

// Copy objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Wakabi Restaurant';
console.log(restaurant);
console.log(restaurantCopy);

// ========== Destructuring Objects =============== //
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Lweza, Kajjansi',
  starterIndex: 2,
  mainIndex: 2,
});

restaurant.orderDelivery({
  address: 'Lweza, Kajjansi',
  mainIndex: 1,
});

// const { name, openingHours, categories } = restaurant;

// Giving them new names
const { name: restaurantName, openingHours, categories: tags } = restaurant;

console.log(restaurantName, openingHours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 2, b: 3, c: 4 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
*/

// ========== Destructuring Arrays =============== //
/*
const arr = [1, 2, 3];
const [a, b, c] = arr;
//Destructuring - unpacking an array
console.log(a, b, c);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

const [starter, main] = restaurant.order(3, 0);
console.log(starter, main);

// Nested array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [2, 4];
console.log(p, q, r);
*/
