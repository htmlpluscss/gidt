( elems => {

	if(!elems.length) {

		return;

	}

	Array.from(elems, el => {

		el.addEventListener('mouseenter', () => document.body.classList.add('modal-show'));
		el.addEventListener('mouseleave', () => document.body.classList.remove('modal-show'));

	});

})(document.querySelectorAll('.overlay-on'));