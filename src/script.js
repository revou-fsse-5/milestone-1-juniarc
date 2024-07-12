const IS_DARK_MODE = 'isDarkMode';
const DARK_THEME_CLASS = 'dark-mode'

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

// Mode Configuration

// Check avaibility localStorage
function isStorageExist() {
    if (typeof (Storage) === undefined ){
        alert('Your browser did not support local storage');
        return false;
    }
    return true;
}
const modeBtnDark = document.querySelector('.header__mode-btn__dark')
const modeBtnLight = document.querySelector('.header__mode-btn__light')
const moonIcon = document.querySelector('.mode-btn__moon-icon');
const sunIcon = document.querySelector('.mode-btn__sun-icon');

modeBtnDark.addEventListener('click', () => {
    moonIcon.classList.add('animation__mode-btn')
    if(!document.body.classList.contains(DARK_THEME_CLASS)) {
        document.body.classList.add(DARK_THEME_CLASS);
        localStorage.setItem(IS_DARK_MODE, true);
    }
    modeBtnDark.classList.toggle('hide');
    moonIcon.classList.remove('animation__pop-up-icon')
    moonIcon.classList.remove('animation__mode-btn');
    sunIcon.classList.add('animation__pop-up-icon')
    modeBtnLight.classList.toggle('hide')
})

modeBtnLight.addEventListener('click', () => {
    sunIcon.classList.add('animation__mode-btn')
    if(document.body.classList.contains(DARK_THEME_CLASS)) {
        document.body.classList.remove(DARK_THEME_CLASS);
        localStorage.setItem(IS_DARK_MODE, false);
    }
    modeBtnLight.classList.toggle('hide')
    sunIcon.classList.remove('animation__pop-up-icon')
    sunIcon.classList.remove('animation__mode-btn');
    moonIcon.classList.add('animation__pop-up-icon')
    modeBtnDark.classList.toggle('hide')
});

document.addEventListener('DOMContentLoaded', () => {
    if(isStorageExist()) {
        const getModeFromLocalStorage = localStorage.getItem(IS_DARK_MODE);
        if(getModeFromLocalStorage === 'true') {
            document.body.classList.add(DARK_THEME_CLASS)
            modeBtnDark.classList.toggle('hide')
        } else {
            modeBtnLight.classList.toggle('hide')
        }
    }
})



