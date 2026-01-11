const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const editProfile = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-popup");
const closeButton = editModal.querySelector(".popup__close");
const cardTemplate = document.querySelector('#template__cards');
const cardsContainer = document.querySelector(".cards__list");
const newCardForm = document.querySelector("#new-card-form");
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");
const newCardPopup = document.querySelector("#new-card-popup");
const addButton = document.querySelector('.profile__add-button');
const forms = document.getElementById('edit-profile-form');
const nameInput = document.getElementById('name-input');
const descriptionInput = document.getElementById('description-input');
const formButton = document.getElementById('form-button');
const nameError = document.getElementById('name-input-error');
const descriptionError = document.getElementById('description-input-error');
const createButton = newCardForm.querySelector('.popup__button');
const urlError = document.getElementById('url-input-error');
const cardNameError = document.querySelector('#popup-name-error');
const imageModal = document.querySelector("#image-popup");
const closeImageButton = imageModal.querySelector(".popup__close");

function handleCloseImageClick() {
  closeModal(imageModal);
  closeImageButton.removeEventListener("click", handleCloseImageClick);
} 

function handleImageClick(name, link) {
  const modalImage = imageModal.querySelector(".popup__image");
  const modalCaption = imageModal.querySelector(".popup__caption");
  modalImage.src = link;
  modalImage.alt = name;
  modalCaption.textContent = name;
  openModal(imageModal);
  closeImageButton.addEventListener("click", handleCloseImageClick);
}

closeButton.addEventListener("click", () => {
  closeModal(editModal);
});

function fillProfileForm() {
  const currentName = document.querySelector(".profile__title").textContent;
  document.querySelector(".popup__input_type_name").value = currentName;
  const currentJob = document.querySelector(
    ".profile__description"
  ).textContent;
  document.querySelector(".popup__input_type_description").value = currentJob;
}

function handleOpenEditModal() {
  fillProfileForm();
  resetFormValidation(forms, formButton);
  openModal(editModal);
}
editProfile.addEventListener("click", handleOpenEditModal);

const profileForm = editModal.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const newName = profileForm.querySelector(".popup__input_type_name").value;
  const newJob = profileForm.querySelector(
    ".popup__input_type_description"
  ).value;
  document.querySelector(".profile__title").textContent = newName;
  document.querySelector(".profile__description").textContent = newJob;
  closeModal(editModal);
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

function getCardElement(name, link) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector(".card__title").textContent = name;
  cardImage.addEventListener("click", () => {
    handleImageClick(name, link);
  });
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active");
  });
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  
  return cardElement;
}

function renderCard(name, link, cardsContainer) {
  const cardElement = getCardElement(name, link);
  cardsContainer.prepend(cardElement);
}

initialCards.forEach(item =>   {
  renderCard(item.name, item.link, cardsContainer);
});

addButton.addEventListener('click', () => {
  resetFormValidation(newCardForm, createButton);
  openModal(newCardPopup);
});

function openModal(popup) {
  if (!popup) return;
  popup.classList.add('popup_is-opened');
}
function closeModal(popup) {
  if (!popup) return;
  popup.classList.remove('popup_is-opened');
}

const newCardCloseButton = newCardPopup.querySelector('.popup__close');
if (newCardCloseButton) {
  newCardCloseButton.addEventListener('click', () => closeModal(newCardPopup));
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;
  renderCard(cardName, cardLink, cardsContainer);
  closeModal(newCardPopup);
  newCardForm.reset();
}

newCardForm.addEventListener("submit", handleCardFormSubmit);

function validateInput(inputElement, errorElement) {
  if (inputElement.validity.valid) {
    errorElement.textContent = '';
  } else {
    errorElement.textContent = inputElement.validationMessage;
  }
};


nameInput.addEventListener('input', () => {
  validateInput(nameInput, nameError);
});

descriptionInput.addEventListener('input', () => {
  validateInput(descriptionInput, descriptionError);
});

function toggleFormButton(formElement, buttonElement) {
  if (formElement.checkValidity()) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }
}
 
forms.addEventListener('input', () => {
  toggleFormButton(forms, formButton);
});

cardNameInput.addEventListener('input', () => {
  validateInput(cardNameInput, cardNameError);
  toggleFormButton(newCardForm, createButton);
}
);

cardLinkInput.addEventListener('input', () => {
  validateInput(cardLinkInput, urlError);
  toggleFormButton(newCardForm, createButton);
}
);

function handleOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
  popup.addEventListener('click', handleOverlayClick);
});

function handleEscapeKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened'); 
    if (openedPopup) {
      closeModal(openedPopup);
      document.removeEventListener('keydown', handleEscapeKey);
    } 
  }
}

function openModal(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscapeKey);
}




