// JavaScript source code
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav__menu'),
    navToggle = document.getElementById('na__toggle'),
    navClose = document.getElementById('nav__close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link we remove show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(let i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach(el=>{
    el.addEventListener('click',toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
let selection = true;
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)
        let currSelected  ;
        let prevSelected;
        if(selection){
            currSelected = 'educationButton'
            prevSelected = 'workButton'
        } else{
            currSelected = 'workButton'
            prevSelected = 'educationButton'
        }
        selection = !selection;

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        document.getElementById(prevSelected).classList.remove('qualification__active')
        document.getElementById(currSelected).classList.add('qualification__active')
        target.classList.add('qualification__active');
        tab.classList.add('qaulification__active');
    })
})


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;
    //console.log(sections)

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-50;
        const sectionId = current.getAttribute('id');
        //console.log(document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList)
        //console.log(sectionHeight,sectionTop,scrollY)

        if((scrollY > sectionTop) && (scrollY <= (sectionTop + sectionHeight))){
            if(document.querySelector('.nav__menu a[href*=' + sectionId + ']'))
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            if(document.querySelector('.nav__menu a[href*=' + sectionId + ']'))
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header');
    //when scroll is > 200vh, add the scroll-header class to header tag
    if(this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    }
    else {
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader)


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll >560vh, add ths shoe scroll class to the a tag with scroll
    if(this.scrollY >=560) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previosly selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme') ? localStorage.getItem('selected-theme') :'dark'
const selectedIcon = localStorage.getItem('selected-icon') ? localStorage.getItem('selected-icon') : 'uil-moon'

//we obtain the theme that the interface has by validating the dark theme
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme)?'uil-moon' : 'uil-sun'

//we validate if the user previously chose a topic
if(selectedTheme){
    //if the validation is fullfilled ask ahat issue was to knoww if activated
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-moon'?'add':'remove'](iconTheme)
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //add / remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})