const heightSlider = () => {

  const sliderHeight = document.querySelector('.shipping-cost__height');
  const input = document.getElementById('input-height');
  const arbitraryValuesForSlider = ['0', '2.5', '5', '7.5', '10'];
  const format = {
    to: function(value) {
        return arbitraryValuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return arbitraryValuesForSlider.indexOf(value);
    }
};

  if (sliderHeight) {

    noUiSlider.create(sliderHeight, {
        start: [5],
        range: { min: 0, max: arbitraryValuesForSlider.length - 1 },
        connect: [true, false],
        step: 1,
        format: format,
        pips: { mode: 'steps', format: format, density: 5 },
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
