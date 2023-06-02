const reviewsSlider = () => {

  let slider = document.querySelector('.reviews__slider-container');

  if (slider) {
    let sliderReviews = new Swiper('.reviews__slider-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,

      navigation: {
        prevEl: '.reviews__btn-prev',
        nextEl: '.reviews__btn-next',
      },
    });
  }
};

export {reviewsSlider};
