document.addEventListener("DOMContentLoaded", function (){
const menuToggle = document.querySelector(".menu-toggle");
const dropdownmenu = document.querySelector(".dropdown_menu");

menuToggle.addEventListener("click", function (){
    dropdownmenu.classList.toggle("active");
});
});