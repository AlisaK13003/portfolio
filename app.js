const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

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
    const id = e.target.dataset.id;
    if (id){
      secBtns.forEach((btn) =>{
        btn.classList.remove('active')

      })
      e.target.classList.add('active')

      sections.forEach((section) =>{
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }

  })
}


PageTransitions();
