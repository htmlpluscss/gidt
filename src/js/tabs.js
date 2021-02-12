( tabs => {

	Array.from(tabs, tab => {

		let btn = tab.querySelectorAll('.tabs__btn'),
			item = tab.querySelectorAll('.tabs__item'),
			nav = document.createElement('div'),
			isActive = false;

		Array.from(btn, (el,index) => {

			const _btn = document.createElement('button');

			_btn.setAttribute('type','button');

			_btn.className = 'button tabs__btn';

			_btn.innerHTML = el.innerHTML;

			nav.appendChild(_btn);

			_btn.addEventListener('click', () => {

				if(tab.classList.contains('tabs--mobile-come-accordion') && _btn.classList.contains('is-active') && window.innerWidth < 768){

					item[index].classList.remove('is-active');
					_btn.classList.remove('is-active');

					return;

				}

				Array.from(item, (elem,inx) => {

					elem.classList.toggle('is-active', inx === index);
					btn[inx].classList.toggle('is-active', inx === index);

				});

			});

			if(item[index].classList.contains('is-active')){

				_btn.classList.add('is-active');
				isActive = true;

			}

			const arrow = document.createElement('span');

			arrow.className = 'tabs__btn-arrow';
			arrow.innerHTML = '<svg width="5" height="8"><path d="M0 6.86L3.13 4 0 1.14.63 0 5 4 .62 8 0 6.86z"/></svg>';

			_btn.appendChild(arrow);

			el.remove();

		});

		nav.classList.add('tabs__nav');

		btn = nav.querySelectorAll('.tabs__btn');

		if(isActive === false) {

			item[0].classList.add('is-active');
			btn[0].classList.add('is-active');

		}

		tab.insertBefore(nav, item[0]);

		// in product
		if(tab.classList.contains('tabs--mobile-come-accordion')){

			let state = null;

			PubSub.subscribe('windowWidthResize', () => {

				if(window.innerWidth < 768) {

					if(state === 'mobile') {

						return;

					}

					state = 'mobile';

					Array.from(item, (el,index) => el.prepend(btn[index]));

				}
				else {

					if(state === 'desktop') {

						return;

					}

					state = 'desktop';

					Array.from(item, (el,index) => nav.append(btn[index]));

				}

			});

			PubSub.publish('windowWidthResize');

		}

	});

})(document.querySelectorAll('.tabs'));