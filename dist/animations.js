

window.addEventListener("DOMContentLoaded", function() {


    ScrollTrigger.matchMedia({
        "(max-width: 767px)": function() {
            //OFFER//
            gsap.to('.offer__description', {
                scrollTrigger: {
                    trigger: ".offer__text",
                    start: "top 20%",
                },
                duration: 1,
                opacity: 1,
            })
        },
        "(min-width: 768px) and (max-width: 1199px)": function () {
            //OFFER//
            gsap.to('.offer__description', {
                scrollTrigger: {
                    trigger: ".clients__logo__wrapper",
                    start: "top 20%",
                },
                duration: 1,
                opacity: 1,
            })
        },
        "(max-width: 1199px)": function() {

            //PROJECTS//
            gsap.to(".projects__bkg__img", {
                scrollTrigger: {
                    trigger: ".tech__technologies",
                    start: "bottom 50%",
                },
                duration: 1,
                y: 75
            })
        },
        "(min-width: 1200px)": function() {


            //OFFER//
            gsap.to('.offer__description', {
                scrollTrigger: {
                    trigger: ".clients__logo__wrapper",
                    start: "top 10%",
                },
                duration: 1,
                opacity: 1,
            })


            //PROJECTS//
            gsap.to(".projects__bkg__img__wrapper", {
                scrollTrigger: {
                    trigger: ".tech__technologies__top",
                    start: "top 40%",
                },
                duration: 1,
                y: -240
            })

        },
        "all": function(){

            //OFFER//
            gsap.to('.offer__list__item', {
                scrollTrigger: {
                    trigger: ".clients",
                    start: "bottom 40%",
                },
                duration: 0.5,
                opacity: 1,
                x: 0,
                stagger: {
                    each: 0.1
                }
            })
        }
    })


});

