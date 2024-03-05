import { generateHomePage } from './homepage';
import { generateMenuPage } from './menu';
import { generateAboutPage } from './about';
import './styles/style.css';

generateHomePage();

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const homeBtn = document.querySelector('.home.link');
  const menuBtn = document.querySelector('.menu-button');
  const menuLink = document.querySelector('.menu.link');
  const aboutLink = document.querySelector('.about.link');

  homeBtn.addEventListener('click', () => {
    content.innerHTML = '';
    generateHomePage();
  });
  menuBtn.addEventListener('click', () => generateMenuPage());
  menuLink.addEventListener('click', () => generateMenuPage());
  aboutLink.addEventListener('click', () => generateAboutPage());
});
