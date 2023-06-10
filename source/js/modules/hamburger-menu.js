import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const hamburgerMenu = () => {
  const menu = document.querySelector('#hamburger-menu');
  const btnHamburger = document.querySelector('.header__toggle');

  const header = document.querySelector('.header');
  const body = document.querySelector('body');

  btnHamburger.addEventListener('click', function () {
    if (menu.classList.contains('header__list-wrapper--closed'
    )) {
      menu.classList.remove('header__list-wrapper--closed');
      menu.classList.add('header__list-wrapper--opened');
      header.classList.add('header--opened');

      disableScrolling();

    } else {
      menu.classList.add('header__list-wrapper--closed');
      menu.classList.remove('header__list-wrapper--opened');
      header.classList.remove('header--opened');

      enableScrolling();
    }


  });

  window.addEventListener('resize', () => {
    if (btnHamburger) {
      if (window.innerWidth > 768 && menu.classList.contains('header__list-wrapper--opened')) {
        menu.classList.remove('header__list-wrapper--opened');
        menu.classList.add('header__list-wrapper--closed');
        header.classList.remove('header--opened');
        enableScrolling();
      }
    }
  });
};

export {hamburgerMenu};
