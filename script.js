// spotlight scroll*****************

const scrollbtn = function () {
  let container = document.getElementsByClassName("backimg")[0];
  container.scrollLeft -= container.clientWidth;

  document.querySelector(".line1").classList.add("active");
  document.querySelector(".line2").classList.remove("active");
};

const scrollRight = function () {
  let container = document.getElementsByClassName("backimg")[0];
  container.scrollLeft += container.clientWidth;

  document.querySelector(".line1").classList.remove("active");
  document.querySelector(".line2").classList.add("active");
};

// spotlight scroll end ************

// arrival section scroll ****************

let currentIndex = 0;
const itemsToShow = 4;

function slideLeft() {
  const container = document.querySelector("#arrival .sub_container");
  if (currentIndex - itemsToShow >= 0) {
    currentIndex -= itemsToShow;
    container.style.transform = `translateX(-${currentIndex * 25}%)`;
  }
}

function slideRight() {
  const container = document.querySelector("#arrival .sub_container");
  const boxes = document.querySelectorAll("#arrival .sub_container .box");
  if (currentIndex + itemsToShow < boxes.length) {
    currentIndex += itemsToShow;
    container.style.transform = `translateX(-${currentIndex * 25}%)`;
  }
}

// arrival section scroll end ****************
// limelight like button ******************

document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll("#limelight .like");

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector("i");
      icon.classList.toggle("active");
    });
  });
});

// limelight like button end ******************
// women page cart section *************

document.querySelectorAll(".size_btn").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".size_btn")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

//  women page cart section end ***********
// color available section *****************

const buttons = document.querySelectorAll(".clr_circle button");

button.addEventListener("blur", () => {
  buttons.forEach((button) => {
    button.style.outline = "2px solid transparent";
  });
});

// color available section ended ********************
