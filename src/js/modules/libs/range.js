import * as noUiSlider from 'nouislider';

export function rangeInit() {

	const rangeItems = document.querySelectorAll('[data-range]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			const fromValue = rangeItem.querySelector('[data-range-from]');
			const toValue = rangeItem.querySelector('[data-range-to]');
			const item = rangeItem.querySelector('[data-range-item]');
			const inputs2 = [fromValue, toValue];
			noUiSlider.create(item, {
				range: {
					'min': [Number(fromValue.dataset.rangeFrom)],
					'max': [Number(toValue.dataset.rangeTo)]
				},
				step: 1,
				tooltips: [true, true],
				start: [Number(fromValue.value), Number(toValue.value)],
				connect: true,
			});
			item.noUiSlider.on('update', function (values, handle) {
				inputs2[handle].value = Math.round(values[handle]);
			});

			const setRangeSlider = (i, value) => {
				let arr = [null, null];
				arr[i] = value;

				console.log(arr);


				item.noUiSlider.set(arr);
			};

			inputs2.forEach((el, index) => {
				el.addEventListener("change", (e) => {
					setRangeSlider(index, e.currentTarget.value);
				})
			});
		})
	}


	// const priceSlider = document.querySelector('#range');
	// if (priceSlider) {
	// 	let textFrom = priceSlider.getAttribute('data-from');
	// 	let textTo = priceSlider.getAttribute('data-to');
	// 	noUiSlider.create(priceSlider, {
	// 		range: {
	// 			'min': [0],
	// 			'max': [2000000]
	// 		},
	// 		start: 0,
	// 		connect: [true, false],
	// 	});
	// 	function setPriceValues() {
	// 		let priceStartValue;
	// 		let priceEndValue;
	// 		if (priceStart.value != '') {
	// 			priceStartValue = priceStart.value;
	// 		}
	// 		if (priceEnd.value != '') {
	// 			priceEndValue = priceEnd.value;
	// 		}
	// 		priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
	// 	}
	// }
}
rangeInit();