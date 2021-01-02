( elems => {

	if(!elems.length) {

		return;

	}

	Array.from(elems, el => {

		el.addEventListener('mouseenter', () => document.body.classList.add('overlay'));
		el.addEventListener('mouseleave', () => document.body.classList.remove('overlay'));

	});

})(document.querySelectorAll('.overlay-on'));