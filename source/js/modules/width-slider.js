const widthSlider = () => {

  const sliderWidth = document.querySelector('.shipping-cost__width');
  const arbitraryValuesForSlider = ['0', '2.5', '5', '7.5', '10'];
  const format = {
    to: function(value) {
        return arbitraryValuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return arbitraryValuesForSlider.indexOf(value);
    }
};

  if (sliderWidth) {

    //var slider = document.getElementById('width-slider');

    noUiSlider.create(sliderWidth, {
        start: [2.5],
        range: { min: 0, max: arbitraryValuesForSlider.length - 1 },
        step: 1,
        tooltips: true,
        format: format,
        pips: { mode: 'steps', format: format, density: 5 },
    });




  }
};

export {widthSlider};
