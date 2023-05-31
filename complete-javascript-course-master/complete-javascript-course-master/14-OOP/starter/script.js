'use strict';

//constructor function
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

//basit and jonas becomes the objects(or we can call them instances)
const basit = new Person('Basit', 1998);
const jonas = new Person('Jonas', 1991);
console.log(basit);
console.log(jonas);
//What happens behind the scenes when we call a constructor function
//1. new {} empty object is created
//2. function is called, this refers to {}
//3. {} linked to prototype
//4. function automatically returns {}

//Prototypes

// //contest 1
// const Car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// };

// Car.prototype.accelarate = function () {
//   this.speed += 10;
//   console.log(`${this.name} is running at ${this.speed}km/hr`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.name} is running at ${this.speed}km/hr`);
// };
// const honda = new Car('Verna', 120);
// const maruti = new Car('Suzuki', 80);

// honda.accelarate();
// honda.accelarate();
// maruti.accelarate();
// honda.brake();
// honda.brake();
// maruti.brake();
