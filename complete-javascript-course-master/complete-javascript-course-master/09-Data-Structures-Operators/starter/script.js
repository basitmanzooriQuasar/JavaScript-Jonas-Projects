'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

// //coding challenge 1
// const game = {
//   team1: 'Real Madrid',
//   team2: 'Manchester City',
//   players: [
//     [
//       'Courtios',
//       'Militao',
//       'Alaba',
//       'Carajal',
//       'Camavinga',
//       'Valverde',
//       'Kroos',
//       'Modric',
//       'Vini Jr',
//       'Benzema',
//       'Rodrygo',
//     ],
//     [
//       'Ederson',
//       'Walker',
//       'Ruben Dias',
//       'Akanji',
//       'Nathen Ake',
//       'Rodri',
//       'Gundogen',
//       'Kevin De Bryne',
//       'Bernado Silva',
//       'Haaland',
//       'Jack Gearlish',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Vini Jr', 'Benzema', 'Rodrygo', 'Benzema'],
//   date: 'May 18th, 2023',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk1, ...fieldPlayer1] = player1;

// const [gk2, ...fieldPlayer2] = player2;
// console.log(fieldPlayer1);

// const allPlayers = [...player1, ...player2];

// const player1final = [...player1, 'Asensio', 'Touchmeni', 'Ceballos'];

// console.log(player1final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...playerGoals) {
//   console.log(`${playerGoals.length} goals were scored by `);
// };

// printGoals(...game.scored);

// //morelikely to win, lower odd wins

// team1 < team2 && console.log('Team 1 is more likely to win');

// team1 > team2 && console.log('Team 2 is more likely to win');

//for of loop

// const arr = [1, 22, 3, 4, 4, 44, 43, 23, 23, 4];

// for (let item of arr) console.log(item); //here item is the variable which will contains elments of the array but not the index, and iterates by itself

// //for getting indexes
// for (let item of arr.entries()) console.log(item);

// //coding challenge 2

// const game = {
//   team1: 'Real Madrid',
//   team2: 'Manchester City',
//   players: [
//     [
//       'Courtios',
//       'Militao',
//       'Alaba',
//       'Carajal',
//       'Camavinga',
//       'Valverde',
//       'Kroos',
//       'Modric',
//       'Vini Jr',
//       'Benzema',
//       'Rodrygo',
//     ],
//     [
//       'Ederson',
//       'Walker',
//       'Ruben Dias',
//       'Akanji',
//       'Nathen Ake',
//       'Rodri',
//       'Gundogen',
//       'Kevin De Bryne',
//       'Bernado Silva',
//       'Haaland',
//       'Jack Gearlish',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Vini Jr', 'Benzema', 'Rodrygo', 'Benzema'],
//   date: 'May 18th, 2023',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //code for 1
// for (const [index, scorer] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${scorer}`);
// }

// //code for 2
// const keys = Object.values(game.odds);
// let sum = 0;
// for (const key of keys) {
//   sum += key;
// }
// let avg = sum / keys.length;
// console.log(avg);

// // const {
// //   odds: { team1: RealMadrid, x: draw, team2: ManchesterCity },
// // } = game;
// //code for 3
// for (const [prop, key] of Object.entries(game.odds)) {
//   const teamStr = prop === 'x' ? 'draw' : `Victory ${game[prop]}`;
//   console.log(`Odd of victory ${teamStr}: ${key}`);
// }

// //Sets

// const ordersSet = new Set(['Pizza', 'Paasta', 'Burger', 'Burger', 'Pizza']);

// console.log(ordersSet);

// ordersSet.add('Basit');
// ordersSet.add('Basit');
// ordersSet.delete('Pizza');

// //ordersSet.clear(); //deletes all the elements from the set
// console.log(ordersSet.has('Pizza')); //checks if the element is in the set
// console.log(ordersSet.has('Basit'));

// //iteration in sets
// for (const order of ordersSet) {
//   console.log(order);
// }

// //example on sets to remove duplicates
// const temp = [1, 2, 3, 4, 4, 5, 5, 6, 1];

// const tempSet = new Set(temp);
// console.log(tempSet);

// //conversion of set to array
// const tempSetarray = [...new Set(temp)];
// console.log(tempSetarray);

// const rest = new Map(); //empty map

// rest.set('name', 'baba ji'); //mapname.set(KEY, VALUE)
// rest.set(1, 'lsibon');
// rest.set(2, [1, 2, 3, 4]);

// console.log(rest.set('nana', 'asas')); //returns the whole map

// //in order to add multiple key value pairs in one statement
// rest
//   .set('categories', ['tandoori', 'rajma', 'biryani'])
//   .set('open', 11)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// //.get is used to get value of that key
// console.log(rest.get(true));

// //check if the element is present
// console.log(rest.has(true));

// //delete
// // rest.delete(nana);
// console.log(rest);
// rest.delete('nana'); //nana deleted
// console.log(rest);

// //size of map
// console.log(rest.size);

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); //this will not work as it becomes diff array then the one we have in the map

// //so we store that arr first
// const arr = [1, 2];
// rest.set(arr, 'Test1');
// console.log(rest.get(arr));

// //maps iteration
// const question = new Map([
//   ['question', 'What is the best prog lang in the world?'],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'Correct 💥'],
//   [false, 'try again'],
// ]);

// console.log(question);

// //convert object to map
// const hoursMap = new Map(Object.entries(restaurant.openingHours));

// console.log(hoursMap);

// //iteration
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
// }

// const answer = Number(prompt('Your Answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// //strings
// const airline = 'Go Air India';
// const plane = 'A320';

// //get characters at certain position, (same as numbers)
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// //length
// console.log(airline.length);
// //methods
// console.log(airline.indexOf('i')); //if the cahr is not present, we get -1 (first index)
// console.log(airline.lastIndexOf('i')); //gives the last index
// console.log(airline.slice(4)); //at which the extraction happens(0 based indexing)
// console.log(airline.slice(3, 8)); //start and end parameneters given, does not include the end index

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// //extracting from tht end. use negative indexes
// console.log(airline.slice(-2));

//lower case and upper case
const str = 'HeLLoOOo';
const lowStr = str.toLowerCase();
const highStr = str.toUpperCase();

console.log(lowStr);
console.log(highStr);

//captilise
const correctCase = lowStr[0].toUpperCase() + lowStr.slice(1);
console.log(correctCase);

//trim
const loginEmail = '  BasIT1107@Gmail.com  \n';

const correctEmail = loginEmail.toLowerCase().trim();
console.log(correctEmail);

//replace
const priceG = '233,334€';
const priceUs = priceG.replace('€', '$').replace(',', '.');
console.log(priceUs);
const newStr = 'Hey I am Basit and I live in Kashmir';
const arrSplit = newStr.split(' ');

console.log(arrSplit);
