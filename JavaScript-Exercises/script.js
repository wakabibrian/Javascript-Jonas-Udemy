/*
Exercise 1:
------------
Write a JavaScript program to check two
numbers and return true if one of the numbers
is 100 or if the sum of the two numbers is
100.
*/
const numCheck = (num1, num2) =>
  num1 === 100 || num2 === 100 || num1 + num2 === 100;

console.log(numCheck(30, 70));
