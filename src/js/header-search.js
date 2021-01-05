( btn => {

	if(btn) {

		const form = document.querySelector('.header-search'),
			  input = form.querySelector('.header-search__input'),
			  result = form.querySelector('.header-search__result');

		btn.addEventListener('click', () => {

			document.body.classList.add('overlay', 'header-search-show');

			setTimeout( () => input.focus(), 1000);

		});

		form.addEventListener('reset', () =>
			document.body.classList.remove('overlay', 'header-search-show'));

	}

})(document.querySelector('.header-search-open'));