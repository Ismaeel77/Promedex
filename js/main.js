var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  centerSlide: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".news-slider", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: false,
  grabCursor: true,
  centerSlide: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".Slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Control News Section
let mainImg = document.querySelector("#news .img-holder img");

let mainTitle = document.querySelector("#news h2.news-headline");

let mainText = document.querySelector("#news .main-text");

let cards = document.querySelectorAll("#news .news-card");


cards.forEach((card) => {
  card.addEventListener("click", () => {
    let cardImg = card.querySelector("img");
    mainImg.src = cardImg.src;
    let cardTitle = card.querySelector("h6").textContent;
    mainTitle.textContent = cardTitle
    let cardText = card.querySelector("p").textContent;
    mainText.textContent = cardText;
  });
});
