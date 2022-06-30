const navToggle = document.querySelector(".btn-mobile")
const links = document.querySelector(".menu")

navToggle.addEventListener("click", function(){
  links.classList.toggle("ativo")
});