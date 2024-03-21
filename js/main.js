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

var partnerSwiper = new Swiper(".partners-slider", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  mousewheel: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
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
let navLinks = document.querySelectorAll(
  ".navbar .navbar-nav .nav-item .nav-link"
);
navLinks.forEach((nav) => {
  if (nav.classList.contains("active") === true) {
    docTitle.textContent = `${docTitle.textContent} | ${nav.textContent}`;
  } else {
    docTitle.textContent = docTitle.textContent;
  }
});

// Show More Questions
const moreBtn = document.querySelector("#faq .questions-container .more-btn");
const questionsSection = document.querySelector("#faq .questions-container");

moreBtn.addEventListener("click", () => {
  // Create Question Container Div
  let queDiv = document.createElement("div");
  queDiv.setAttribute("class", "question mb-5");
  // Create Question P
  let quesP = document.createElement("p");
  quesP.setAttribute("class", "ques");
  // Create Question Number Span
  let quesSpan = document.createElement("span");
  quesSpan.setAttribute("class", "ques-num");
  quesP.appendChild(quesSpan);
  quesP.textContent = "what's your favourite product and why?";
  // Create Answer Span
  let spanAnswer = document.createElement("span");
  spanAnswer.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi harum illum animi quaerat dicta sequi, sint laborum dolornisi harum illum animi quaerat dicta sequi.";
  queDiv.appendChild(quesP);
  queDiv.appendChild(spanAnswer);
  questionsSection.removeChild(moreBtn);
  questionsSection.appendChild(queDiv)
  questionsSection.appendChild(moreBtn);
});

// FAQ Section Numbering Questions
let questions = document.querySelectorAll("#faq .question");
for (let i = 0; i < questions.length; i++) {
  let quesNum = document.querySelectorAll("span.ques-num");
  quesNum[i].textContent = `Q${i}: `;
}
