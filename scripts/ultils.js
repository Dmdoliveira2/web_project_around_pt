
function handleEscapeKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened'); 
    if (openedPopup) {
      closeModal(openedPopup);
    } 
  }
}

// Função para abrir modal
export function openModal(modal) {
  if (!modal) return;
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscapeKey);
}

// Função para fechar modal
export function closeModal(popup) {
  if (!popup) return;
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscapeKey);
}

// Função para fechar modal ao clicar no overlay (fundo escuro)
export function handleOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}
