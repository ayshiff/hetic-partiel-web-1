let burgerContainerSelector = document.querySelector('.burger_container');
let burgerMenuSelector = document.querySelector('.burger_menu');
let closeSelector = document.querySelector('.close');

burgerContainerSelector.addEventListener('click', () => {
    burgerMenuSelector.style.display = "block";
});

closeSelector.addEventListener('click', () => {
    burgerMenuSelector.style.display = "none";
});