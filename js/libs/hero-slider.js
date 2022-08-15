class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper( this.el, {
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            speed: 2000,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });
    }

}