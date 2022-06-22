// Humburger menu
const humburger = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav-box");
const humburgerMenu = () => {
  nav.classList.toggle("toggle");
  humburger.classList.toggle("change-color");
  humburger.classList.toggle("fa-times");
  humburger.classList.toggle("fixed");
};
humburger.addEventListener("click", humburgerMenu);

// Button scroll top
const btnScrollTop = document.getElementById("btnScrollTop");
window.onscroll = () => {
  scrollFunction();
};
const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};
btnScrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
