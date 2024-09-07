const tabsBtn = document.querySelectorAll('[data-tabs-titles]>*');

const tabsItems = document.querySelectorAll('[data-tabs-body]>*');

tabsItems.forEach(function (item) {
	item.style.display = 'none';
});

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener('click', function () {
		let currentBtn = item;

		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabsItems.forEach(function (item) {
				item.classList.remove('active');
				item.style.display = 'none';
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
			const activeItem = document.querySelector('[data-tabs-body]>*.active');
			activeItem.style.display = 'block';
		}
	});
}

document.querySelector('[data-tabs-titles]>*').click();
//======================================================================================================
