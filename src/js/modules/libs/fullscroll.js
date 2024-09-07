import Swiper, { Pagination, Scrollbar, Keyboard, Mousewheel, Parallax } from "swiper";

Swiper.use([Pagination, Scrollbar, Keyboard, Mousewheel, Parallax]);

let pageSlider = new Swiper('.page', {
	wrapperClass: 'page__wrapper',
	slideClass: "page__section",

	direction: "vertical",

	slidesPerView: 'auto',

	parallax: true,

	// Керування за допомогою клавіатури
	keyboard: {
		// Ввімкнути/вимкнути
		enabled: true,
		// Коли слайдер у спостерігаємій частині
		onlyInViewport: true,
		// За допомогою PageUp, PageDown
		pageUpDown: true,
	},

	mousewheel: {
		// Чутливість
		sensitivity: 1,
		// Клас об'єкта на котрому буде спрацьовувати прокрутка мишею
		// eventsTarget: ".image-slider",
	},
	watchOverflow: true,
	speed: 800,

	observer: true,
	observeParents: true,
	observeSlideChildren: true,

	pagination: {
		el: '.page__pagination',
		// Чи можна натиснути на булети
		clickable: true,
		bulletClass: 'page__bullet',
		bulletActiveClass: 'page__bullet_active',
		// // Динамічні булети
		// dynamicBullets: true,
		// // Кастомні булети
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
		// Фракція
		// type: 'fraction',
		// // Кастомний вивід фракцій
		// renderFraction: function (currentClass, totalClass) {
		// 	return "Фото <span class='" + currentClass + "'></span>" + ' з ' + '<span class="' + totalClass + '"></span>';
		// },
		// // Прогресбар
		type: 'bullets',

	},
	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		// Можна таскати
		draggable: true,
	},
})