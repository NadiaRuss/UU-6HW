// переходы по навигации по клику
let scroll = Array.from(document.querySelectorAll(".scroll-el"));
scroll.forEach(function (someEl) {
  someEl.addEventListener("click", function (i) {
    scroll.forEach((el) => {
      if (el != this) {
        el.classList.remove("scroll_active");
      }
    });
    this.classList.add("scroll_active");
  });
});

// переключение активного положения скролла на странице при прокрутке
let numbers = Array.from(document.querySelectorAll(".page-scroll"));
setInterval(() => {
  numbers.forEach((elem, i) => {
    const { top, bottom } = elem.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) {
      scroll[i].classList.add("scroll_active");
    } else {
      scroll[i].classList.remove("scroll_active");
    }
  });
}, 200);

// открытие всплывающего меню + запрет скролла
let menu = document.querySelector(".menu-link");
let popup = document.querySelector(".popup");
let overflow = document.querySelector(".popup-overflow");
let body = document.querySelector("body");

menu.addEventListener("click", () => {
  popup.classList.add("popup-active");
  menu.style.display = "none";
  overflow.style.display = "flex";
  body.style.overflow = "hidden";
});
// закрытие всплывающего меню
let popupClose = document.querySelector(".popup-close");

popupClose.addEventListener("click", () => {
  popup.classList.remove("popup-active");
  menu.style.display = "block";
  body.style.overflow = "visible";
  overflow.classList.remove("popup-active");
  overflow.style.display = "none";
});
// закрытие меню по клику на странице, не удалось исключить клик на сам попап
overflow.addEventListener("click", () => {
  popup.classList.remove("popup-active");
  menu.style.display = "block";
  overflow.classList.remove("popup-active");
  overflow.style.display = "none";
});
