
// btn header

document.querySelector('.btn-menu-toggle').addEventListener('click', event => {

	document.body.classList.remove('overlay', 'header-cart-show');
	document.body.classList.toggle('menu-show');

	if(document.body.classList.contains('header-search-show')){

		document.body.classList.remove('header-search-show');
		document.querySelector('.header-search').reset();

	}

});

// показать меню каталог

( menu => {

	if(menu) {

		document.body.addEventListener('mousemove', event => {

			const target = event.target;

			if(target) {

				if(target.closest('.show-menu-catalog') || target.closest('.menu-catalog')) {

					menu.classList.add('is-show');

				}

				else if(target.closest('a') || target.closest('button') || target.closest('.header') === null) {

					menu.classList.remove('is-show');

				}

			}

		});

		window.addEventListener("click", event => {

			if(!event.target.closest('.menu-catalog')) {

				menu.classList.remove('is-show');

			}

		});

	}

})(document.querySelector('.menu-catalog'));


// развернуть в мобильном меню

( menu => {

	if(menu) {

		menu.addEventListener('click', event => {

			const target = event.target;

			if(target.closest('.is-arrow')) {

				event.preventDefault();
				target.closest('.is-arrow').classList.toggle('is-open');

			}

		});

	}

})(document.querySelector('.menu-mobile'));