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
    name: "Montanhas Calcareas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_british-columbia.jpg",
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
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago-di-braies.jpg",
  },
];

initialCards.forEach(function (item) {
  console.log(item.nome);
});

const editProfile = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-popup");
const closeButton = editModal.querySelector(".popup__close");

function openEditModal() {
  editModal.classList.add("popup_is-opened");
}
function closeEditModal() {
  editModal.classList.remove("popup_is-opened");
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
