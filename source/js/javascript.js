let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let header = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
header.classList.remove('page-header--opened');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    header.classList.add('page-header--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    header.classList.remove('page-header--opened');
  }
});
