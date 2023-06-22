const heightSlider = () => {

  const sliderHeight = document.querySelector('.shipping-cost__height');
  const input = document.getElementById('input-height');

  if (sliderHeight) {

    noUiSlider.create(sliderHeight, {

        start: 3,
        step: 0.1,
        connect: [true, false],
        range: {
          min: [0, 0.1],
          max: [10]
        },

        pips: {
          mode: "values",
          values: [0, 2.5, 5, 7.5, 10],
          format: wNumb({
            decimals: 1,
        })
      }
    });

    sliderHeight.noUiSlider.on('update', function(value) {

      let num = Number(value[0]);
      input.value = num.toFixed(1);
    });

    input.addEventListener('change', (e) => {
      sliderHeight.noUiSlider.set(e.currentTarget.value);
    });
  }
};

export {heightSlider};
