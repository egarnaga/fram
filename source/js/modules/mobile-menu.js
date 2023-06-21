const mobileMenu = () => {

  const btns = document.querySelectorAll('.header__sub-btn-mobile');
  const lists = document.querySelectorAll('.header__sub-list-wrap-mobile');
  const nav = document.querySelector('.header__list-top-nav');
  const listWrap = document.querySelector('.header__list-wrap');

  const link1 = document.querySelector('#sub-link-1');
  const link2 = document.querySelector('#sub-link-2');
  const link3 = document.querySelector('#sub-link-3');
  const link4 = document.querySelector('#sub-link-4');
  const link5 = document.querySelector('#sub-link-5');
  const link6 = document.querySelector('#sub-link-6');
  const link7 = document.querySelector('#sub-link-7');
  const link8 = document.querySelector('#sub-link-8');

  const list1 = document.querySelector('#sub-list-1');
  const list2 = document.querySelector('#sub-list-2');
  const list3 = document.querySelector('#sub-list-3');
  const list4 = document.querySelector('#sub-list-4');
  const list5 = document.querySelector('#sub-list-5');
  const list6 = document.querySelector('#sub-list-6');
  const list7 = document.querySelector('#sub-list-7');
  const list8 = document.querySelector('#sub-list-8');

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
      for (let i = 0; i < lists.length; i++) {
        if (lists[i].classList.contains('header__sub-list-wrap-mobile--active')) {
          lists[i].classList.remove('header__sub-list-wrap-mobile--active');
        }
      }

      if (nav.classList.contains('header__sub-list-wrap-mobile--hidden')) {
        nav.classList.remove('header__sub-list-wrap-mobile--hidden');
      };

      if (listWrap.classList.contains('header__list-wrap--hidden')) {
        listWrap.classList.remove('header__list-wrap--hidden');
      };
    });
  }

  link1.addEventListener('click', function(){
    list1.classList.add('header__sub-list-wrap-mobile--active');
    nav.classList.add('header__sub-list-wrap-mobile--hidden');
    listWrap.classList.add('header__list-wrap--hidden');
  });

  link2.addEventListener('click', function(){
    list2.classList.add('header__sub-list-wrap-mobile--active');
    nav.classList.add('header__sub-list-wrap-mobile--hidden');
    listWrap.classList.add('header__list-wrap--hidden');
  });

  link3.addEventListener('click', function(){
    list3.classList.add('header__sub-list-wrap-mobile--active');
    nav.classList.add('header__sub-list-wrap-mobile--hidden');
    listWrap.classList.add('header__list-wrap--hidden');
  });

  link4.addEventListener('click', function(){
    list4.classList.add('header__sub-list-wrap-mobile--active');
    nav.classList.add('header__sub-list-wrap-mobile--hidden');
    listWrap.classList.add('header__list-wrap--hidden');
  });

  link5.addEventListener('click', function(){
    list5.classList.add('header__sub-list-wrap-mobile--active');
    nav.classList.add('header__sub-list-wrap-mobile--hidden');
    listWrap.classList.add('header__list-wrap--hidden');
  });

  link6.addEventListener('click', function(){
    list6.classList.add('header__sub-list-wrap-mobile--active');
    nav.classList.add('header__sub-list-wrap-mobile--hidden');
    listWrap.classList.add('header__list-wrap--hidden');
  });

  link7.addEventListener('click', function(){
    list7.classList.add('header__sub-list-wrap-mobile--active');
    nav.classList.add('header__sub-list-wrap-mobile--hidden');
    listWrap.classList.add('header__list-wrap--hidden');
  });

  link8.addEventListener('click', function(){
    list8.classList.add('header__sub-list-wrap-mobile--active');
    nav.classList.add('header__sub-list-wrap-mobile--hidden');
    listWrap.classList.add('header__list-wrap--hidden');
  });

};

export {mobileMenu};
