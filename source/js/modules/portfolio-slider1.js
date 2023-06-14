const portfolioSlider1 = () => {

  let slider = document.querySelector('.main-portfolio__slider1-container');

  if (slider) {
    let slider1Portfolio = new Swiper('.main-portfolio__slider1-container', {

      spaceBetween: 15,
      loop: true,

      navigation: {
        prevEl: '.main-portfolio__slider1-btn-prev',
        nextEl: '.main-portfolio__slider1-btn-next',
      },

      pagination: {
        el: '.main-portfolio__slider1-pagination',
        clickable: true,
      },
    });
  }

};

export {portfolioSlider1};
