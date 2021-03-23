
( lk => {

// показать лефое меню

	document.querySelector('.lk__btn-to-menu').addEventListener('click', () =>
		lk.classList.add('left-menu-open'));

// кнопки состав

	( block => {

		if(block) {

			window.addEventListener("click", event => {

				const target = event.target.closest('.lk-card__show-param');

				if(target) {

					Array.from(target.querySelectorAll('.lk-card__show-param-inner'), inner =>
						inner.classList.toggle('hide'));

					const item = target.closest('.lk-card');

					Array.from(item.querySelectorAll('.lk-card__param'), param => param.classList.toggle('hide'));

				}

			});

		};

	})(document.querySelector('.lk-card'));

})(document.querySelector('.lk'));