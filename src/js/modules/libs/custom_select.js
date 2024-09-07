// custom select

import Choices from "choices.js";

const controls = document.querySelectorAll('.control');
if (controls.length > 0) {
	controls.forEach(Item => {
		const defaultSelect = () => {
			const choices = new Choices(Item, {
				searchEnabled: false,
			});
		};

		defaultSelect();
	})
}

