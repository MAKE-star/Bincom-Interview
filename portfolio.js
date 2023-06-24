window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = Array.from(carouselSlide.querySelectorAll('img'));

const slideWidth = carouselImages[0].clientWidth;

let counter = 0;
const intervalTime = 5000; // Interval time in milliseconds (5 seconds)
let slideInterval;

function shuffleImages() {
  for (let i = carouselImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [carouselImages[i], carouselImages[j]] = [carouselImages[j], carouselImages[i]];
  }
}

function startSlide() {
  shuffleImages();
  slideInterval = setInterval(() => {
    counter++;
    if (counter >= carouselImages.length) {
      counter = 0;
      shuffleImages();
    }
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }, intervalTime);
}

function stopSlide() {
  clearInterval(slideInterval);
}

carouselSlide.addEventListener('mouseenter', stopSlide);
carouselSlide.addEventListener('mouseleave', startSlide);

startSlide();

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.remove('active');
};

ScrollReveal({ 
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home.content , .heading', {origin : 'top'});
 ScrollReveal().reveal('.home.img ,service-container, .contact-form',{origin : 'bottom'});



 
 ScrollReveal().reveal('.home.content h1 , .carousel-container', {origin : 'left'});
 ScrollReveal().reveal('.home.content p, , .about-content',{origin : 'right'});

 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Blockchain Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });