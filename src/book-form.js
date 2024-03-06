export function generateBookingForm() {

    const bookModal = document.createElement("dialog");

    // Create form element
    const form = document.createElement("form");
    form.setAttribute("id", "bookingForm");

    // Create input for name
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameLabel.appendChild(nameInput);

    // Create input for number of guests
    const guestsLabel = document.createElement("label");
    guestsLabel.textContent = "Number of Guests:";
    const guestsInput = document.createElement("input");
    guestsInput.setAttribute("type", "number");
    guestsInput.setAttribute("name", "guests");
    guestsLabel.appendChild(guestsInput);

    // Create input for date
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date:";
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date");
    dateLabel.appendChild(dateInput);

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Book Now";

    // Append elements to the form
    bookModal.appendChild(form);
    form.appendChild(nameLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(guestsLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(dateLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitButton);

    document.body.appendChild(bookModal);
    bookModal.showModal();

    document.addEventListener('click', function(event) {
        if (event.target === bookModal) {
            bookModal.close();
        }
    });
}