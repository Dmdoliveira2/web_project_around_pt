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

initialCards.forEach(function (item) {
  console.log(item.name);
});

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


 

function openEditModal() {
  editModal.classList.add("popup_is-opened");
}
function closeEditModal() {
  editModal.classList.remove("popup_is-opened");
}

function handleImageClick(name, link) {
  const imageModal = document.querySelector("#image-popup");
  const modalImage = imageModal.querySelector(".popup__image");
  const modalCaption = imageModal.querySelector(".popup__caption");
  modalImage.src = link;
  modalImage.alt = name;
  modalCaption.textContent = name;
  openModal(imageModal);
  const closeImageButton = imageModal.querySelector(".popup__close");
  closeImageButton.addEventListener("click", () => {
    closeModal(imageModal);
  });
  
}

editProfile.addEventListener("click", openEditModal);
closeButton.addEventListener("click", closeEditModal);

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
  closeEditModal();
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

function getCardElement(name = "Lugar sem nome", link = "./images/placeholder.jpg") {
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




