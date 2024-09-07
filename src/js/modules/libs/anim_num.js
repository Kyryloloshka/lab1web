

window.addEventListener("load", windowLoad);

function windowLoad() {

	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll('[data-digits-counter]');
		if (digitsCounters) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}

		function digitsCountersAnimate(digitsCounter) {
			let startTimetamp = null;
			const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
			const startValue = parseInt(digitsCounter.innerHTML);
			const startPos = 0;
			const step = (timestamp) => {
				if (!startTimetamp) startTimetamp = timestamp;
				const progress = Math.min((timestamp - startTimetamp) / duration, 1);
				digitsCounter.innerHTML = Math.floor(progress * (startPos + startValue));
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}
	}
	// digitsCountersInit();

	let options = {
		threshold: 0.3,
	}
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const targetElem = entry.target;
				const digitsCountersItems = targetElem.querySelectorAll('[data-digits-counter]')
				if (digitsCountersInit.length) {
					digitsCountersInit(digitsCountersItems);
				}
				//todo Вимкнути відслідковування після спрацьовування
				// observer.unobserve(targetElem);
			}
		});
	}, options);

	//todo Клас секції в якій знаходиться елемент з атрибутом data-digits-counter треба треба вставити сюди
	//!                                             \/
	let sections = document.querySelectorAll('.page__section');
	if (sections.length) {
		sections.forEach(section => {
			observer.observe(section);
		});
	}
}