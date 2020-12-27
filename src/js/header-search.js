( btn => {

	if(btn) {

		const form = document.querySelector('form'),
			  result = form.querySelector('.result');

		btn.addEventListener('click', () =>
			document.body.classList.add('modal-show', 'header-search-show'));

		form.addEventListener('reset', () =>
			document.body.classList.remove('modal-show', 'header-search-show'));

	}

})(document.querySelector('.header-search-open'));