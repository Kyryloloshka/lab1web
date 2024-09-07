// import Swiper JS
// Navigation, Pagination, Scrollbar, HashNavigation, Keyboard, Mousewheel, FreeMode, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCoverflow, Parallax, Thumbs
import Swiper, { Pagination, Autoplay, Parallax } from 'swiper';

Swiper.use([Pagination, Autoplay, Parallax]);

if (document.querySelector('.__slider')) {
	new Swiper('.__slider', {
		// Безкінечність
		loop: true,

		// Оновити свайпер
		observer: true,
		observeParents: true,
		observeSlideChildren: true,

		// Navigation arrows
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		parallax: true,

		pagination: {
			el: '.__dotts',
			// Чи можна натиснути на булети
			clickable: true,
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
			// type: 'progressbar',
		},
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// 	// Можна таскати
		// 	draggable: true,
		// },
		// Включення/відключення
		// Перетаскування на ПК
		simulateTouch: true,
		// Чуйність властивості
		touchRatio: 1,
		// Кут спрацьовування перетаскування
		touchAngle: 45,
		// Курсор перетаскування
		grabCursor: true,

		// Переключення при кліці на слайдер
		slideToClickedSlide: false,

		// Навігація по хешу. Якщо потрібно то до слайдів додати data-hesh='slide-$'
		// hashNavigation: {
		// 	// Відстежувати стан
		// 	watchState: true,
		// },
		// Керування за допомогою клавіатури
		// keyboard: {
		// 	// Ввімкнути/вимкнути
		// 	enabled: true,
		// 	// Коли слайдер у спостерігаємій частині
		// 	onlyInViewport: true,
		// 	// За допомогою PageUp, PageDown
		// 	pageUpDown: true,
		// },
		// Керування колесом миші
		// mousewheel: {
		// 	// Чутливість
		// 	sensitivity: 1,
		// 	// Клас об'єкта на котрому буде спрацьовувати прокрутка мишею
		// 	eventsTarget: ".image-slider",
		// },
		// Авто висота
		// autoHeight: true,

		// Кількість слайдів для показу. Можна вказувати дробні числа
		slidesPerView: 1,

		// Відступ між слайдерами в пікселях відносно розміру наповнення
		spaceBetween: 50,

		// Кільість пролистуваних слайдів
		slidesPerGroup: 1,

		// Активний слайд по центру
		centeredSlides: false,

		// Можна зупинитися де хочеться)
		// freeMode: true,
		// Авто прокрутка
		autoplay: {
			// Затримка автопрогравання
			delay: 4000,
			// Закінчити на останньому слайді
			stopOnLastSlide: false,
			// Відключити після ручного переключення
			disableOnInteraction: false,
		},

		// Швидкість перелистування
		speed: 1000,

		// Вертикальний слайдер
		// direction: 'vertical',

		// Ефект переключення - Зміна прозорості
		// effect: 'fade',

		// // Доповнення до fade
		// fadeEffect: {
		// 	// Паралельна зміна прозорості
		// 	crossFade: true,
		// }
		// Ефект переключення - Зміна прозорості
		// effect: 'flip',

		// flipEffect: {
		// 	// Тінь
		// 	slideShadows: true,
		// 	// Показувати тільки активний слайд
		// 	limitRotation: true
		// },
		// Ефект переключення - гортається, як кубик
		// effect: 'cube',

		// cubeEffect: {
		// 	// Тінь
		// 	slideShadows: true,
		// 	shadow: true,
		// 	shadowOffset: 20,
		// 	shadowScale: 0.94,
		// },
		// Ефект потоку
		// effect: 'coverflow',

		// coverflowEffect: {
		// 	// Кут
		// 	rotate: 20,
		// 	// Накладання
		// 	stretch: 50,
		// 	// Тінь
		// 	slideShadows: true,
		// },

		// Брейкпоінти
		// breakpoints: {
		// 	70: {
		// 		slidesPerView: 1,
		// 	},
		// 	480: {
		// 		slidesPerView: 2,
		// 	},
		// 	992: {
		// 		slidesPerView: 3,
		// 	},
		// 	1200: {
		// 		slidesPerView: 3,
		// 	},
		// }

		// on: {
		// 	init: function (swiper) {
		// 		const allSlides = document.querySelector('.fraction-controll__all');
		// 		const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)')
		// 		allSlides.innerHTML = allSlidesItems.length < 10 ? (`${allSlidesItems.length}`) : allSlidesItems.length;
		// 	},
		// 	slideChange: function (swiper) {
		// 		const currentSlide = document.querySelector('.fraction-controll__current');
		// 		currentSlide.innerHTML = (swiper.realIndex + 1) < 10 ? (`0${swiper.realIndex + 1}`) : swiper.realIndex + 1;
		// 	}
		// }
	});
}
