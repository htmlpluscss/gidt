
// btn header

document.addEventListener('click', event => {

	if(event.target.closest('.btn-menu-toggle')) {

		document.body.classList.toggle('menu-show');

	}
/*
	if(event.target.closest('.menu__link')) {

		let href = event.target.closest('.menu__link').getAttribute('href');

		href = href.split('#');

		if(document.querySelector('#'+href[1])) {

			document.body.classList.remove('menu-show');

		}

	}*/

});

// показать меню каталог

( menu => {

	if(menu) {

		document.body.addEventListener('mousemove', event => {

			const target = event.target;

			if(target.closest('.show-menu-catalog') || target.closest('.menu-catalog')) {

				menu.classList.add('is-show');

			}

			else if(target.closest('a') || target.closest('buttom')) {

				menu.classList.remove('is-show');

			}

		});

	}

})(document.querySelector('.menu-catalog'));