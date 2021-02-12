( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, elem => {

		let active = false,
			animateOn = false;

		const items = elem.querySelectorAll('.tab-city__item');

		Array.from(items, item => {

			const btn = item.querySelector('.tab-city__btn'),
				  body = item.querySelector('.tab-city__body');

			btn.addEventListener('click', () => {

				animateOn = true;

				if(item === active){

					item.classList.remove('is-open');
					active = null;

				}
				else {

					active = item;

					Array.from(items, el => el.classList.toggle('is-open', el === active));

				}

			});

			body.addEventListener(cssAnimation('transition'), () => {

				if(animateOn && active && !isInViewport(active)){

					active.scrollIntoView({ behavior: 'smooth' });

				}

				animateOn = false;

			});

		});

	});

})(document.querySelectorAll('.tab-city'));