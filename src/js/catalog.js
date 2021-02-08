// кнопки состав

( block => {

	if(block) {

		window.addEventListener("click", event => {

			const target = event.target.closest('.catalog-item__show-param');

			if(target) {

				Array.from(target.querySelectorAll('.catalog-item__show-param-inner'), inner =>
					inner.classList.toggle('hide'));

				const item = target.closest('.catalog-item');

				item.querySelector('.catalog-item__param').classList.toggle('hide');

			}

		});

	};

})(document.querySelector('.catalog'));

// фильтр
( form => {

	if(form) {

		form.addEventListener("reset", () => {

			console.log('reset');

		});

	};

})(document.querySelector('.catalog-filter'));

// сортировка
( form => {

	if(form) {

		form.addEventListener("change", event => {

			console.log('слушаем форму, делаем редирект в зависимости от параметров');

		});

	};

})(document.querySelector('.catalog-sort'));