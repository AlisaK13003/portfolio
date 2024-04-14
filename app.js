const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector("main-content");

function PageTransitions() {
  for (let i = 0; i < secBtn.length; i++) {
    /* loops through all the buttons */
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.className = currentBtn.className.replace("active-btn", "");
      this.className += " active-btn";
    });
  }

  allSections.addEventListener("click", (e) =>{


  })
}


PageTransitions();
