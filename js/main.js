function docTitle() {
  let docTitle = document.querySelector("title");
let navLinks = document.querySelectorAll(".navbar .navbar-nav .nav-item a.nav-link");
navLinks.forEach((nav) => {
  if (nav.classList.contains("active") === true) {
    docTitle.textContent = `${docTitle.textContent} | ${nav.textContent}`;
  } else {
    docTitle.textContent = docTitle.textContent;
  }
});
}

function searchIcon() {
  let searchIcon = document.getElementById("search-icon");
  searchIcon.addEventListener("click", () => {
    let overlay = document.querySelector("div.search-bar-overlay");
    overlay.style.display = "block";

    let closeBtn = document.querySelector("i.close-btn");
    // Add Event Click On Span To Close

    closeBtn.onclick = function () {
      overlay.style.display = "none";
    };
  });
}

docTitle()
searchIcon()
newsHandler()
investorAbout()

// selecting required element
const ulPagination = document.querySelector("ul.pagination");
let totalPages = 5;
let page = 1;
//calling function with passing parameters and adding inside element which is ul tag
ulPagination.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //show the next button if the page value is greater than 1
    liTag += `<li class="page-item" onclick="createPagination(totalPages, ${page - 1})"><a class="page-link" href="#"><i class="fas fa-angle-left"></i> Prev</a></li>`;
  }

  if(page > 2){ //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="page-item" onclick="createPagination(totalPages, 1)"><a class="page-link" href="#">1</a></li>`;
    if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="page-item"><a class="page-link">...</a></li>`;
    }
  }

  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if(page == plength){ //if page is equal to plength than assign active string in the active variable
      active = "active";
    }else{ //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="page-item ${active}" onclick="createPagination(totalPages, ${plength})"><a class="page-link" href="#">${plength}</a></li>`;
  }

  if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
    if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="page-item"><a class="page-link" href="#">...</a></li>`;
    }
    liTag += `<li class="page-item last" onclick="createPagination(totalPages, ${totalPages})"><a class="page-link" href="#">${totalPages}</a></li>`;
  }

  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="page-item" onclick="createPagination(totalPages, ${page + 1})"><a class="page-link" href="#">Next <i class="fas fa-angle-right"></i></a></li>`;
  }
  ulPagination.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}

function investorAbout() {
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
}

function newsHandler() {
  // Control News Section
  let mainImg = document.querySelector("#news .img-holder img");

  let mainTitle = document.querySelector("#news h2.news-headline");

  let mainText = document.querySelector("#news .main-text");

  let cards = document.querySelectorAll("#news .main-card");

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
}