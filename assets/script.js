const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const slideWrap = $(".slider-wrapper");
const slideList = $(".slider-list");
const slides = Array.from($$(".slider"));
const leftBtn = $(".slider-control__btn--left");
const rightBtn = $(".slider-control__btn--right");
const slideItemWidth = slides[0].offsetWidth;
const slidesLength = slides.length;
const slideDots = $$(".content-advantage__slide-button");
const advantageSlides = $$(".content-advantage__slide");
const advantageSlideList = $(".content-advantage__slide-list");
const advantageSlideWidth = advantageSlides[0].offsetWidth;
const navBtn = $(".header__navbar-btn");
const nav = $(".header__navbar");
let positionX = 0;
let index = 0;

leftBtn.addEventListener("click", function (e) {
  handleChangeSlide(-1);
});
rightBtn.addEventListener("click", function (e) {
  handleChangeSlide(1);
});
function handleChangeSlide(direction) {
  if (direction === 1) {
    if (index >= slidesLength - 1) {
      index = slidesLength - 1;
      return;
    }
    positionX = positionX - slideItemWidth;
    slideList.style = `transform : translateX(${positionX}px)`;
    index++;
  } else if (direction === -1) {
    if (index <= 0) {
      index = 0;
      return;
    }
    positionX = positionX + slideItemWidth;
    slideList.style = `transform : translateX(${positionX}px)`;
    index--;
  }
}

slideDots.forEach((slideDot, index) =>
  slideDot.addEventListener("click", function (e) {
    $(".content-advantage__slide-button.active").classList.remove("active");
    this.classList.add("active");
    advantageSlideList.style = `transform: translateX(-${
      index * advantageSlideWidth
    }px)`;
  })
);

if (window.innerWidth < 1024) {
  nav.style.display = "none";
  navBtn.addEventListener("click", function (e) {
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  });
}

// navBtn.addEventListener("click", function (e) {});
