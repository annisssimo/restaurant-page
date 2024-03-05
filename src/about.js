export function generateAboutPage() {
    content.innerHTML = '';
    content.classList.add('flex');

    const aboutUsDiv = document.createElement('div');
    const mapAndAddressDiv = document.createElement('div');
    
    const welcomeHeading = document.createElement("h1");
    const welcomePara = document.createElement("p");
    
    const ourStoryHeading = document.createElement("h2");
    const ourStoryPara = document.createElement("p");
    
    const culinaryExcellenceHeading = document.createElement("h2");
    const culinaryExcellencePara = document.createElement("p");
    
    const warmHospitalityHeading = document.createElement("h2");
    const warmHospitalityPara = document.createElement("p");
    
    const visitUsHeading = document.createElement("h2");
    const visitUsPara = document.createElement("p");

    const contactInfoContainer = document.createElement("div");
    const address = "123 Main Street, Cityville, Country";
    const phone = "+123 456 7890";
    const email = "info@annisssimos.com";
    const businessHours = "Monday - Sunday: 12:00 PM - 10:00 PM";
    const iframe = document.createElement("iframe");

    welcomeHeading.textContent = "Welcome to Annisssimo's";
    welcomePara.textContent = "At Annisssimo's, we believe that great food brings people together. Since our establishment in 2004, our passion for culinary excellence and dedication to providing a memorable dining experience have been the heart and soul of our restaurant.";
    
    ourStoryHeading.textContent = "Our Story";
    ourStoryPara.textContent = "Founded in 2004, Annisssimo's has been a cornerstone in the culinary scene, offering a unique blend of flavors that captivate the senses. Our journey began with a vision to create a welcoming space where guests can savor exceptional dishes crafted with care and creativity.";
    
    culinaryExcellenceHeading.textContent = "Culinary Excellence";
    culinaryExcellencePara.textContent = "Led by our talented chefs, our kitchen is a hub of innovation and tradition. We source the finest ingredients to create dishes that not only satisfy your cravings but also leave a lasting impression. From classic favorites to chef-inspired creations, our menu reflects our commitment to culinary excellence.";
    
    warmHospitalityHeading.textContent = "Warm Hospitality";
    warmHospitalityPara.textContent = "At Annisssimo's, we believe in more than just great food; we believe in creating lasting memories. Our attentive and friendly staff is dedicated to ensuring that your dining experience is nothing short of extraordinary. From the moment you step through our doors, expect to be treated like family.";
    
    visitUsHeading.textContent = "Visit Us";
    visitUsPara.textContent = "We invite you to join us at Annisssimo's and experience the perfect fusion of flavors, warmth, and community. Whether you're celebrating a special occasion, enjoying a night out with friends, or simply craving a culinary adventure, we look forward to serving you.";

    
    welcomeHeading.className = 'about-heading';
    aboutUsDiv.className = 'about-us-div';
    contactInfoContainer.id = 'contact-info';

    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40092.828727803964!2d25.096477801999907!3d52.1935568476023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4727259bd7058d1d%3A0xddc6aeb83222d163!2sDrahi%C4%8Dyn%2C%20Brest%20Region!5e0!3m2!1sen!2sby!4v1709669196533!5m2!1sen!2sby";
    iframe.width = "600";
    iframe.height = "450";
    iframe.style.border = "0";
    iframe.allowfullscreen = "";
    iframe.loading = "lazy";
    iframe.referrerpolicy = "no-referrer-when-downgrade";
    
    content.appendChild(aboutUsDiv);
    content.appendChild(mapAndAddressDiv);

    aboutUsDiv.appendChild(welcomeHeading);
    aboutUsDiv.appendChild(welcomePara);
    aboutUsDiv.appendChild(ourStoryHeading);
    aboutUsDiv.appendChild(ourStoryPara);
    aboutUsDiv.appendChild(culinaryExcellenceHeading);
    aboutUsDiv.appendChild(culinaryExcellencePara);
    aboutUsDiv.appendChild(warmHospitalityHeading);
    aboutUsDiv.appendChild(warmHospitalityPara);

    mapAndAddressDiv.appendChild(visitUsHeading);
    mapAndAddressDiv.appendChild(visitUsPara);
    mapAndAddressDiv.appendChild(contactInfoContainer);
    mapAndAddressDiv.appendChild(iframe);

    const addressElement = document.createElement("p");
    addressElement.textContent = "Address: " + address;

    const phoneElement = document.createElement("p");
    phoneElement.textContent = "Phone: " + phone;

    const emailElement = document.createElement("p");
    emailElement.textContent = "Email: " + email;

    const businessHoursElement = document.createElement("p");
    businessHoursElement.textContent = "Business Hours: " + businessHours;

    // Append elements to the container
    contactInfoContainer.appendChild(addressElement);
    contactInfoContainer.appendChild(phoneElement);
    contactInfoContainer.appendChild(emailElement);
    contactInfoContainer.appendChild(businessHoursElement);
}