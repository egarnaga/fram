const headerLightScroll = () => {

  const headerScroll = document.querySelector('.header-scroll');

  function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      headerScroll.classList.add('header--light');
    } else {
      headerScroll.classList.remove('header--light');
    }
  }

  if (headerScroll) {
    window.onscroll = function() {scrollFunction()};
  }

};

export {headerLightScroll};
