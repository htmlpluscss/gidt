( swiperContainer => {

	if(!swiperContainer.length) {

		return;

	}

	let swiperInit = window.Swiper;

	Array.from(swiperContainer, swipe => {

		let mySwipe = null,
			toggleSwipe = null,
			resetSwipe = null;

		const swipeControls = document.createElement('div'),
			  swipeNav = document.createElement('div'),
			  swipeBtns = document.createElement('div'),
			  swipeNext = document.createElement('button'),
			  swipePrev = document.createElement('button'),
			  items = swipe.querySelectorAll('.swiper-slide'),
			  count = items.length,
			  group3 = swipe.classList.contains('swiper-container--group3'),
			  customGift = swipe.classList.contains('swiper-container--custom-gift'),
			  packing = swipe.classList.contains('swiper-container--packing'),
			  packingCover = swipe.classList.contains('swiper-container--packing-cover');

		swipeNav.className = 'swiper-pagination';
		swipeControls.className = 'swiper-controls';

		swipeBtns.className = 'swiper-navigation';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.innerHTML = '<svg width="16" height="29" viewBox="0 0 16 29"><path d="M0 14.034c0-.503.192-1.006.575-1.39L12.645.577a1.966 1.966 0 112.78 2.78L4.744 14.034l10.68 10.68a1.966 1.966 0 01-2.78 2.779L.574 15.423A1.96 1.96 0 010 14.035z"/></svg>';
		swipeNext.innerHTML = '<svg width="16" height="29" viewBox="0 0 16 29"><path d="M16 14.034a1.96 1.96 0 01-.575 1.39L3.355 27.493a1.965 1.965 0 11-2.78-2.78l10.68-10.679L.575 3.356a1.966 1.966 0 012.78-2.78l12.07 12.069c.383.384.575.887.575 1.39z"/></svg>';

		swipeBtns.appendChild(swipePrev);
		swipeBtns.appendChild(swipeNext);
		swipeControls.appendChild(swipeBtns);
		swipeControls.appendChild(swipeNav);
		swipe.parentNode.appendChild(swipeControls);

		resetSwipe = () => {

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');
			swipeBtns.classList.add('hide');
			swipeControls.classList.add('hide');

			swipe.parentNode.classList.remove('swiper-container-style');

		}

		resetSwipe();

		if (group3) {

			toggleSwipe = () => {

				resetSwipe();

				if(count < 4 && window.innerWidth >= 1200) {

					return;

				}

				swipe.parentNode.classList.add('swiper-container-style');

				if (window.innerWidth < 1200) {

					swipeNav.classList.remove('hide');
					swipeControls.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						pagination: {
							el: swipeNav,
							clickable: true,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						}
					});

				}
				else {

					swipeNav.classList.remove('hide');
					swipeBtns.classList.remove('hide');
					swipeControls.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						slidesPerView: 3,
						slidesPerGroup: 3,
						spaceBetween: 30,
						pagination: {
							el: swipeNav,
							clickable: true,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						},
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						}
					});

				}

			}

		}

		if (customGift) {

			toggleSwipe = () => {

				resetSwipe();

				swipe.parentNode.classList.add('swiper-container-style');

				if (window.innerWidth < 1200) {

					swipeNav.classList.remove('hide');
					swipeControls.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoHeight: true,
						pagination: {
							el: swipeNav,
							clickable: true,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						}
					});

				}
				else {

					swipeNav.classList.remove('hide');
					swipeBtns.classList.remove('hide');
					swipeControls.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						effect: 'fade',
						pagination: {
							el: swipeNav,
							clickable: true,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						},
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						}
					});

				}

			}

		}

		if (packing) {

			toggleSwipe = () => {

				toggleSwipe = null;

				swipe.parentNode.classList.add('swiper-container-style');

				swipeNav.classList.remove('hide');
				swipeControls.classList.remove('hide');

				mySwipe = new Swiper(swipe, {
					loop: true,
					autoHeight: true,
					autoplay: {
						delay: 3000
					},
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					}
				});

			}

		}

		if (packingCover) {

			toggleSwipe = () => {

				resetSwipe();

				swipe.parentNode.classList.add('swiper-container-style');

				if (window.innerWidth < 1200) {

					swipeNav.classList.remove('hide');
					swipeControls.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						pagination: {
							el: swipeNav,
							clickable: true,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						}
					});

				}
				else {

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoplay: {
							delay: 3000
						},
						slidesPerView: 'auto',
						centeredSlides: true
					});

				}

			}

		}

		PubSub.subscribe('windowWidthResize', () => {

			if (window.Swiper && toggleSwipe) {

				toggleSwipe();

			}

		});

		if(window.Swiper && toggleSwipe) {

			toggleSwipe();

		}
		else {

			PubSub.subscribe('swiperJsLoad', () => {

				// eager
				Array.from(swipe.querySelectorAll('[loading="lazy"]'), img => img.setAttribute('loading','eager'));

				// hide
				Array.from(items, el => el.classList.remove('hide'));

				toggleSwipe();

			});

		}

		if(!swiperInit) {

			swiperInit = true;

			const script = document.createElement('script');

			script.async = true;
			script.src = '/js/swiper.min.js';

			script.onload = () => PubSub.publish('swiperJsLoad');

			document.head.appendChild(script);

//			setTimeout( () => document.head.appendChild(script), window.pageYOffset > 0 ? 0 : 5000);

		}

	});

})(document.querySelectorAll('.swiper-container'));