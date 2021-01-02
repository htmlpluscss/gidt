
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