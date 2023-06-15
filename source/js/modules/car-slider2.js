const carSlider2 = () => {

  let slider = document.querySelector('.car-park__slider2');

  if (slider) {
    let slider2Car = new Swiper('.car-park__slider2', {

      spaceBetween: 10,
      loop: true,

      navigation: {
        prevEl: '.car-park__slider2-btn-prev',
        nextEl: '.car-park__slider2-btn-next',
      },

      pagination: {
        el: '.car-park__slider2-pagination',
        clickable: true,
      },
    });
  }

};

export {carSlider2};
