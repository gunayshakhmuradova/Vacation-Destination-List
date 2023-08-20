(function() {
    "use strict";
    const detailsForm = document.querySelector('#destination_details_form');
const wishListContainer = document.querySelector('#destinations_container');
const constantPhotoUrl = 'images/signpost.jpg';

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const destName = event.target.elements['name'].value;
    const destLocation = event.target.elements['location'].value;
    const destPhoto = event.target.elements['photo'].value;
    const destDesc = event.target.elements['description'].value;

    for (var i = 0; i < detailsForm.length; i++) {
       detailsForm.elements[i].value = '';
    }

    const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    wishListContainer.appendChild(destCard);

    if (wishListContainer.children.length === 1) {
        document.querySelector('#title').innerHTML = "My Wish List";
    }
}

function createDestinationCard(name, location, photoURL, description) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const img = document.createElement('img');
    img.setAttribute('alt', name);
    img.setAttribute('src', photoURL.length === 0 ? constantPhotoUrl : photoURL);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length > 0) {
        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    const cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText = 'Remove';
    cardDeleteBtn.addEventListener('click', () => removeDestination(card));
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}

function removeDestination(event) {
    const card = event.parentElement.parentElement;
    card.remove();
}

})();

