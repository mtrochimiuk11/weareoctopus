//OFERTA//
const arrowNext = document.querySelector('.offer__description__arrow-right');
const arrowPrev = document.querySelector('.offer__description__arrow-left');
const servicesNodeList = document.querySelectorAll('.offer__list__item');
let services = [];
for(let i = 0; i < servicesNodeList.length; i++ ) {
    services.push(servicesNodeList[i]);
}

const slidesNodeList = document.querySelectorAll('.slider__slide');
let slides =[];
for (let i = 0; i < slidesNodeList.length; i++) {
    slides.push(slidesNodeList[i]);
}

arrowNext.addEventListener('click', () => {
    if (arrowNext.getAttribute("fill") === "#8008FE") {
        for (let j = 0; j < 4; j++) {
            if (slides[j].classList.contains('active')) {
                slides[j].classList.remove('active');
                slides[j + 1].classList.add('active');
                break
            }
        }
        if (slides[4].classList.contains('active')) {
            arrowNext.setAttribute('fill', '#EEEEEE');
        }
        if (arrowPrev.getAttribute('fill') === '#EEEEEE') {
            arrowPrev.setAttribute('fill', '#8008FE');
        }
    }
});


arrowPrev.addEventListener('click', () => {
    if (arrowPrev.getAttribute("fill") === "#8008FE") {
        for (let i = 4; i >= 0; i--) {
            if (slides[i].classList.contains('active')) {
                slides[i].classList.remove('active');
                slides[i - 1].classList.add('active');
                break
            }
        }
        if (slides[0].classList.contains('active')) {
            arrowPrev.setAttribute('fill', '#EEEEEE');
        }
        if (arrowNext.getAttribute('fill') === '#EEEEEE') {
            arrowNext.setAttribute('fill', '#8008FE');
        }
    }
})


services.forEach(el => {
    el.addEventListener('click', () => {
        let i = services.indexOf(el);
        slides.forEach(el => {
            el.classList.remove('active')
        });
        slides[i].classList.add('active');
        switch (i) {
            case 0:
                arrowPrev.setAttribute('fill', '#EEEEEE');
                arrowNext.setAttribute('fill','#8008FE');
                break;
            case 4:
                arrowNext.setAttribute('fill', '#EEEEEE');
                arrowPrev.setAttribute('fill','#8008FE');
                break;
            default:
                arrowPrev.setAttribute('fill','#8008FE');
                arrowNext.setAttribute('fill','#8008FE');
        }
    })
})



