const heroFirstAnimation = document.querySelector('.section__hero__text-container__text-top')
const heroSecondAnimation = document.querySelectorAll('.section__hero__type');
const heroThirdAnimation = document.querySelector('.section__hero__bg-img');
const heroForthAnimation = document.querySelector('.header');

heroFirstAnimation.addEventListener('animationend', () => {
    heroSecondAnimation.forEach(element => {
        element.classList.add('animation__wavy');
    });
    heroSecondAnimation[11].addEventListener('animationend', () => {
        heroThirdAnimation.classList.add('animation__reveal-img');

        heroThirdAnimation.addEventListener('animationend', () => {
            heroForthAnimation.classList.add('animation__reveal-header')
        })
    });
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 
  };


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    })
}, observerOptions);

const animateElements = document.querySelectorAll('.animate');
animateElements.forEach((element) => observer.observe(element));


const navMenu = document.querySelector('.header__nav');
const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
})

closeBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open')
})

