( cart => {

	if(cart) {

		cart.addEventListener('mouseenter', () =>
			document.body.classList.add('overlay', 'header-cart-show'));

		cart.addEventListener('mouseleave', () =>
			document.body.classList.remove('overlay', 'header-cart-show'));

		document.querySelector('.header__btn-cart-mobile').addEventListener('click', () => {

			document.body.classList.toggle('overlay');
			document.body.classList.toggle('header-cart-show');

		});

	}

})(document.querySelector('.header-cart'));