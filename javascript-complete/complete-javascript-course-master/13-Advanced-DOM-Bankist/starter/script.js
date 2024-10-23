'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.getElementsByTagName('button'));
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality <button class="btn btn--close-cookie">Ok</button>';

const header = document.querySelector('.header');
// header.append(message);
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
// });

// console.log(getComputedStyle(message));

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const s1Cords = section1.getBoundingClientRect();

btnScrollTo.addEventListener('click', () => {
  // window.scrollTo(s1Cords.left + window.pageXOffset, s1Cords.top + window.pageYOffset);
  section1.scrollIntoView({
    behavior: "smooth"
  });
});

const h1 = document.querySelector('h1');
const eventFunction = (e)=>{
  alert("triggered");
  h1.removeEventListener('mouseenter', eventFunction);
}
h1.addEventListener('mouseenter', eventFunction)

document.querySelectorAll('.nav__link').forEach((el) => {
  el.addEventListener('click', () => {
    
  })
})

