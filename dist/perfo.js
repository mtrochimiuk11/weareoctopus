const pricingMenu = document.querySelectorAll('.performance-pricing__menu__item');
const pricingOfferContainers = document.querySelectorAll('.performance-pricing__container');

pricingMenu.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            return;
        }

        pricingMenu.forEach(item => item.classList.remove('active'));
        item.classList.add('active');

        pricingOfferContainers.forEach(item => item.classList.remove('active'));
        pricingOfferContainers[Array.from(pricingMenu).indexOf(item)].classList.add('active');
    })
})