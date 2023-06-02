const accordionIndustrySolutions = () => {

  let industrySolutionsAccordion1 = document.querySelector('.industry-solutions__accordion-1');
  let industrySolutionsAccordion2 = document.querySelector('.industry-solutions__accordion-2');
  const accordion1 = document.getElementsByClassName('industry-solutions__item-1');
  const accordion2 = document.getElementsByClassName('industry-solutions__item-2');

  if (window.innerWidth <= 1160 && industrySolutionsAccordion1.dataset.mobile == 'false') {
    for (let i = 0; i < accordion1.length; i++) {
      accordion1[i].addEventListener('click', function(){
        this.classList.toggle('industry-solutions__item--active');
      });
    }
    industrySolutionsAccordion1.dataset.mobile = 'true';
  }

  if (window.innerWidth <= 1160 && industrySolutionsAccordion2.dataset.mobile == 'false') {
    for (let i = 0; i < accordion2.length; i++) {
      accordion2[i].addEventListener('click', function(){
        this.classList.toggle('industry-solutions__item--active');
      });
    }
    industrySolutionsAccordion2.dataset.mobile = 'true';
  }

  function myFunc() {
    if (window.innerWidth <= 1160 && industrySolutionsAccordion1.dataset.mobile == 'false') {
      for (let i = 0; i < accordion1.length; i++) {
        accordion1[i].addEventListener('click', function(){
          this.classList.toggle('industry-solutions__item--active');
        });
      }
      industrySolutionsAccordion1.dataset.mobile = 'true';
    }

    if (window.innerWidth <= 1160 && industrySolutionsAccordion2.dataset.mobile == 'false') {
      for (let i = 0; i < accordion2.length; i++) {
        accordion2[i].addEventListener('click', function(){
          this.classList.toggle('industry-solutions__item--active');
        });
      }
      industrySolutionsAccordion2.dataset.mobile = 'true';
    }
  }





  window.addEventListener('resize', myFunc);

  /* if (industrySolutionsAccordion) {
    console.log('пыщ!');
    window.onresize = function(event) {
      //console.log('пыщ!');

      if (window.innerWidth <= 1160 && industrySolutionsAccordion.dataset.mobile == 'false') {
        for (let i = 0; i < accordion.length; i++) {
          accordion[i].addEventListener('click', function(){
            this.classList.toggle('industry-solutions__item--active');
          });
        }

      }
    };
  }
 */





  /* if (industrySolutionsAccordion) {



    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function(){
        this.classList.toggle('industry-solutions__item--active');
      });
    }
  } */

};



export {accordionIndustrySolutions};
