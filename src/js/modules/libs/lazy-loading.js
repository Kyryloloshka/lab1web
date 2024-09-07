

const lazyImages = document.querySelectorAll('[data-src], source[data-srcset]'); //? Для картинок додати цей дата атрибут зі значенням шляху до картинки
const loadMapBlock = document.querySelector('._load-map'); //? Для оболонки мапи треба додати клас  _load-map
const windowHeight = document.documentElement.clientHeight;
const loadMoreBlock = document.querySelector('._load-more'); //? Для оболонки контенту в яку буде додаватись контент треба додати клас load-more'

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPositions.push(img.getBoundingClientRect().top + scrollY);
			lazyScrollCheck();
		}
	});
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
	if (document.querySelectorAll('[data-src], source[data-srcset]').length > 0) {
		lazyScrollCheck();
	}
	if (!loadMapBlock.classList.contains('_loaded')) {
		getMap();
	}
	if (!loadMoreBlock.classList.contains('_loading')) {
		loadMore();
	}

}

function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex(
		item => scrollY > item - windowHeight
	);
	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.src) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPositions[imgIndex];
	}
}

function getMap() {
	const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + scrollY;
	if (scrollY > loadMapBlockPos - windowHeight) {
		const loadMapUrl = loadMapBlock.dataset.map;
		if (loadMapUrl) {
			loadMapBlock.insertAdjacentHTML(
				'beforeend',
				`<iframe src="${loadMapUrl}" style="border: 0" allowfullscreen="" loading="lazy"></iframe>`
			);
			loadMapBlock.classList.add('_loaded');
		}
	}
}

function loadMore() {
	const loadMoreBlockPos = loadMoreBlock.getBoundingClientRect().top + scrollY;
	const loadMoreBlockHeight = loadMoreBlock.offsetHeight;
	if (scrollY > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight) {
		getContent();
	}
}

async function getContent() {
	if (!document.querySelector('._loading-icon')) {
		loadMoreBlock.insertAdjacentHTML(
			'beforeend',
			`<div class="_loading-icon"></div>`
		)
	}
	loadMoreBlock.classList.add('_loading');

	let response = await fetch('_more.html', { //? Щоб було все нормально треба створити файл html з такою назвою для того щоб працювало
		method: 'GET',
	});
	if (response.ok) {
		let result = await response.text();
		loadMoreBlock.insertAdjacentHTML('beforeend', result);
		loadMoreBlock.classList.remove('_loading');
		if (document.querySelector('._loading-icon')) {
			document.querySelector('._loading-icon').remove();
		}
	} else {
		alert('Помилка');
		document.querySelector('._loading-icon').remove();
	}
}