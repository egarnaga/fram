const lengthSlider = () => {

  const sliderLength = document.querySelector('.shipping-cost__length');
  const input = document.getElementById('input-length');

  if (sliderLength) {

    noUiSlider.create(sliderLength, {
        start: 19,
        step: 0.1,
        connect: [true, false],
        range: {
          min: [0, 0.1],
          max: [30]
        },

        pips: {
          mode: "values",
          values: [0, 7.5, 15, 22.5, 30],
          format: wNumb({
            decimals: 1,
        })
      }
    });

    sliderLength.noUiSlider.on('update', function(value) {

      let num = Number(value[0]);
      input.value = num.toFixed(1);
    });

    input.addEventListener('change', (e) => {
      sliderLength.noUiSlider.set(e.currentTarget.value);
    });
  }
};

export {lengthSlider};
