import FirstItemImg from './img/menu-item-1.png';
import SecondItemImg from './img/menu-item-2.png';
import ThirdItemImg from './img/menu-item-3.png';
import FourthItemImg from './img/menu-item-4.png';

export function generateMenuPage() {
    content.innerHTML = '';
    content.classList.remove('flex');

    const heading = document.createElement('h1');
    heading.className = 'menu-heading';
    heading.textContent = 'Our Special Dishes';

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');
    
    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem4 = document.createElement('div');

    menuItem1.classList.add('menu-item');
    menuItem2.classList.add('menu-item');
    menuItem3.classList.add('menu-item');
    menuItem4.classList.add('menu-item');

    const firstItemImg = document.createElement('img');
    const secondItemImg = document.createElement('img');
    const thirdItemImg = document.createElement('img');
    const fourthItemImg = document.createElement('img');

    firstItemImg.classList.add('menu-item-img');
    secondItemImg.classList.add('menu-item-img');
    thirdItemImg.classList.add('menu-item-img');
    fourthItemImg.classList.add('menu-item-img');

    firstItemImg.src = FirstItemImg;
    secondItemImg.src = SecondItemImg;
    thirdItemImg.src = ThirdItemImg;
    fourthItemImg.src = FourthItemImg;

    const firstItemHeading = document.createElement('h3');
    const secondItemHeading = document.createElement('h3');
    const thirdItemHeading = document.createElement('h3');
    const fourthItemHeading = document.createElement('h3');

    firstItemHeading.textContent = 'Lumpia with Suace';
    secondItemHeading.textContent = 'Fish and Veggie';
    thirdItemHeading.textContent = 'Tofu Chili';
    fourthItemHeading.textContent = 'Egg and Cocumber';

    const firstItemDescription = document.createElement('p');
    const secondItemDescription = document.createElement('p');
    const thirdItemDescription = document.createElement('p');
    const fourthItemDescription = document.createElement('p');

    firstItemDescription.classList.add('menu-item-description');
    secondItemDescription.classList.add('menu-item-description');
    thirdItemDescription.classList.add('menu-item-description');
    fourthItemDescription.classList.add('menu-item-description');

    firstItemDescription.textContent = 'Delight in the exquisite flavors of our Lumpia, a Filipino spring roll filled with a savory blend of minced meat and vegetables. Crispy on the outside, tender on the inside, and served with a delectable sauce that perfectly complements the rich and flavorful filling.';
    secondItemDescription.textContent = 'Immerse yourself in a culinary journey with our Fish and Veggie dish. Savor the freshness of succulent fish, expertly seasoned and grilled to perfection, accompanied by a vibrant medley of crisp, colorful vegetables. A wholesome and nutritious choice for those meal.';
    thirdItemDescription.textContent = 'Experience the bold and spicy kick of our Tofu Chili. Tender tofu cubes are bathed in a zesty chili sauce, creating a fusion of flavors that will tantalize your taste buds. A vegetarian delight that proves plant-based dishes can be both hearty and satisfying.';
    fourthItemDescription.textContent = 'Indulge in the simplicity of our Egg and Cucumber creation. Soft-boiled eggs are paired with crisp cucumber slices, offering a refreshing and light option that is perfect for those seeking a clean and uncomplicated dining experience.';

    content.appendChild(heading);
    content.appendChild(menuItemsContainer);

    menuItemsContainer.appendChild(menuItem1);
    menuItemsContainer.appendChild(menuItem2);
    menuItemsContainer.appendChild(menuItem3);
    menuItemsContainer.appendChild(menuItem4);

    menuItem1.appendChild(firstItemImg);
    menuItem2.appendChild(secondItemImg);
    menuItem3.appendChild(thirdItemImg);
    menuItem4.appendChild(fourthItemImg);

    menuItem1.appendChild(firstItemHeading);
    menuItem2.appendChild(secondItemHeading);
    menuItem3.appendChild(thirdItemHeading);
    menuItem4.appendChild(fourthItemHeading);

    menuItem1.appendChild(firstItemDescription);
    menuItem2.appendChild(secondItemDescription);
    menuItem3.appendChild(thirdItemDescription);
    menuItem4.appendChild(fourthItemDescription);
}