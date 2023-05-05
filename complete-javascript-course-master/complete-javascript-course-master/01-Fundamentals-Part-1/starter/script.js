// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN");
// console.log(40 + 10 + 90 - 2);

// let firstName = "Basit";
// let lastName = "Manzoor";

// console.log(firstName);
// console.log(lastName);

// let PI = 3.1415;
// console.log(PI);

// let country = "India";
// let continent = "Asia";
// let population = 123450;

// console.log(country);
// console.log(continent);
// console.log(population);

// let checker = true; //boolean
// console.log(typeof checker); //will tell you the type of data type used

// console.log(typeof 23);
// console.log(typeof "Basit");

// checker = 23;
// console.log(checker);

// //undefined
// let undefinedCheck;

// console.log(typeof undefinedCheck);

// undefinedCheck = "basit";
// console.log(typeof null);

// //assignment data types
// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof language);

// let age = 30;
// age = 31; //mutating the variable, we use let

// //value in a const varaible cannot change
// const birthYear = 1998;
// // birthYear = 1999; not possible

// //var keyword to declare variables
// var job = "SDE";
// console.log(job);

// job = "SDE1";
// console.log(job);

//Basic Operators
// const presentYear = 2023;
// const age = presentYear - 1998;
// const ageSarah = presentYear - 1992;

// const diiv = 29 / 3;
// const mull = 3 * 3;
// const expo = 2 ** 3;

// console.log(presentYear, diiv, mull, expo);

// console.log(age, ageSarah);

// const firstName = "basit";
// const lastName = "manzoor";

// console.log(firstName + " " + lastName);

// console.log(age === ageSarah);

// //coding challenge 1
// let markHeight = 6;
// let markWeight = 79;

// let johnHeight = 5.7;
// let johnWeight = 83;

// const BMI = markWeight / markHeight ** 2;
// const BMI2 = johnWeight / johnHeight ** 2;

// let markHeigherBMI = BMI > BMI2;

// // if (BMI > BMI2) {
// //   markHeigherBMI = true;
// // } else {
// //   markHeigherBMI = false;
// // }

// console.log(BMI, BMI2, markHeigherBMI);

// //Strings and template literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1998;
// const year = 2039;

// const jonas =
//   "I am " +
//   firstName +
//   ", a " +
//   (year - birthYear) +
//   " years old " +
//   job +
//   " !";

// console.log(jonas);

// console.log(`this is a template literal string..`);
// console.log(`this is first line
// this is second line
// this is third line with some symbols in next line
// <> * $`);

// console.log((2 * 1) / 3 / 1);

// const age = 18;

// if (age > 18) {
//   console.log(`first condition`);
// } else if (age === 18) {
//   console.log(`second condition`);
// } else {
//   console.log(`third condition`);
// }

//coding challenge 2
// let markHeight = 6;
// let markWeight = 79;

// let johnHeight = 5.7;
// let johnWeight = 83;

// const BMI = markWeight / markHeight ** 2;
// const BMI2 = johnWeight / johnHeight ** 2;

// let markHeigherBMI;

// if (BMI > BMI2) {
//   markHeigherBMI = true;
// } else {
//   markHeigherBMI = false;
// }

// console.log(BMI, BMI2, markHeigherBMI);

//type conversion

// const thisYear = "1992"; //as a string

// console.log(Number(thisYear), thisYear); //first output as a number

// console.log(Number(thisYear) + 8); // to add a number

// console.log(Number("basit")); //cannot convert as the string does not have number
// //number to a string

// console.log(String(123));

// //type coercion
// // conversion done by javascript

// console.log("I am" + 23 + "years old"); //here number in between was converted to string

// console.log("23" - 10 - "3");

// let n = "1" + 1; //here it will become a string as '11'

// n = n - 1; //here 11 will act as number and ans will be 11 - 1 = 10

// console.log(n); //10 will be printed

//Truthy and Falsy Values

//falsy values 5 :-> 0, '', null, undefined, NaN
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// //everything else is thruthy values
// console.log(Boolean(1));
// console.log(Boolean(2));
// console.log(Boolean("assa"));

// //example of falsy value

// let salary = 0;

// if (salary) {
//   console.log(`You do not need a job`);
// } else {
//   console.log(`you sould get a job as your salary is 0`);
// }

// //example of truthy values

// let salary2 = 100;

// if (salary2) {
//   console.log(`You do not need a job`);
// } else {
//   console.log(`you sould get a job as your salary is 0`);
// }

// //another example of falsy values as undefined

// let currSal; //undefined value
// if (currSal) {
//   console.log(`Defined current salary`);
// } else {
//   console.log(`Undefined current salary`);
// }

//prompt function

// const fav = prompt("whats your favourite window");
// console.log(fav);

//coding challenge 3
// const dolphinS1 = 96;
// const dolphinS2 = 108;
// const dolphinS3 = 89;

// const avgDolphin = (dolphinS1 + dolphinS2 + dolphinS3) / 3;

// const koalasS1 = 188;
// const koalasS2 = 91;
// const koalasS3 = 110;

// const avgKoalas = (koalasS1 + koalasS2 + koalasS3) / 3;

// if (avgDolphin > avgKoalas && avgDolphin >= 100) {
//   console.log(`Dolphin team wins`);
// } else if (avgDolphin === avgKoalas && avgDolphin >= 100) {
//   console.log(`Draw`);
// } else if (avgKoalas > avgDolphin && avgKoalas >= 100) {
//   console.log(`Koalas team wins`);
// } else {
//   console.log(`No team won`);
// }
