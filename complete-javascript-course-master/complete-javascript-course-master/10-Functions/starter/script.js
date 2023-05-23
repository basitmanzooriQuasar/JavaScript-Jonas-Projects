'use strict';

// function funcName(name = 'Raju', age = 18, money = 1200) {
//   //default parameters
//   console.log(`${name} is of ${age} age and has ${money} in his account`);
// }

// funcName('basit');
// var firstName = 'Raju';
// const basit = {
//   firstName: 'Basit',
//   lastName: 'Manzoor',
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// basit.greet();
// // basit.calcAge();

// //call back function

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //higher order function

// const transform = function (str, fn) {
//   console.log(`Original string is ${str}`);
//   console.log(`Transformed string is ${fn(str)}`);

//   console.log(`Transformed by the function: ${fn.name}`);
// };

// transform('JavaScript is the best!', upperFirstWord);
// transform('JavaScript is the best!', oneWord);

// //call back function helps in achieving abstraction

// //functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('basit');
// greeterHey('Manzoor');
///////////////////////////////////////
// Functions Returning Functions
// const greet = function (greeting) {
//     return function (name) {
//       console.log(`${greeting} ${name}`);
//     };
//   };

//   const greeterHey = greet('Hey');
//   greeterHey('Jonas');
//   greeterHey('Steven');

//   greet('Hello')('Jonas');

//   // Challenge
//   const greetArr = greeting => name => console.log(`${greeting} ${name}`);

//   greetArr('Hi')('Jonas');

// //the call and apply methods
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //bind method
// book.call(eurowings, 23, 'Basit Manzoor');

// const bookEw = book.bind(eurowings);
// bookEw(222, ' Baba Blacksheep');
// const bookSw = book.bind(swiss);
// bookSw(232, 'Raja ji');

// //passing one argument before
// const bookEW23 = book.bind(eurowings, 2221);

// //now the function needs onlt the remaining arguments
// bookEW23('Gumnaam insaan ');

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();
