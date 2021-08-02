const buttonListMenu = document.querySelector('.buttons-list');
const content = document.querySelector('.content');
const itemListMenu = document.querySelectorAll('.item-list');

const menuButtons = () => {
    buttonListMenu.classList.toggle('active');
    content.classList.toggle('active');
    itemListMenu.forEach(menu => menu.classList.toggle('active'))
    
}

buttonListMenu.addEventListener('click', menuButtons)
/*itemListMenu.forEach(menu => menu.addEventListener('click', menuButtons))*/

const dateYear = new Date();
document.querySelector('.footer').innerHTML = dateYear.getFullYear();