'use strict';

///////////////////////////////////////
// Modal window

//Selecting Modal using DOM query Selector
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//function where we remove our hidden class from CSS
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function where we add the hidden class in CSS
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//opening modal on button click for all buttons
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
//closing the modal while clicking on cross button
btnCloseModal.addEventListener('click', closeModal);
//closing the modal while clicking on overlay
overlay.addEventListener('click', closeModal);

//closing modal while pressing Escape key.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//selecting

const header = document.querySelector('.header');
//creating a cookie message
const message = document.createElement('div');

message.classList.add('cookie-message'); //adding class css
message.innerHTML =
  'This is cookies to keep track of your preferences <button class="btn btn-cookie">Got it!</button>';

//inserting
header.append(message);

//deleting
document.querySelector('.btn-cookie').addEventListener('click', function () {
  message.remove();
});

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '100%';

//smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const sectionOp = document.querySelector('#section--2');
btnScrollTo.addEventListener('click', function (e) {
  // const s1Cords = section1.getBoundingClientRect();
  sectionOp.scrollIntoView({ behavior: 'smooth' });
});

// //adding and deleting Event listener after it is hovered
// const h1 = document.querySelector('h1');

// const h1alert = function (e) {
//   alert('This is an EventListener and you hovered on heading 1');

//   h1.removeEventListener('mouseover', h1alert);
// };
// h1.addEventListener('mouseover', h1alert);

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//event delegation
//1. Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
