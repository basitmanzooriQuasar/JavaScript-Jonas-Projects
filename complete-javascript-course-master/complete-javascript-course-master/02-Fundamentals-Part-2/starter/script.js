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
