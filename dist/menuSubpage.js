//MENU MOBILE//
const menuIcon = document.querySelector('.menu__icon');
const menuMobile = document.querySelector('.menu__mobile');
const menuList = document.querySelector('.menu__mobile__list');
const menuContact = document.querySelector('.menu__mobile__btn');
const submenuMobile = document.querySelector('.menu__mobile__list__item__submenu');
const menuMobileOffer = document.querySelector('.menu__offer');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    menuMobile.classList.toggle('open');
    menuList.classList.toggle('open');
    menuContact.classList.toggle('open');
})


menuContact.addEventListener('click', () => {
    menuIcon.classList.remove('open');
    menuMobile.classList.remove('open');
    menuList.classList.remove('open');
    menuContact.classList.remove('open');
})

menuMobileOffer.addEventListener('click', () => {
    menuMobileOffer.classList.toggle('active')
    submenuMobile.classList.toggle('active')
})

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
