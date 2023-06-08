const showInputs = () => {

  const hiddenInputs = document.querySelectorAll('.form__inputs--hidden');
  const activeInputs = document.querySelectorAll('.form__inputs--active');

  function showHiddenInputs() {

    for (let hiddenInput of hiddenInputs) {
      if (hiddenInput.classList.contains('form__inputs--hidden')) {

        hiddenInput.classList.remove("form__inputs--hidden");
        hiddenInput.classList.add("form__inputs--show");

        for (let activeInput of activeInputs) {
          activeInput.removeEventListener('click', showHiddenInputs);
        }

      }
    }
  }

  if (hiddenInputs) {
    for (let activeInput of activeInputs) {
      activeInput.addEventListener('click', showHiddenInputs);
    }
  }
};

export {showInputs};
