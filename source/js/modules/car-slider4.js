const carSlider4 = () => {

  let slider = document.querySelector('.car-park__slider4');

  if (slider) {
    let slider4Car = new Swiper('.car-park__slider4', {

      spaceBetween: 10,
      loop: true,

      navigation: {
        prevEl: '.car-park__slider4-btn-prev',
        nextEl: '.car-park__slider4-btn-next',
      },

      pagination: {
        el: '.car-park__slider4-pagination',
        clickable: true,
      },
    });
  }

};

export {carSlider4};
