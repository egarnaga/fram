const carSlider3 = () => {

  let slider = document.querySelector('.car-park__slider3');

  if (slider) {
    let slider3Car = new Swiper('.car-park__slider3', {

      spaceBetween: 10,
      loop: true,

      navigation: {
        prevEl: '.car-park__slider3-btn-prev',
        nextEl: '.car-park__slider3-btn-next',
      },

      pagination: {
        el: '.car-park__slider3-pagination',
        clickable: true,
      },
    });
  }

};

export {carSlider3};
