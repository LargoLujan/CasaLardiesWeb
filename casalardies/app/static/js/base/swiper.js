// swiper.js
var swiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1100, // Velocidad de transición entre slides en milisegundos.
  autoplay: {
    delay: 6000, // Tiempo antes de cambiar al siguiente slide.
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      this.slides.forEach((slide) => {
        slide.querySelector('.slide-text').style.transitionDelay = "0s";
      });
    },
    slideChangeTransitionEnd: function () {
      let activeSlide = this.slides[this.activeIndex];
      let activeSlideText = activeSlide.querySelector('.slide-text');
      activeSlideText.style.transitionDelay = "1s";
    }
  }
});
