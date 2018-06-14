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
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}

backToTheTopSelector.addEventListener('click', () => {
    scrollToTop();
});

