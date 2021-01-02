( btn => {

	if(btn) {

		const form = document.querySelector('.search-modal'),
			  result = form.querySelector('.search-modal__result');

		btn.addEventListener('click', () =>
			document.body.classList.add('overlay', 'header-search-show'));

		form.addEventListener('reset', () =>
			document.body.classList.remove('overlay', 'header-search-show'));

	}

})(document.querySelector('.header-search-open'));