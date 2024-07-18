const navbarMenu = document.querySelector(".navbar .links");
const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = document.querySelector(".close-btn");

//show from popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
})

//hide from popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

//show mobile menu
menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
})

//hide mobile menu
hideMenuBtn.addEventListener("click", () => {
    menuBtn.click();
})