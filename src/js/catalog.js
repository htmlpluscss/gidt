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

		const isReset = () => {

			let reset = form.querySelectorAll('.catalog-filter__checkbox-input:checked').length ? false : true;

			if(form.querySelector('.slider__input-min').value !== form.querySelector('.slider__track').getAttribute('data-min')) {

				reset = false;

			}

			if(form.querySelector('.slider__input-max').value !== form.querySelector('.slider__track').getAttribute('data-max')) {

				reset = false;

			}

			form.classList.toggle('is-reset', reset);

		};

		// head for mobile

		const catalogName = form.querySelector('.catalog-filter__head-title'),
			  catalogNameDefault = catalogName.textContent;


		// handler

		form.addEventListener("change", event => {

			console.log('при необходимости отправляем форму ajax');
			setTimeout( () => isReset(), 100);

		});

		// клик по кнопкам

		const btnItem = form.querySelectorAll('.catalog-filter__item-btn');

		Array.from(btnItem, btn => {

			btn.addEventListener("click", () => {

				Array.from(btnItem, _btn => {

					if(_btn === btn) {

						_btn.classList.toggle('is-open');

					}
					else {

						_btn.classList.remove('is-open');

					}

				});

				// если открываем подуровень

				if(form.querySelectorAll('.catalog-filter__item-btn.is-open').length){

					form.classList.add('is-level-2');

					catalogName.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 12.1H6.33l4.6-4.82L9.7 6 3 13l6.7 7 1.23-1.28-4.6-4.81H19v-1.82z"/></svg>';
					catalogName.append(btn.textContent);

				}
				else {

					form.classList.remove('is-level-2');

					catalogName.textContent = catalogNameDefault;

				}

			});

		});

		form.addEventListener("reset", () => {

			console.log('reset');

			Array.from(btnItem, btn => btn.classList.remove('is-open','is-checked'));

			setTimeout( () => isReset(), 100);

		});

		// клик по очистить

		const btnClear = form.querySelectorAll('.catalog-filter__item-clear');

		Array.from(btnClear, btn => {

			btn.addEventListener("click", () => {

				const item = btn.closest('.catalog-filter__item');

				item.querySelector('.catalog-filter__item-btn').classList.remove('is-checked');

			});

		});

		// закрыть все

		window.addEventListener("click", event => {

			if(!event.target.closest('.catalog-filter')) {

				Array.from(btnItem, btn => btn.classList.remove('is-open'));

			}

		});

		// checkbox-group

		const checkboxGroup = form.querySelectorAll('.catalog-filter__checkbox-group');

		Array.from(checkboxGroup, group => {

			const input = group.querySelectorAll('.catalog-filter__checkbox-input'),
				  btnOpen = group.querySelector('.catalog-filter__item-btn'),
				  btnClearAll = group.querySelector('.catalog-filter__item-clear-all'),
				  btnCheckAll = group.querySelector('.catalog-filter__item-check-all'),
				  totalCount = group.querySelector('.catalog-filter__checkbox-count-total'),
				  concarValue = group.querySelector('.catalog-filter__checkbox-concat-value');

			Array.from(input, el => {

				el.addEventListener("change", () => {

					let total = 0,
						value = '';

					Array.from(input, el => {

						if(el.checked) {

							if(value.length) {

								value += ', ';

							}

							total++;
							value += '<span class="white-space-nowrap">' + el.getAttribute('data-value') + '</span>';

						}

					});

					totalCount.textContent = total;
					concarValue.innerHTML = value;

					btnOpen.classList.toggle('is-checked', total);

				});

			});

			// все отметить

			btnCheckAll.addEventListener("click", () => {

				Array.from(input, el => {

					el.checked = true;
					el.dispatchEvent(new CustomEvent("change"));

				});

				form.dispatchEvent(new CustomEvent("change"));

			});

			// все отжать

			btnClearAll.addEventListener("click", () => {

				Array.from(input, el => {

					el.checked = false;
					el.dispatchEvent(new CustomEvent("change"));

				});

				form.dispatchEvent(new CustomEvent("change"));

			});

			form.addEventListener("reset", () => {

				setTimeout( () => {

					Array.from(input, el => {

						el.checked = false;
						el.dispatchEvent(new CustomEvent("change"));

					});

				}, 100);

			});

		});

	// mobile
		// открыть | закрыть

		window.addEventListener("click", event => {

			if(event.target.closest('.catalog__btn-filter-show')) {

				document.body.classList.add('open-catalog-filter');

			}
			else if(event.target.closest('.catalog__btn-filter-hide')) {

				document.body.classList.remove('open-catalog-filter');

			}

		});

		// назад уровень

		catalogName.addEventListener("click", () => {

			form.classList.remove('is-level-2');
			catalogName.textContent = catalogNameDefault;

			Array.from(btnItem, _btn => _btn.classList.remove('is-open'));

		});

	};

})(document.querySelector('.catalog-filter'));

// сортировка
( form => {

	if(form) {

		form.addEventListener("change", event => {

			console.log('слушаем форму, делаем редирект в зависимости от параметров');

		});

		// открыть | закрыть

		window.addEventListener("click", event => {

			if(event.target.closest('.catalog__btn-toggle-sort')) {

				document.body.classList.toggle('open-catalog-sort');

			}
			else {

				document.body.classList.remove('open-catalog-sort');

			}

		});

		// радио кнопки сортировки

		const btnCurrent = form.querySelector('.catalog-sort__btn-current'),
			  btnGroup = form.querySelectorAll('.catalog-sort__radio-btn');

		Array.from(btnGroup, el => {

			const input = el.querySelector('.catalog-sort__radio-btn-input'),
				  label = el.querySelector('.catalog-sort__radio-btn-label');

			input.addEventListener("change", () => btnCurrent.textContent = label.textContent);

		});

	};

})(document.querySelector('.catalog-sort'));