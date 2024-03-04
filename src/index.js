import { generateHomePage } from './homepage';
import { generateMenuPage } from './menu';
import './styles/style.css';

// Generate the home page immediately
generateHomePage();

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const homeBtn = document.querySelector('.home');
  const menuBtn = document.querySelector('.menu-button');
  const menuLink = document.querySelector('.menu.link');

  homeBtn.addEventListener('click', () => {
    content.innerHTML = '';
    generateHomePage();
  });

  menuBtn.addEventListener('click', () => generateMenuPage());
  menuLink.addEventListener('click', () => generateMenuPage());
});
