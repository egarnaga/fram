const partnersSlider = () => {

  let slider = document.querySelector('.partners__slider-container');

  if (slider) {
    let sliderPartners = new Swiper('.partners__slider-container', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,

      navigation: {
        prevEl: '.partners__btn-prev',
        nextEl: '.partners__btn-next',
      },
    });
  }
};

export {partnersSlider};
