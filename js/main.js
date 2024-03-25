var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
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

var newsSwiper = new Swiper(".news-slider", {
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
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

var sliderSwiper = new Swiper(".Slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Control About/Investors Section
let tabToggler = document.querySelectorAll("#about-us .about-investor");

tabToggler.forEach((tab) => {
  tab.addEventListener("click", handleActiveNews);
  tab.addEventListener("click", (e) => {
    let sectionHead = document.querySelector("#about-us .about-investor-head");
    sectionHead.textContent = e.target.textContent;
  });
});

// Handle Active State
function handleActiveNews() {
  tabToggler.forEach((tab) => {
    tab.classList.remove("active");
    this.classList.add("active");
  });
}

// Control News Section
let mainImg = document.querySelector("#news .img-holder img");

let mainTitle = document.querySelector("#news h2.news-headline");

let mainText = document.querySelector("#news .main-text");

let cards = document.querySelectorAll("#news .news-card");

cards.forEach((card) => {
  card.addEventListener("click", handleActiveCards);
  card.addEventListener("click", () => {
    let cardImg = card.querySelector("img");
    mainImg.src = cardImg.src;
    let cardTitle = card.querySelector("h6").textContent;
    mainTitle.textContent = cardTitle;
    let cardText = card.querySelector("p").textContent;
    mainText.textContent = cardText;
  });
});

// Handle Active State
function handleActiveCards() {
  cards.forEach((card) => {
    card.classList.remove("active");
    this.classList.add("active");
  });
}

let docTitle = document.querySelector("title");
let navLinks = document.querySelectorAll(".navbar .navbar-nav .nav-item .nav-link");
navLinks.forEach((nav) => {
  if (nav.classList.contains("active") === true) {
    docTitle.textContent = `${docTitle.textContent} | ${nav.textContent}`;
  } else {
    docTitle.textContent = docTitle.textContent;
  }
});

// Vertical Slider Rules
// Get Slider Items
var sliderCards = Array.from(
  document.querySelectorAll(".vertical-slider-container .vertical-slider-card")
);

// Get Number Of Slides
var slidesCount = sliderCards.length;

// Set Curret Slide
var currentSlide = 1;

// Previous And Next Buttons
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

// Handle Click On Next And Previous Buttons
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// Create Main Ul Element
var paginationEle = document.createElement("ul");

// Set Id To Ul
paginationEle.setAttribute("id", "pagination-ul");

// Create Li Depend On Slide Numbers
for (var i = 1; i <= slidesCount; i++) {
  // Create Li Item
  var paginationItems = document.createElement("li");

  // Set Custom Attribute On Li
  paginationItems.setAttribute("data-index", i);

  // Append Li Items To The Parent
  paginationEle.appendChild(paginationItems);
}

// Add UL Element To The Body
document.getElementById("indicators").appendChild(paginationEle);

// Get The Created UL Element
var pagUL = document.getElementById("pagination-ul");

// Get Pagination Items
var pagBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop On pagination Bullets
for (var i = 0; i < pagBullets.length; i++) {
  pagBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

// Trigger The Checker Function
checker();

// Next Function
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}

// Previous Function
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}

// Create The checker Function
function checker() {
  // Remove Active Class
  removeAllAcitve();

  // Set Active Class On The Current Slide
  sliderCards[currentSlide - 1].classList.add("active");

  // Set Active Class On Li
  pagUL.children[currentSlide - 1].classList.add("active");
}

function removeAllAcitve() {
  // Loop On Images
  sliderCards.forEach(function (card) {
    card.classList.remove("active");
  });
  // Loop On Li
  pagBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
