import MainPhoto from './img/main-photo.png';
import Dish from './img/dish.png';

export function generateHomePage() {
    content.innerHTML = '';

    const contentDiv = document.getElementById('content');

    const homeTextDiv = document.createElement('div');
    const headline = document.createElement('h1');
    const description = document.createElement('p');
    const menuBtn = document.createElement('button');
    const bookBtn = document.createElement('button');

    const homeImagesDiv = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');

    contentDiv.classList.add('flex');
    contentDiv.style.gap = '168px';
    homeTextDiv.classList.add('home-text');
    homeImagesDiv.classList.add('images-div');
    menuBtn.classList.add('menu-button');
    bookBtn.classList.add('book-btn');
    img1.id = 'main-photo';
    img2.id = 'dish';

    img1.src = MainPhoto;
    img2.src = Dish;

    headline.textContent = "Best food for you in Annisssimo's";
    description.textContent = "Experience the finest dining with a touch of perfection at Annisssimo's restaurant. Our chefs craft exquisite dishes that tantalize your taste buds, and our warm ambiance ensures an unforgettable dining experience.";
    menuBtn.textContent = "Menu";
    bookBtn.textContent = "Book";

    contentDiv.appendChild(homeTextDiv);
    contentDiv.appendChild(homeImagesDiv);
    homeTextDiv.appendChild(headline);
    homeTextDiv.appendChild(description);
    homeTextDiv.appendChild(menuBtn);
    homeTextDiv.appendChild(bookBtn);

    homeImagesDiv.appendChild(img1);
    homeImagesDiv.appendChild(img2);
}