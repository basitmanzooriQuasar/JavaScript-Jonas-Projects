'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // const [x, y] = restaurant.categories;
// // console.log(x, y);
// // let [a, , b] = restaurant.mainMenu;
// // console.log(a, b);
// // [b, a] = [a, b];
// // console.log(a, b);
// // // const arr = [1, 2, 3];
// // // console.log(arr[2]);

// // // const [x, y] = arr;
// // // console.log(y);

// // const nested = [2, 3, 4, [9, 19]];
// // // const [i, , , j] = nested;
// // // console.log(i, j);

// // //inorder to get elements of nested array using destructuring of array
// // const [i, , , [j, k]] = nested;
// // console.log(i, j, k);

// // //destructuring objects
// // let { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // //if we want to change the name of the object properties

// // let { name: newName, openingHours: hours } = restaurant;
// // console.log(newName, hours);

// // let { menu, name, openingHours } = restaurant;
// // console.log(menu, name, openingHours); //menu will show undefined as it does not exist in the object

// // let { menu = [], name: newName = [], categories: newCat = [] } = restaurant;

// // console.log(menu, newName, newCat); //menu does not exist but is assigned default value instead of undefined

// //mutating variables in objects using destructuring
// let a = 19;
// let b = 12;

// const obj = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// ({ a, b } = obj);
// console.log(a, b); //will print the mutated values of variables

// //nested objects

// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;

// console.log(first);
// // Result: 1

// console.log(second);
// // Result: 2

// console.log(rest);
// // Result: [3, 4, 5]

// //functions using Rest pattern
// const add = function (...Numbers) {
//   let sum = 0;
//   for (let i = 0; i < Numbers.length; i++) {
//     sum += Numbers[i];
//   }
//   return sum;
// };

// const res1 = add(1, 2, 3, 4);
// const res2 = add(1, 3, 4, 4, 5, 6, 7);
// const res3 = add(123, 31);

// console.log(res1, res2, res3);

// //short circuiting
// console.log(3 || 'basit');
// console.log(0 || null || 0);
// console.log(0 && 'basit');
// console.log(1 && 0 && null && 22);

// //the  nullish coalescing operator
// const guests = 0;
// const totalguestes = guests ?? 10;

// console.log(totalguestes);

// //logical assignment operators
// const rest1 = {
//   name: 'la chocola',
//   guestsRest: 19,
// };
// const rest2 = {
//   name: 'olive la decima',
//   owner: 'Baba',
// };

// rest1.guestsRest ||= 10; //OR assignment
// rest2.guestsRest ||= 10;
// console.log(rest1);
// console.log(rest2);
// const rest1 = {
//   name: 'la chocola',
//   guestsRest: 0,
// };
// const rest2 = {
//   name: 'olive la decima',
//   owner: 'Baba',
// };

// rest1.guestsRest ??= 10; //nullish(null or undefined) assignment operator
// rest2.guestsRest ??= 10;
// console.log(rest1);
// console.log(rest2);

// //logical AND assigment operator
// rest2.owner &&= '<Annonymous>';
// console.log(rest1);
// console.log(rest2);

//coding challenge 1
const game = {
  team1: 'Real Madrid',
  team2: 'Manchester City',
  players: [
    [
      'Courtios',
      'Militao',
      'Alaba',
      'Carajal',
      'Camavinga',
      'Valverde',
      'Kroos',
      'Modric',
      'Vini Jr',
      'Benzema',
      'Rodrygo',
    ],
    [
      'Ederson',
      'Walker',
      'Ruben Dias',
      'Akanji',
      'Nathen Ake',
      'Rodri',
      'Gundogen',
      'Kevin De Bryne',
      'Bernado Silva',
      'Haaland',
      'Jack Gearlish',
    ],
  ],
  score: '4:0',
  scored: ['Vini Jr', 'Benzema', 'Rodrygo', 'Benzema'],
  date: 'May 18th, 2023',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk1, ...fieldPlayer1] = player1;

const [gk2, ...fieldPlayer2] = player2;
console.log(fieldPlayer1);

const allPlayers = [...player1, ...player2];

const player1final = [...player1, 'Asensio', 'Touchmeni', 'Ceballos'];

console.log(player1final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...playerGoals) {
  console.log(`${playerGoals.length} goals were scored by `);
};

printGoals(...game.scored);

//morelikely to win, lower odd wins

team1 < team2 && console.log('Team 1 is more likely to win');

team1 > team2 && console.log('Team 2 is more likely to win');
