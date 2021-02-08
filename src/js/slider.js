( slider => {

	if(!slider) {

		return;

	}

	const value = slider.querySelector('.slider__value'),
		  track = slider.querySelector('.slider__track'),
		  start = parseInt(value.textContent),
		  marker = slider.querySelectorAll('.slider__marker-item');

	noUiSlider.create(track, {
		start: start,
		connect: true,
		range: {
			'min': 0,
			'max': 100
		}
	});

	track.noUiSlider.on('slide', values => value.textContent = parseInt(values[0]));

	Array.from(marker, el =>

		el.addEventListener('click', () => {

			const v = el.getAttribute('data-value');

			value.textContent = v;
			track.noUiSlider.set(Number(v));

		}));

})(document.querySelector('.slider'));