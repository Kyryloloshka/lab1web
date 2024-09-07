const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu');
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('menu-open');
		menuBody.classList.toggle('menu-open');
		if (document.documentElement.classList.contains('catalog-open')) {
			document.documentElement.classList.remove('catalog-open')
		}
		if (document.documentElement.classList.contains('sub-menu-open')) {
			document.documentElement.classList.remove('sub-menu-open');
		}
	});
}