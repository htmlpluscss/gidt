( elems => {

	if(!elems.length) {

		return;

	}

	const script = document.createElement('script');
	script.src = '/js/inputmask.min.js';
	script.onload = () => {

		Array.from(elems, el => {

			let maskInput;

			if(el.classList.contains('inputmask--phone')) {

				maskInput = new Inputmask({
					mask: "+7 (999) 999-99-99",
					showMaskOnHover: false
				});

			}

			maskInput.mask(el);

		});

	};

	document.head.appendChild(script);

})(document.querySelectorAll('.inputmask'));