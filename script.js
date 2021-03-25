const menuButton = document.querySelector('.toggle');
const menu = document.querySelector('.menu-container');

const toggleMenu = (e) => {
  console.log(e);
  menu.classList.toggle('opened');
};

menuButton.addEventListener('click', toggleMenu);
