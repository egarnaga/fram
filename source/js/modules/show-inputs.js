const showInputs = () => {

  let hiddenInputs = document.querySelector('.form__animation');
  let activeInputs = document.querySelectorAll('.form__inputs--active');

  function showHiddenInputs() {
    hiddenInputs.classList.add('form__animation--show');
  }

  if (hiddenInputs) {
    for (let activeInput of activeInputs) {
      activeInput.addEventListener('click', showHiddenInputs);
    }
  }

  let hiddenInputs2 = document.querySelector('.form__animation2');
  let activeInputs2 = document.querySelectorAll('.form__inputs--active2');

  function showHiddenInput2() {
    hiddenInputs2.classList.add('form__animation--show2');
  }

  if (hiddenInputs2) {
    for (let activeInput2 of activeInputs2) {
      activeInput2.addEventListener('click', showHiddenInput2);
    }
  }
};

export {showInputs};
