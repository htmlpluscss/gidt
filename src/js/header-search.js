( btn => {

	if(btn) {

		const form = document.querySelector('.header-search'),
			  input = form.querySelector('.header-search__input'),
			  result = form.querySelector('.header-search__result-inner');

		btn.addEventListener('click', () => {

			document.body.classList.add('overlay', 'header-search-show');

			setTimeout( () => input.focus(), 1000);

		});

		form.addEventListener('reset', () =>
			document.body.classList.remove('overlay', 'header-search-show'));


		input.addEventListener('keyup', event => {

			if(input.value.length > 3 && event.key !== 'enter'){

				form.classList.add('is-loading');

				fetch(form.getAttribute('action'), {
					method: 'POST',
					body: new FormData(form)
				})
//				.then(response => response.text())
				.then(html => {

//					console.log(html);

//					result.innerHTML = html;
					result.innerHTML = `
					<h3 class="header-search__result-head">
						Предложенные варианты
					</h3>

					<div class="visuallyhidden">

						<svg width="14" height="14" viewBox="0 0 14 14">

							<g id="ico-search"><path d="M13.8 12.24l-3.17-3.05a5.53 5.53 0 001.24-3.49c0-3.14-2.66-5.7-5.93-5.7A5.83 5.83 0 000 5.7c0 3.15 2.66 5.7 5.94 5.7 1.4 0 2.7-.47 3.73-1.27l3.16 3.04c.13.13.3.2.48.2a.7.7 0 00.49-.2.64.64 0 000-.93zM1.38 5.7a4.48 4.48 0 014.56-4.38A4.48 4.48 0 0110.5 5.7a4.48 4.48 0 01-4.56 4.38A4.48 4.48 0 011.38 5.7z"/><path d="M13.8 12.24l-3.17-3.05a5.53 5.53 0 001.24-3.49c0-3.14-2.66-5.7-5.93-5.7A5.83 5.83 0 000 5.7c0 3.15 2.66 5.7 5.94 5.7 1.4 0 2.7-.47 3.73-1.27l3.16 3.04c.13.13.3.2.48.2a.7.7 0 00.49-.2.64.64 0 000-.93zM1.38 5.7a4.48 4.48 0 014.56-4.38A4.48 4.48 0 0110.5 5.7a4.48 4.48 0 01-4.56 4.38A4.48 4.48 0 011.38 5.7z"/><path d="M13.8 12.24l-3.17-3.05a5.53 5.53 0 001.24-3.49c0-3.14-2.66-5.7-5.93-5.7A5.83 5.83 0 000 5.7c0 3.15 2.66 5.7 5.94 5.7 1.4 0 2.7-.47 3.73-1.27l3.16 3.04c.13.13.3.2.48.2a.7.7 0 00.49-.2.64.64 0 000-.93zM1.38 5.7a4.48 4.48 0 014.56-4.38A4.48 4.48 0 0110.5 5.7a4.48 4.48 0 01-4.56 4.38A4.48 4.48 0 011.38 5.7z"/></g>

						</svg>

					</div>

					<div class="header-search__result-list">

						<div class="header-search__result-item">

							<a href="/">Смотровая площадка для двоих</a>

							<svg><use xlink:href="#ico-search"/></svg>

						</div>

						<div class="header-search__result-item">

							<a href="/">Смена пароля</a>

							<svg><use xlink:href="#ico-search"/></svg>

						</div>

						<div class="header-search__result-item">

							<a href="/">Романтический ужин а двоих на смотровой площадке</a>

							<svg><use xlink:href="#ico-search"/></svg>

						</div>

					</div>
					`;
					form.classList.remove('is-loading');

				});

			}

		});

	}

})(document.querySelector('.header-search-open'));