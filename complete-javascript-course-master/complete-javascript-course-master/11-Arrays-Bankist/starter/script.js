'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Basit Manzoor',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //.textContent = 0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

//calculating balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

//calculating summary, income, withdrawal, interest
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const calcOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((accu, mov) => accu + Math.abs(mov), 0);
  labelSumOut.textContent = `${calcOut}€`;

  const interestCheck = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((int, i, array) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interestCheck}€`;
};
// calcDisplaySummary(account1.movements);

//computing username
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);

const updateUI = function (acc) {
  //DISPLAY movements
  displayMovements(acc.movements);
  //DISPLAY balance
  calcDisplayBalance(acc);
  //DISPLAY summary
  calcDisplaySummary(acc);
};

//Event Handlers

//current account
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //DISPLAY UI AND WELCOME MESSAGE
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //update UI
    updateUI(currentAccount);
  }
});

//transfers

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
});

//loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount / 10)
  ) {
    currentAccount.movements.push(loanAmount);

    //update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

//close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const confirmPin = Number(inputClosePin.value);
  const confirmUser = inputCloseUsername.value;
  if (
    confirmUser === currentAccount.username &&
    confirmPin === currentAccount.pin
  ) {
    //finds the index
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //delete account
    accounts.splice(index, 1);

    // //DISPLAY UI AND WELCOME MESSAGE
    labelWelcome.textContent = `Successfully deleted account of, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// //forEach loop
// movements.forEach(function (ele) {
//   if (ele > 0) {
//     console.log(`less ele is ${ele}`);
//   } else {
//     console.log(Math.abs(ele));
//   }
// });

// //in order to access index values in forEach method
// movements.forEach(function (currElement, index, array) {
//   console.log(`Movement ${index}: ${currElement} of array ${array}`);
// });
// //(currentelement, index, array) forEach order of parameters

// //forEach for maps and sets
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} is key of value ${value} in map ${map}`);
// });

// //for sets
// const A = new Set(['a', 'b', 'c']);

// A.forEach(function (value, _, set) {
//   console.log(`${value} of map ${set}`);
// });
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const conv = 82.82;

// const movementsUSD = movements.map(function (mov) {
//   return mov * conv;
// });

// console.log(movements);
// console.log(movementsUSD);
// const depo = movements.filter(mov => mov > 0);

// console.log(depo);

// //accumulator is like snowball
// const reduceArr = movements.reduce((accum, curr) => accum + curr, 0);
// console.log(reduceArr);

// const max = movements.reduce((acc, mov) => Math.max(acc, mov), movements[0]);
// console.log(max);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//filter deposits
//convert to USD
//calc total balance using method chaining

// const bal = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 2)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(bal);

// //find method
// const storeAns = movements.find(mov => mov < 0);
// console.log(storeAns);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
