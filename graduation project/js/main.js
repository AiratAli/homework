(function () {
	// Бургер

	document.addEventListener("click", burgerInit);

	function burgerInit(e) {
		const burgerIcon = e.target.closest(".burger-icon");
		const burgerNavLink = e.target.closest(".nav__link");

		if (!burgerIcon && !burgerNavLink) return;

		if (document.documentElement.clientWidth > 1200) return;

		if (!document.body.classList.contains("body--opened-menu")) {
			document.body.classList.add("body--opened-menu");
		} else {
			document.body.classList.remove("body--opened-menu");
		}
	}


	// Слайдер

	var swiper = new Swiper(".protein__slider", {
		direction: "vertical",
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,

		pagination: {
			el: ".protein__pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
	});


	// highlights__tab

	const tabControls = document.querySelector(".tab-controls");

	tabControls.addEventListener("click", toggleTab);

	function toggleTab(e) {
		const tabControl = e.target.closest(".tab-controls__link");

		if (!tabControl) return;
		e.preventDefault();
		if (tabControl.classList.contains("tab-controls__link--active")) return;

		const tabContentID = tabControl.getAttribute("href");
		const tabContent = document.querySelector(tabContentID);
		const activeControl = document.querySelector(".tab-controls__link--active");
		const activeContent = document.querySelector(".tab-content--show");

		if (activeControl) {
			activeControl.classList.remove("tab-controls__link--active");
		}
		if (activeContent) {
			activeContent.classList.remove("tab-content--show");
		}

		tabControl.classList.add("tab-controls__link--active");
		tabContent.classList.add("tab-content--show");
	}


	// timetable__tabs

	const tabsControl = document.querySelector(".tabs-control");

	tabsControl.addEventListener("click", toggleTabs);

	function toggleTabs(e) {
		const tabsControl = e.target.closest(".tabs-control__link");

		if (!tabsControl) return;
		e.preventDefault();
		if (tabsControl.classList.contains("tabs-control__link--active")) return;

		const tabsContentsID = tabsControl.getAttribute("href");
		const tabsContents = document.querySelector(tabsContentsID);
		const activeControls = document.querySelector(".tabs-control__link--active");
		const activeContents = document.querySelector(".table__body--show");

		if (activeControls) {
			activeControls.classList.remove("tabs-control__link--active");
		}
		if (activeContents) {
			activeContents.classList.remove("table__body--show");
		}

		tabsControl.classList.add("tabs-control__link--active");
		tabsContents.classList.add("table__body--show");
	}

})();
