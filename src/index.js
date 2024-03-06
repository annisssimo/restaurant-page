import { generateHomePage } from './homepage';
import { generateMenuPage } from './menu';
import { generateAboutPage } from './about';
import { generateBookingForm } from './book-form';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
  generateHomePage();

  const homeBtn = document.querySelector('.home.link');
  const menuLink = document.querySelector('.menu.link');
  const aboutLink = document.querySelector('.about.link');
  const bookTableLink = document.querySelector('.book-btn.inheader');

  homeBtn.addEventListener('click', () => generateHomePage());
  menuLink.addEventListener('click', () => generateMenuPage());
  aboutLink.addEventListener('click', () => generateAboutPage());
  bookTableLink.addEventListener('click', () => generateBookingForm());
});
