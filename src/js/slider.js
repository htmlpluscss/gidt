( slider => {

	if(!slider) {

		return;

	}

	// отделяем тысячи
	const sepNumber = str => str.toString().replace(/\s+/g,'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

	// склеиваем тысячи
	const strToNumber = n => parseInt(n.replace(/\s+/g,''), 10);

	const noUiSliderInit = () => {

		const track = slider.querySelector('.slider__track'),
			  form = slider.closest('form'),
			  minValue = slider.querySelector('.slider__value-min'),
			  maxValue = slider.querySelector('.slider__value-max'),
			  minInput = slider.querySelector('.slider__input-min'),
			  maxInput = slider.querySelector('.slider__input-max'),
			  btnReset = slider.querySelector('.slider__reset'),
			  btnOpen = slider.querySelector('.catalog-filter__item-btn'),
			  min   = parseInt(track.getAttribute('data-min')),
			  max   = parseInt(track.getAttribute('data-max')),
			  step  = parseInt(track.getAttribute('data-step')),
			  begin = parseInt(track.getAttribute('data-begin')),
			  end   = parseInt(track.getAttribute('data-end'));

		noUiSlider.create(track, {
			start: [begin,end],
			step: step,
			connect: true,
			range: {
				'min': min,
				'max': max
			}
		});

		track.noUiSlider.on('slide', values => {

			minValue.textContent = sepNumber(parseInt(values[0]));
			maxValue.textContent = sepNumber(parseInt(values[1]));

		});

		track.noUiSlider.on('end', values => {

			minInput.value = parseInt(values[0]);
			maxInput.value = parseInt(values[1]);

			btnOpen.classList.add('is-checked');

			form.dispatchEvent(new CustomEvent("change"));

		});

		btnReset.addEventListener('click', () => {

			track.noUiSlider.set([min,max]);

			minValue.textContent = sepNumber(min);
			maxValue.textContent = sepNumber(max);

			minInput.value = min;
			maxInput.value = max;

			form.dispatchEvent(new CustomEvent("change"));

		});

		form.addEventListener("reset", () => {

			console.log('reset');

			track.noUiSlider.set([min,max]);

			minValue.textContent = sepNumber(min);
			maxValue.textContent = sepNumber(max);

			minInput.value = min;
			maxInput.value = max;

		});

	};

	// load
	const script = document.createElement('script');
	script.src = '/js/nouislider.min.js';
	script.onload = () => noUiSliderInit();
	setTimeout( () => document.head.appendChild(script), window.pageYOffset > 0 ? 0 : 5000);

})(document.querySelector('.slider'));