/* Start projects section */
let listProjects = document.querySelectorAll(".shuffle li");
let listProjectsArray = Array.from(listProjects);

let imageProjects = document.querySelectorAll(".images-container>div");
let imageProjectsArray = Array.from(imageProjects);

function remove_active() {
  listProjectsArray.forEach((ele) => {
    ele.classList.remove("active");
  });
}

function remove_image() {
  console.log("test");
  imageProjectsArray.forEach((ele) => {
    ele.style.display = "none";
  });
}

listProjectsArray.forEach((ele) => {
  ele.addEventListener("click", remove_active);
  ele.addEventListener("click", remove_image);
  ele.addEventListener("click", function () {
    this.classList.add("active");
  });
  ele.addEventListener("click", function () {
    imageProjectsArray.forEach((e) => {
      if (e.classList.contains(ele.dataset.text)) {
        e.style.display = "block";
      }
    });
  });
});

/* End projects section */

/* Start Customer section */

/* Start Customer section */

/* Start Questions section */

let showDetailsButton = document.querySelectorAll(".question-text span");
let showDetailsButtonArray = Array.from(showDetailsButton);

let details = document.querySelectorAll(".question .details");
let detailsArray = Array.from(details);

showDetailsButtonArray.map((item, index) => {
  item.addEventListener("click", () => {
    item.innerHTML == "+"
      ? showDetailsButton(item, index)
      : hiddenDetailsButton(item, index);
  });
});
showDetailsButton = (Button, number) => {
  detailsArray[number].style.display = "block";
  Button.innerHTML = "-";
  Button.style.background = "#0F7AD3";
  Button.style.color = "White";
};
hiddenDetailsButton = (Button, number) => {
  detailsArray[number].style.display = "none";
  Button.innerHTML = "+";
  Button.style.background = "#F7F7FF";
  Button.style.color = "#6F6C90";
};

/* Start Questions section */
 // Initialize Swiper
/* var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});