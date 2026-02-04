
import Card from './card.js';
import FormValidator from './validade.js';
import { openModal, closeModal, handleOverlayClick } from './ultils.js';

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

// CONFIGURAÇÕES para a validação dos formulários
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

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
  editProfileValidator.resetValidation();
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
  // Cria uma nova instância da classe Card
  const card = new Card({ name, link }, '#template__cards');
  // Retorna o cartão gerado
  return card.generateCard();
}

function renderCard(name, link, cardsContainer) {
  const cardElement = getCardElement(name, link);
  cardsContainer.prepend(cardElement);
}

initialCards.forEach(item =>   {
  renderCard(item.name, item.link, cardsContainer);
});

addButton.addEventListener('click', () => {
  newCardValidator.resetValidation();
  openModal(newCardPopup);
});

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

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
  popup.addEventListener('click', handleOverlayClick);
});

// CRIANDO INSTÂNCIAS DO FORMVALIDATOR PARA CADA FORMULÁRIO

// Validador para o formulário de edição de perfil
const editProfileValidator = new FormValidator(validationConfig, forms);
editProfileValidator.enableValidation();

// Validador para o formulário de novo cartão
const newCardValidator = new FormValidator(validationConfig, newCardForm);
newCardValidator.enableValidation();
