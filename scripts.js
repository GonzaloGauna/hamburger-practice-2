const btnclick = document.querySelector('.hamburguer-menu');
const navBar = document.querySelector('.navegation');

btnclick.addEventListener("click", () => {
    navBar.classList.toggle("change");
});