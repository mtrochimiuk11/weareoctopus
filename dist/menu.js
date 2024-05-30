const menuIcon = document.querySelector('.menu__icon');
const menuMobile = document.querySelector('.menu__mobile');
const menuList = document.querySelector('.menu__mobile__list');
const menuButton = document.querySelector('.menu__mobile__btn');
const menuLogo = document.querySelector('.menu__logo');
const heroButton = document.querySelector('.hero__btn__wrapper');
const submenuMobile = document.querySelector('.menu__mobile__list__item__submenu');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    menuMobile.classList.toggle('open');
    menuList.classList.toggle('open');
    menuButton.classList.toggle('open');
})

const menuMobileAbout = document.querySelector('.menu__about');
const menuMobileOffer = document.querySelector('.menu__offer');
const menuMobileProject = document.querySelector('.menu__projects');
const menuMobileContact = document.querySelector('.menu__mobile__btn');

const menuItems = [menuMobileAbout, menuMobileProject, menuMobileContact, menuLogo];

menuLogo.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

menuMobileOffer.addEventListener('click', () => {
    menuMobileOffer.classList.toggle('active')
    submenuMobile.classList.toggle('active')
})


menuItems.forEach(item => {
    if (item) {
        item.addEventListener('click', () => {
            menuIcon.classList.remove('open');
            menuMobile.classList.remove('open');
            menuList.classList.remove('open');
            menuButton.classList.remove('open');
        })
    }
})

//
// menuMobileAbout.addEventListener('click', () => {
//     document.querySelector('#clients').scrollTo(0, 0);
//     setTimeout(function () {
//         window.scrollBy(0, 720);
//     }, 200);
// })
//
// menuMobileOffer.addEventListener('click', () => {
//     document.querySelector('#clients').scrollTo(0, 0);
//     setTimeout(function () {
//         window.scrollBy(0, 1170);
//     }, 200);
// })
//
// menuMobileProject.addEventListener('click', () => {
//     document.querySelector('#clients').scrollTo(0, 0);
//     setTimeout(function () {
//         window.scrollBy(0, 2880);
//     }, 200);
// })
//
// menuMobileContact.addEventListener('click', () => {
//     document.querySelector('#clients').scrollTo(0, 0);
//     setTimeout(function () {
//         window.scrollBy(0, 4400);
//     }, 200);
// })
//
// heroButton.addEventListener('click', () => {
//     document.getElementById('contact').scrollIntoView();
//     setTimeout(function () {
//         window.scrollBy(0, 360);
//     }, 300);
// })
//
// const footerContact = document.querySelector('.footer__contact');
// footerContact.addEventListener('click', () => {
//     document.getElementById('contact').scrollIntoView();
//     setTimeout(function () {
//         window.scrollBy(0, 60);
//     }, 300);
// })
//

const offerMenuItem = document.querySelector('.menu__desk__list__item:nth-of-type(2)');
const submenuDesktop = document.querySelector('.menu__desk__list__item__submenu');

offerMenuItem.addEventListener('mouseover', () => {
    submenuDesktop.classList.add('active');
})

submenuDesktop.addEventListener('mouseover', () => {
    submenuDesktop.classList.add('active');
})

offerMenuItem.addEventListener('mouseleave', () => {
    submenuDesktop.classList.remove('active');
})

submenuDesktop.addEventListener('mouseleave', () => {
    submenuDesktop.classList.remove('active');
})