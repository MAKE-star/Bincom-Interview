let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

/*let image = document.getElementById('image');
let images = ['techme.jpg','certificate.jpg','class2.jpg','maths_career.jpg','conference.jpg','flex.jpg']
setInterval(function(){
    let random = Math.floor(Math.random() *6);
    image.src = images[random];
}, 800); */

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
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home.content , .heading', {origin : 'top'});
 ScrollReveal().reveal('.home.img ,service-container, .contact-form',{origin : 'bottom'});



 
 ScrollReveal().reveal('.home.content h1 , .about-img', {origin : 'left'});
 ScrollReveal().reveal('.home.content p, , .about-content',{origin : 'right'});