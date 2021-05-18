// Бургерное меню
let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let header = document.querySelector(".page-header");

navMain.classList.remove("main-nav--nojs");
header.classList.remove("page-header--opened");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    header.classList.add("page-header--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    header.classList.remove("page-header--opened");
  }
});

// Переменные
const formSend = document.querySelector(".form__user-form");
const modalError = document.querySelector(".modal--error");
const modalSend = document.querySelector(".modal--send");
const btnCloseSend = modalSend.querySelector(".button--close-send");
const btnCloseError = modalError.querySelector(".button--close-error");
const surnameUser = document.querySelector("[name=surname]");
const nameUser = document.querySelector("[name=name]");
const emailUser = document.querySelector("[name=email]");
const inputError = document.querySelector(".form__input--error");

// Проверка есть ли в браузере поддержка localStorage
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("surname");
} catch (error) {
  isStorageSupport = false;
}

// Появление модальных окон и запись в localStorage данных пользователя
formSend.addEventListener("submit", function (evt) {
  if (!surnameUser.value || !nameUser.value || !emailUser.value) {
  evt.preventDefault();
  modalError.classList.add("modal-show"); // Окно об ошибке
  } else {
    if (isStorageSupport) {
      localStorage.setItem("surname", surnameUser.value) && ("name", nameUser.value) && ("email", emailUser.value);
      modalSend.classList.add("modal-show"); // Окно об отправке формы
    }
  }
});

// Проверка наличия незаполненных полей
formSend.addEventListener("submit", function() {
  if (surnameUser.value == "") {
    surnameUser.classList.add("form__input--error");
  }
});

formSend.addEventListener("submit", function () {
  if (nameUser.value == "") {
    nameUser.classList.add("form__input--error");
  }
});

formSend.addEventListener("submit", function () {
  if(emailUser.value == "") {
    emailUser.classList.add("form__input--error");
  }
});

// Закрытие модального окна об отправке формы
btnCloseSend.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSend.classList.remove("modal-show");
});

// Закрытие модального окна об ошибке
btnCloseError.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalError.classList.remove("modal-show");
  surnameUser.classList.remove("form__input--error");
  nameUser.classList.remove("form__input--error");
  emailUser.classList.remove("form__input--error");
});

// Закрытие модальных окон кнопкой Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalSend.classList.contains("modal-show") || modalError.classList.contains("modal-show")) {
      evt.preventDefault();
      modalSend.classList.remove("modal-show");
      modalError.classList.remove("modal-show");
      surnameUser.classList.remove("form__input--error");
      nameUser.classList.remove("form__input--error");
      emailUser.classList.remove("form__input--error");
    }
  }
});
