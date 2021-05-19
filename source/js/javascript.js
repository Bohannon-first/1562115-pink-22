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
const requiredInputs = document.querySelectorAll(".form__input--required");

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
  document.body.style.overflow = 'hidden';
  } else {
    if (isStorageSupport) {
      localStorage.setItem("surname", surnameUser.value) && ("name", nameUser.value) && ("email", emailUser.value);
      modalSend.classList.add("modal-show"); // Окно об отправке формы
      document.body.style.overflow = 'hidden';
    }
  }
});

// Проверка наличия незаполненных полей с присвоением красной обводки
formSend.addEventListener("submit", function() {
  for (let requiredInput of requiredInputs) {
    if (requiredInput.value == "") {
      requiredInput.classList.add("form__input--error");
    }
  }
});

// Удаление красных полей ввода при наборе текста
for (let requiredInput of requiredInputs) {
  requiredInput.onchange = function () {
    if (requiredInput.classList.contains("form__input--error")) {
      requiredInput.classList.remove("form__input--error");
    }
  }
};

// Закрытие модального окна об отправке формы
btnCloseSend.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSend.classList.remove("modal-show");
  document.body.style.overflow = "visible";
});

// Закрытие модального окна об ошибке
btnCloseError.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalError.classList.remove("modal-show");
  document.body.style.overflow = "visible";
});

// Закрытие модальных окон кнопкой Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalSend.classList.contains("modal-show") || modalError.classList.contains("modal-show")) {
      evt.preventDefault();
      modalSend.classList.remove("modal-show");
      modalError.classList.remove("modal-show");
      document.body.style.overflow = "visible";
    }
  }
});
