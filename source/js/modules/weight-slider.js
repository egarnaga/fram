const weightSlider = () => {
  const sliderWeight = document.querySelector('.shipping-cost__weight');
  const input = document.getElementById('input-weight');
  const arbitraryValuesForSlider = ['0', '38', '75', '113', '150'];
  const format = {
    to: function(value) {
        return arbitraryValuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return arbitraryValuesForSlider.indexOf(value);
    }
};

  if (sliderWeight) {

    noUiSlider.create(sliderWeight, {
        start: [150],
        range: { min: 0, max: arbitraryValuesForSlider.length - 1 },
        connect: [true, false],
        step: 1,
        format: format,
        pips: { mode: 'steps', format: format, density: 5 },
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
