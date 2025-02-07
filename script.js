// TYPED JS
var typed = new Typed('.text', {
    strings: ['Software Developer', 'UI/UX Explorer', 'Creative Developer', 'Tech Enthusiast', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

// scroll
document.addEventListener('DOMContentLoaded', function() {
    const aboutContainer = document.querySelector('.about_container');
    const headings = document.querySelectorAll('.headings');
    
  
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Check if the element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5 
    });
  
    observer.observe(aboutContainer);
    headings.forEach(heading => observer.observe(heading));
  });

// SHOW EDUCATION & EXPERIENCE
let EducationBtn = document.querySelector('.education');
let ExperienceBtn = document.querySelector('.experience');
let show_box = document.querySelectorAll('.show_box');
let hide_box = document.querySelectorAll('.hide_box');

EducationBtn.addEventListener('click', () => {
    show_box.forEach(Sbox => {
        Sbox.style.opacity = '0';
    });
    hide_box.forEach(Hbox => {
        Hbox.style.opacity = '1';
    });
});

ExperienceBtn.addEventListener('click', () => {
    show_box.forEach(Sbox => {
        Sbox.style.opacity = '1';
    });
    hide_box.forEach(Hbox => {
        Hbox.style.opacity = '0';
    });
});

// SHOW MENU

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');
let nav = document.querySelector('.nav');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_menu');
    nav.classList.toggle('nav_border');
});