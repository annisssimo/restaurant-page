import { generateHomePage } from './homepage';
import { generateMenuPage } from './menu';
import { generateAboutPage } from './about';
import { generateBookingForm } from './book-form';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
  generateHomePage();
  const homeBtn = document.querySelector('.home.link');
  const menuBtn = document.querySelector('.menu-button');
  const menuLink = document.querySelector('.menu.link');
  const aboutLink = document.querySelector('.about.link');
  const bookTableBtns = document.querySelectorAll('.book-btn');

  homeBtn.addEventListener('click', () => generateHomePage());
  menuBtn.addEventListener('click', () => generateMenuPage());
  menuLink.addEventListener('click', () => generateMenuPage());
  aboutLink.addEventListener('click', () => generateAboutPage());
  
  bookTableBtns.forEach(button =>  {
    button.addEventListener('click', () => generateBookingForm());
  });
});
