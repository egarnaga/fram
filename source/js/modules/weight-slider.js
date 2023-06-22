const weightSlider = () => {
  const sliderWeight = document.querySelector('.shipping-cost__weight');
  const input = document.getElementById('input-weight');

  if (sliderWeight) {

    noUiSlider.create(sliderWeight, {
      start: 150,
        step: 0.1,
        connect: [true, false],
        range: {
          min: [0, 0.1],
          max: [150]
        },

        pips: {
          mode: "values",
          values: [0, 38, 75, 113, 150],
          format: wNumb({
            decimals: 1,
        })
      }
    });

    sliderWeight.noUiSlider.on('update', function(value) {

      let num = Number(value[0]);
      input.value = num.toFixed(1);
    });

    input.addEventListener('change', (e) => {
      sliderWeight.noUiSlider.set(e.currentTarget.value);
    });
  }
};

export {weightSlider};
