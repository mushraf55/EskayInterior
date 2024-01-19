const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100) {
  toTop.classList.add("active");
  } else 
  toTop.classList.remove("active");

})

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-elements");
  navBar.classList.toggle("active");
};
