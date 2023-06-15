const mobileCarSlider = () => {

  let slider = document.querySelector('.car-park__slider-mobile');

  let carSliderMobile;

  if (slider) {
    if (window.innerWidth <= 860 && slider.dataset.mobile == 'false') {
      carSliderMobile = new Swiper('.car-park__slider-mobile', {
        slidesPerView: 'auto',
        spaceBetween: 24,
      });

      slider.dataset.mobile = 'true';
    }
  }


  if (slider) {
    window.addEventListener('resize', () => {

      if (window.innerWidth <= 860 && slider.dataset.mobile == 'false') {
        carSliderMobile = new Swiper('.car-park__slider-mobile', {
          slidesPerView: 'auto',
          spaceBetween: 24,
        });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 860) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          carSliderMobile.destroy();
        }
      }

    });
  }

};

export {mobileCarSlider};
