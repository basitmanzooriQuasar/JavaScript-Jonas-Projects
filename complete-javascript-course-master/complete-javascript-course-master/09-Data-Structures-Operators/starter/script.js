'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
};

// const [x, y] = restaurant.categories;
// console.log(x, y);
// let [a, , b] = restaurant.mainMenu;
// console.log(a, b);
// [b, a] = [a, b];
// console.log(a, b);
// // const arr = [1, 2, 3];
// // console.log(arr[2]);

// // const [x, y] = arr;
// // console.log(y);

// const nested = [2, 3, 4, [9, 19]];
// // const [i, , , j] = nested;
// // console.log(i, j);

// //inorder to get elements of nested array using destructuring of array
// const [i, , , [j, k]] = nested;
// console.log(i, j, k);

// //destructuring objects
// let { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //if we want to change the name of the object properties

// let { name: newName, openingHours: hours } = restaurant;
// console.log(newName, hours);

// let { menu, name, openingHours } = restaurant;
// console.log(menu, name, openingHours); //menu will show undefined as it does not exist in the object

// let { menu = [], name: newName = [], categories: newCat = [] } = restaurant;

// console.log(menu, newName, newCat); //menu does not exist but is assigned default value instead of undefined

//mutating variables in objects using destructuring
let a = 19;
let b = 12;

const obj = {
  a: 10,
  b: 20,
  c: 30,
};

({ a, b } = obj);
console.log(a, b); //will print the mutated values of variables

//nested objects

const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first);
// Result: 1

console.log(second);
// Result: 2

console.log(rest);
// Result: [3, 4, 5]
