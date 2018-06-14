let burgerContainerSelector = document.querySelector('.burger_container');
let burgerMenuSelector = document.querySelector('.burger_menu');
let closeSelector = document.querySelector('.close');
let backToTheTopSelector = document.querySelector('.backToTheTop');

burgerContainerSelector.addEventListener('click', () => {
	burgerMenuSelector.style.display = "block";
});

closeSelector.addEventListener('click', () => {
	burgerMenuSelector.style.display = "none";
});

const scrollToTop = () => {
	if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
		window.scrollBy(0, -50);
		timeOut = setTimeout('scrollToTop()', 10);
	} else clearTimeout(timeOut);
}

backToTheTopSelector.addEventListener('click', () => {
	scrollToTop();
});


window.onscroll = function () {
	Scroll()
};

var navbar = document.querySelector('.row1');

var sticky = navbar.offsetTop;

function Scroll() {
	var st = window.pageYOffset || document.documentElement.scrollTop;
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}

	if (st > lastScrollTop) {
		document.getElementById(".sticky").style.display = "none"
	} else {
		document.getElementById(".sticky").style.display = "block"
	}
	lastScrollTop = st;
}

var lastScrollTop = 0;

window.addEventListener("scroll", function () {


}, false);