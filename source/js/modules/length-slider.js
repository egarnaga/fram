const lengthSlider = () => {

  const sliderLength = document.querySelector('.shipping-cost__length');
  const input = document.getElementById('input-length');
  const arbitraryValuesForSlider = ['0', '7.5', '15', '22.5', '30'];
  const format = {
    to: function(value) {
        return arbitraryValuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return arbitraryValuesForSlider.indexOf(value);
    }
};

  if (sliderLength) {

    noUiSlider.create(sliderLength, {
        start: [22.5],
        range: { min: 0, max: arbitraryValuesForSlider.length - 1 },
        connect: [true, false],
        step: 1,
        format: format,
        pips: { mode: 'steps', format: format, density: 5 },
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
