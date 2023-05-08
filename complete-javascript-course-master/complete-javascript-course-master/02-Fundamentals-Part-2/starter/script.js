"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`i can drive`);

// const interface = "Audio"; //reserves interface keyword

// const private = "salary"; //unexpected strict mode reserved word

//functions
// a piece of code that can be used multiple times

// function helper() {
//   console.log("My name is Basit");
// }

// //calling/running/invoking a function
// helper();
// helper();
// helper();

// function fruitProcessor(apples, oranges) {
//   //contains parameters
//   //console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// //calling foodprocessor

// // fruitProcessor(5, 0); //arguments

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

//function for calculating age
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// const ans1 = calcAge1(1998); //calling function having arguments int it

// console.log(ans1);

// //anonymous function
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const ans2 = calcAge2(1991);

// console.log(ans2);

//Arrow Function
//Shorter and faster to write

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// //arrow function syntax
// const calAge3 = (birthYear) => 2023 - birthYear; //store in variable calAge

// const age = calAge3(1998);

// console.log(age);

// const yearsUntilRetire = (birthYear) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilRetire(1996));

//functions calling other functions

//to cut into pieces
// function cutFruit(fruit) {
//   return fruit * 4;
// }
// //to make juice
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruit(apples); //calling other function
//   const orangePieces = cutFruit(oranges); //calling other function

//   const juice = `Juice with ${apples} apples of ${applePieces} pieces and ${oranges} oranges of ${orangePieces} pieces`;
//   return juice;
// }

// const ans = fruitProcessor(2, 3);
// console.log(ans);

//Coding challenge 1

// const calAvg = (score1, score2, score3) => {
//   return (score1, score2, score3) / 3;
// };

// const dolphinsAvg = calAvg(44, 23, 71);
// const koalasAvg = calAvg(65, 54, 49);

// function checkWinner(dolphinsAvg, koalasAvg) {
//   if (dolphinsAvg > koalasAvg) {
//     return `Dolphins win`;
//   } else {
//     return `Koalas win`;
//   }
// }

// const ans = checkWinner(dolphinsAvg, koalasAvg);
// console.log(ans);

// //Arrays Data Structure
// const friends = ["Basit", "Danish", "Abbas", "Annus"];

// console.log(friends);
// console.log(friends[0]); //with 0 based indexing, it will print first element of array

// //other way to make an array
// const age = new Array(19, 29, 23, 41);

// console.log(age[2]); //printing third element of array age
// console.log(age.length); //in order to calculate length or size of the array

// console.log(age[age.length - 1]); //in order to access last element of the array
// friends[2] = "Drake"; //changing the elements of the array
// console.log(friends);
// //Array is not a primitive data type, so we can mutate array even though it was declared as const. but we cant change the entire array

// const basit = ["Basit", "Manzoor", 2023 - 1998, friends];
// console.log(basit);

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// const years = [1990, 1991, 1992, 1993];
// console.log(calcAge(years[3]));

//array methods or operations

// const friends = ["Basit", "Steven", "Raj"];

// //add at last
// friends.push("Kumar");

// //add at beginning
// friends.unshift("khan");

// console.log(friends);

// //remove at last
// friends.pop();

// //remove at start
// friends.shift();

// console.log(friends);

// //check the index of element
// console.log(friends.indexOf("Raj"));
// console.log(friends.indexOf("nana")); //will return -1 since no such element is present

// //check if the element is present in the array
// console.log(friends.includes("Raj")); //true since present
// console.log(friends.includes("nana")); //false since not present

//coding challenge 2

// function calcTip(bill) {
//   let tip;
//   if (bill > 50 && bill < 300) {
//     tip = (15 / 100) * bill;
//   } else {
//     tip = (20 / 100) * bill;
//   }
//   return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(total);
