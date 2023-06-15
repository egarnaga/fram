const carSlider1 = () => {

  let slider = document.querySelector('.car-park__slider1');

  if (slider) {
    let slider1Car = new Swiper('.car-park__slider1', {

      spaceBetween: 10,
      loop: true,

      navigation: {
        prevEl: '.car-park__slider1-btn-prev',
        nextEl: '.car-park__slider1-btn-next',
      },

      pagination: {
        el: '.car-park__slider1-pagination',
        clickable: true,
      },
    });
  }

};

export {carSlider1};
