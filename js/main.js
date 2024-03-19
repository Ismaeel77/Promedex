var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  mousewheel: true,
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
  grabCursor: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  mousewheel: true,
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

// Control About/Investors Section
let tabToggler = document.querySelectorAll("#about-us .about-investor")

tabToggler.forEach((tab) => {

  tab.addEventListener("click", handleActiveNews)
  tab.addEventListener("click", (e) => {
    let sectionHead = document.querySelector("#about-us .about-investor-head");
    sectionHead.textContent = e.target.textContent;
  })
})

// Handle Active State 
function handleActiveNews () {
  tabToggler.forEach((tab) => {
    tab.classList.remove("active")
    this.classList.add("active");
  })
}

// Control News Section
let mainImg = document.querySelector("#news .img-holder img");

let mainTitle = document.querySelector("#news h2.news-headline");

let mainText = document.querySelector("#news .main-text");

let cards = document.querySelectorAll("#news .news-card");


cards.forEach((card) => {
  card.addEventListener("click", handleActiveCards)
  card.addEventListener("click", () => {
    let cardImg = card.querySelector("img");
    mainImg.src = cardImg.src;
    let cardTitle = card.querySelector("h6").textContent;
    mainTitle.textContent = cardTitle
    let cardText = card.querySelector("p").textContent;
    mainText.textContent = cardText;
  });
});


// Handle Active State 
function handleActiveCards () {
  cards.forEach((card) => {
    card.classList.remove("active")
    this.classList.add("active");
  })
}

let docTitle = document.querySelector("title")
let navLinks = document.querySelectorAll(".navbar .navbar-nav .nav-item .nav-link")
navLinks.forEach((nav) => {
  if(nav.classList.contains("active") === true){
    docTitle.textContent = `${docTitle.textContent} | ${nav.textContent}`
  } else {
    docTitle.textContent = docTitle.textContent;
  }
})