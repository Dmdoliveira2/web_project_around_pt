class Card {
  // CONSTRUTOR: É como uma "ficha de pedido" - recebe os dados necessários
  constructor(data, cardSelector) {
    // Guardando os dados que foram passados
    this._name = data.name;        // Nome do lugar (ex: "Vale de Yosemite")
    this._link = data.link;        // Link da imagem
    this._cardSelector = cardSelector;  // Seletor do template (ex: "#template__cards")
  }

  // MÉTODO PRIVADO: Pega o template HTML do cartão
  _getTemplate() {
    // Busca o template no HTML e faz uma cópia dele
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  // MÉTODO PRIVADO: Adiciona os ouvintes de eventos (cliques nos botões)
  _setEventListeners() {
    // Quando clica no botão de curtir
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    // Quando clica no botão de deletar
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });

    // Quando clica na imagem
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick();
    });
  }

  // MÉTODO PRIVADO: O que acontece quando clica no botão de curtir
  _handleLikeClick() {
    this._likeButton.classList.toggle('card__like-button_is-active');
  }

  // MÉTODO PRIVADO: O que acontece quando clica no botão de deletar
  _handleDeleteClick() {
    this._element.remove();
  }

  // MÉTODO PRIVADO: O que acontece quando clica na imagem
  _handleImageClick() {
    // Busca o popup de imagem
    const imageModal = document.querySelector("#image-popup");
    const modalImage = imageModal.querySelector(".popup__image");
    const modalCaption = imageModal.querySelector(".popup__caption");
    
    // Preenche os dados da imagem no popup
    modalImage.src = this._link;
    modalImage.alt = this._name;
    modalCaption.textContent = this._name;
    
    // Abre o popup
    imageModal.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscapeKey);
  }

  // MÉTODO PRIVADO: Fecha popup com a tecla Escape
  _handleEscapeKey(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_is-opened');
      if (openedPopup) {
        openedPopup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscapeKey);
      }
    }
  }

  // MÉTODO PÚBLICO: Gera o cartão completo e pronto para usar
  generateCard() {
    // 1. Pega o template
    this._element = this._getTemplate();
    
    // 2. Busca os elementos dentro do cartão
    this._cardImage = this._element.querySelector('.card__image');
    this._likeButton = this._element.querySelector('.card__like-button');
    this._deleteButton = this._element.querySelector('.card__delete-button');
    
    // 3. Adiciona os ouvintes de eventos (os cliques)
    this._setEventListeners();
    
    // 4. Preenche os dados do cartão
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    
    // 5. Retorna o cartão pronto
    return this._element;
  }
}