// small

( items => {

	if(items.length) {

		Array.from(items, el => {

			const bigs = document.querySelectorAll('.product-main__img-big-item');

			el.addEventListener("click", event => {

				event.preventDefault();

				Array.from(items, (small,index) => {

					small.classList.toggle('is-current', el === small);
					bigs[index].classList.toggle('hide', el !== small);

				});

			});

		});

	};

})(document.querySelectorAll('.product-main__img-preview'));