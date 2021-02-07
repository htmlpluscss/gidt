( tab => {

	if(tab) {

		const btns = tab.querySelectorAll('.shipping-calculator__head');

		Array.from(btns, btn => btn.addEventListener('click', () => {

			Array.from(btns, _btn => _btn.classList.toggle('is-active', _btn === btn));

		}));

	}

})(document.querySelector('.shipping-calculator'));