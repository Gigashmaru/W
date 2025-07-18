// dark mode
let modeBtn = document.querySelector(".dark-mode");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "skip") {
    this.firstElementChild.src = "./images/sun.svg";
  } else {
    this.firstElementChild.src = "images/moon.svg";
  }
  document.body.classList.toggle("skip");
});
