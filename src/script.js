const heroFirstAnimation = document.querySelector('.section__hero__text-container__text-top')
const heroSecondAnimation = document.querySelectorAll('.section__hero__type');
const heroThirdAnimation = document.querySelector('.section__hero__bg-img');
const heroForthAnimation = document.querySelector('.header');
const floatNav = document.querySelector('.float-navigator__container');

heroFirstAnimation.addEventListener('animationend', () => {
    heroSecondAnimation.forEach(element => {
        element.classList.add('animation__wavy');
    });
    heroSecondAnimation[11].addEventListener('animationend', () => {
        heroThirdAnimation.classList.add('animation__reveal-img');

        heroThirdAnimation.addEventListener('animationend', () => {
            heroForthAnimation.classList.add('animation__reveal-header')
            floatNav.classList.add('animation__reveal-header');
        })
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});

const animateElements = document.querySelectorAll('.animate');
animateElements.forEach((element) => observer.observe(element))