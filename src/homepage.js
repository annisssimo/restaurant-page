export function generateHomePage() {
    const contentDiv = document.getElementById('content');

    const homeTextDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const menuBtn = document.createElement('button');
    const bookBtn = document.createElement('button');

    const homeImagesDiv = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');

    homeTextDiv.classList.add('home-text');
    menuBtn.classList.add('menu-button');
    bookBtn.classList.add('book-btn');

    img1.setAttribute('src', '../src/img/main-photo.png');
    img2.setAttribute('src', '../src/img/dish.png');

    h1.textContent = "Best food for you in Annisssimo's";
    p.textContent = "Experience the finest dining with a touch of perfection at Annisssimo's restaurant. Our chefs craft exquisite dishes that tantalize your taste buds, and our warm ambiance ensures an unforgettable dining experience.";
    menuBtn.textContent = "Menu";
    bookBtn.textContent = "Book";

    contentDiv.appendChild(homeTextDiv);
    contentDiv.appendChild(homeImagesDiv);
    homeTextDiv.appendChild(h1);
    homeTextDiv.appendChild(p);
    homeTextDiv.appendChild(menuBtn);
    homeTextDiv.appendChild(bookBtn);

    homeImagesDiv.appendChild(img1);
    homeImagesDiv.appendChild(img2);
}