( cart => {

	if(cart) {

		cart.addEventListener('mouseenter', () =>
			document.body.classList.add('overlay', 'header-cart-show'));

		cart.addEventListener('mouseleave', () =>
			document.body.classList.remove('overlay', 'header-cart-show'));

	}

})(document.querySelector('.header-cart'));