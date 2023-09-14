const navbar = document.querySelector(".nav");
const hamburger = document.querySelector(".nav__open");
const closeButton = document.querySelector(".nav__close");
const navLinksContainer = document.querySelector(".nav__links-container");
const navLinks = document.querySelectorAll(".nav__links li a");
const productivityContainer = document.querySelector(".productivity__content");
const productivity1 = document.querySelector(".productivity__content--1");
const productivity2 = document.querySelector(".productivity__content--2");
const productivityBtnWith = document.querySelectorAll(".productivity__btn--1");
const productivityBtnWithout = document.querySelectorAll(".productivity__btn--2");
// navbar toggle
hamburger.addEventListener("click", ()=>{
    navLinksContainer.style.right = 0;
});
closeButton.addEventListener("click", ()=>{
    navLinksContainer.style.right = "-100%";
});
navLinks.forEach((link)=>link.addEventListener("click", ()=>navLinksContainer.style.right = "-100%"));
// scroll event to add background color to the navbar
window.addEventListener("scroll", ()=>{
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight >= navHeight) navbar.style.backgroundColor = "#0d121f";
    else navbar.style.backgroundColor = "transparent";
});

//# sourceMappingURL=index.72a83a3b.js.map
