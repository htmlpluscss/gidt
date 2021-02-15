/*// small

( items => {

	if(items.length) {

		Array.from(items, el => {

			const bigs = document.querySelectorAll('.product-main__img-big-item');

			el.addEventListener("click", event => {

				event.preventDefault();

				Array.from(items, (small,index) => {

					small.classList.toggle('is-current', el === small);
					bigs[index].classList.toggle('is-show', el === small);

				});

			});

		});

	};

})(document.querySelectorAll('.product-main__img-preview'));
*/
// dual-order

( btn => {

	if(btn) {

		btn.addEventListener("click", () => btn.closest('.cart-alert-dual-order').classList.toggle('is-hide'));

	};

})(document.querySelector('.cart-alert-dual-order__close'));


( form => {

	if(!form) {

		return;

	}

	const quantity = form.querySelectorAll('.cart-quantity');

	if(quantity.length) {

// quantity
		Array.from(quantity, el => {

			let value = null;

			const up = el.querySelector('.cart-quantity__btn--up'),
				down = el.querySelector('.cart-quantity__btn--down'),
				count = el.querySelector('.cart-quantity__count');

			up.addEventListener('click', () => {

				value = parseInt(count.value) + 1;

				count.value = value;

				form.dispatchEvent(new CustomEvent('change'));

			});

			down.addEventListener('click', () => {

				value = parseInt(count.value) - 1;

				if(value < 1) {

					value = 1;

				}

				count.value = value;

				form.dispatchEvent(new CustomEvent('change'));

			});

			count.addEventListener('blur', () => {

				form.dispatchEvent(new CustomEvent('change'));

			});

			count.addEventListener('focus', () => {

				setTimeout( () => count.setSelectionRange(0,9),100)

			});

			count.addEventListener('keyup', () => {

				const val = this.value.replace(/[\D]/g, '');

				this.value = val;

				form.dispatchEvent(new CustomEvent('change'));

			});

		});

	}

})(document.querySelector('.cart'));