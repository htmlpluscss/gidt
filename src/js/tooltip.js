( tooltips => {

	if(tooltips.length){

		const ico = document.createElement('span'),
			  icoInfo = document.createElement('span');

		ico.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 11A5 5 0 106 1a5 5 0 000 10zm-.93-6.43H3.86c0-1.28.91-2.14 2.28-2.14 1.28 0 2.15.82 2.15 1.93 0 .72-.3 1.24-.93 1.64-.6.37-.83.53-.83 1l.03.43H5.4l-.05-.44c-.06-.77.26-1.17.87-1.56.58-.37.72-.55.72-1 0-.5-.36-.85-.93-.85-.57 0-.9.46-.93 1zM6.79 8.9c0 .5-.3.82-.8.82s-.82-.31-.82-.82c0-.5.31-.82.81-.82s.81.31.81.82z"/></svg>';

		icoInfo.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.81A5.81 5.81 0 118 2.2 5.81 5.81 0 018 13.8z"/><path d="M7.25 5.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM8.38 7h-.76a.13.13 0 00-.12.13v4.25c0 .06.06.12.13.12h.75c.06 0 .12-.06.12-.13V7.13A.13.13 0 008.37 7z"/></svg>';

		let observer = new MutationObserver(mutationRecords => {

			const t = mutationRecords[0].target,
				  rect = t.getBoundingClientRect();

			console.log(rect.left > window.innerWidth - rect.right);

		});

		Array.from(tooltips, tooltip => {

			const btn = tooltip.querySelector('.tooltip-help__btn');

			if(tooltip.classList.contains('tooltip-help--info')){

				btn.appendChild(icoInfo.cloneNode(true));

			}
			else {

				btn.appendChild(ico.cloneNode(true));

			}

			observer.observe(tooltip, {

				attributes : true

			});

			tooltip.addEventListener('mouseenter', () => {

				if(window.innerWidth > 1200) {

					tooltip.open = true;

				}

			});

			tooltip.addEventListener('mouseleave', () => {

				if(window.innerWidth > 1200) {

					tooltip.open = false;

				}

			});

		});

		window.addEventListener("click", event => {

			const target = event.target.closest('.tooltip-help');

			Array.from(tooltips, tooltip => {

				if(target !== tooltip) {

					tooltip.open = false;

				}

			});

		});

	}

})(document.querySelectorAll('.tooltip-help'));