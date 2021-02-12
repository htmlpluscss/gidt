// small

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

// btn set-details

( items => {

	if(items.length) {

		Array.from(items, btn =>
			btn.addEventListener("click", () =>
				btn.closest('.product-set-details__item').classList.toggle('is-down')));

	};

})(document.querySelectorAll('.product-set-details__btn-open'));