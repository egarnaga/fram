const featuresSlider = () => {

  let slider = document.querySelector('.features__slider');

  let sliderFeatures;

  if (slider) {
    if (window.innerWidth <= 1000 && slider.dataset.mobile == 'false') {
      sliderFeatures = new Swiper('.features__slider', {
        slidesPerView: 'auto',
        spaceBetween: 15,
      });

      slider.dataset.mobile = 'true';
    }
  }


  if (slider) {
    window.addEventListener('resize', () => {

      if (window.innerWidth <= 1000 && slider.dataset.mobile == 'false') {
        sliderFeatures = new Swiper('.features__slider', {
          slidesPerView: 'auto',
          spaceBetween: 15,
        });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 1000) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          sliderFeatures.destroy();
        }
      }

    });
  }

};

export {featuresSlider};
