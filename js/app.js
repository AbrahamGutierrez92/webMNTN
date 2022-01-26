const openMenuIcon = document.getElementById('menu-toggle-open');
const closeMenuIcon = document.getElementById('menu-toggle-close');
const mobileMenu = document.getElementById('mobile-menu');
const headerOverlay = document.getElementById('header');

const grassImage = document.getElementById("grassland");
const skyImage = document.getElementById("sky");
const mountainsImage = document.getElementById("mountains");
const heroData = document.getElementById('hero-data');

openMenuIcon.addEventListener('click', () =>{
    mobileMenu.classList.add('menu-opened');
    headerOverlay.classList.add('menu-opened');
});
closeMenuIcon.addEventListener('click', () =>{
    mobileMenu.classList.remove('menu-opened');
    headerOverlay.classList.remove('menu-opened');
});

window.addEventListener('scroll', ()=>{
   let scrollPosotion = window.scrollY;

   grassImage.style.transform = "translateY(" + scrollPosotion * 0.02 + "%)";
   mountainsImage.style.transform = "translateY(" + scrollPosotion * 0.04 + "%)";
   skyImage.style.transform = "translateY(" + scrollPosotion * 0.01 + "%)";
   heroData.style.transform = "translateY(" + scrollPosotion * 0.03 + "%)";
   heroData.style.opacity = 1 - scrollPosotion * 0.002;
});
