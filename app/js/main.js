const header = document.querySelector(".header");
const navLogo = document.querySelector(".nav__logo");
const navItems = document.querySelectorAll(".nav__item");
const navMenu = document.querySelector(".nav__container");
const navHamburger = document.querySelector(".nav__hamburger");

const checkWidth = () => {
	const windowWidth = document.body.clientWidth;

	if (windowWidth >= 768) {
		navMenu.classList.remove("nav__container--active");
		navHamburger.classList.remove("nav__hamburger--active");
	}
};

const checkScroll = () => {
	const windowScroll = window.scrollY;
	const headerHeight = header.getBoundingClientRect().height;

	windowScroll >= headerHeight ? header.classList.add("header--scrolled") : header.classList.remove("header--scrolled");
};

navLogo.addEventListener("click", () => {
	navMenu.classList.remove("nav__container--active");
	navHamburger.classList.remove("nav__hamburger--active");
});

navItems.forEach((item) =>
	item.addEventListener("click", () => {
		navMenu.classList.remove("nav__container--active");
		navHamburger.classList.remove("nav__hamburger--active");
	})
);

navHamburger.addEventListener("click", () => {
	navMenu.classList.toggle("nav__container--active");
	navHamburger.classList.toggle("nav__hamburger--active");
});

window.addEventListener("resize", checkWidth);
window.addEventListener("scroll", checkScroll);
