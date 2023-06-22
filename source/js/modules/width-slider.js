const widthSlider = () => {

  const sliderWidth = document.querySelector('.shipping-cost__width');
  const input = document.getElementById('input-width');

  if (sliderWidth) {

    noUiSlider.create(sliderWidth, {
      start: 5.9,
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

    sliderWidth.noUiSlider.on('update', function(value) {

      let num = Number(value[0]);
      input.value = num.toFixed(1);
    });

    input.addEventListener('change', (e) => {
      sliderWidth.noUiSlider.set(e.currentTarget.value);
    });
  }
};

export {widthSlider};
