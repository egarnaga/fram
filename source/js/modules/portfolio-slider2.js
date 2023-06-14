const portfolioSlider2 = () => {

  let slider = document.querySelector('.main-portfolio__slider2-container');

  if (slider) {
    let slider1Portfolio = new Swiper('.main-portfolio__slider2-container', {

      spaceBetween: 15,
      loop: true,

      navigation: {
        prevEl: '.main-portfolio__slider2-btn-prev',
        nextEl: '.main-portfolio__slider2-btn-next',
      },

      pagination: {
        el: '.main-portfolio__slider2-pagination',
        clickable: true,
      },
    });
  }

};

export {portfolioSlider2};
