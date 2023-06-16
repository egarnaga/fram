const accordionVacancies = () => {

  let vacanciesAccordion = document.querySelector('.vacancies__accordion');

  if (vacanciesAccordion) {
    const accordion = document.getElementsByClassName('vacancies__accordion-item');


    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function(){
        this.classList.toggle('vacancies__accordion-item--active');
      });
    }
  }

};

export {accordionVacancies};
