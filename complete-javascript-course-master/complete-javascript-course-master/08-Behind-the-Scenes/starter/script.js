'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(firstName); //firstName will be accessible since it is in global scope.(varibale lookup) also satisfies scope chaining
  if (age == 25) {
    var special1 = 20;
    let notspecial = 10;
  }
  function printAge() {
    const output = `You are ${age} born in ${birthYear} and this is var accessible outside block ${special1}`; //this let will not be accessed outside block ${notspecial}
    console.log(output); //both age and birthYear accessible because of parent scope and scope chaining.
  }
  printAge();
  return age;
}

// console.log(age); //Age is function scoped and cannot is accessed outside the function

const firstName = 'Jonas'; //in global scope
calcAge(1998);
