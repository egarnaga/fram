const calculatorSlider = () => {

  let slider = document.querySelector('.calculator__slider');

  if (slider) {
    let sliderCalculator = new Swiper('.calculator__slider', {
      slidesPerView: 'auto',
      spaceBetween: 24,
    });
  }
};

export {calculatorSlider};
