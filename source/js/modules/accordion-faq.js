const accordionFaq = () => {

  let faqAccordion = document.querySelector('.faq__accordion');

  if (faqAccordion) {
    const accordion = document.getElementsByClassName('faq__item');


    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function(){
        for (let i = 0; i < accordion.length; i++) {
          if (this !=accordion[i] ) {
            accordion[i].classList.remove('faq__item--active');
          }

        }
        this.classList.toggle('faq__item--active');
      });
    }
  }

};

export {accordionFaq};
