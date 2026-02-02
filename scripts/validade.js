class FormValidator {
  // CONSTRUTOR: Recebe as configurações e o formulário a ser validado
  constructor(config, formElement) {
    // Guardando as configurações (seletores e classes)
    this._config = config;
    this._formElement = formElement;
    
    // Buscando o botão de submit dentro do formulário
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    
    // Buscando todos os campos de input do formulário
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
  }

  // MÉTODO PRIVADO: Mostra a mensagem de erro
  _showInputError(inputElement) {
    // Busca o elemento de erro relacionado ao input
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
    // Verifica se o elemento de erro existe antes de usar
    if (!errorElement) return;
    
    // Adiciona a classe de erro no input
    inputElement.classList.add(this._config.inputErrorClass);
    
    // Mostra a mensagem de erro
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  // MÉTODO PRIVADO: Esconde a mensagem de erro
  _hideInputError(inputElement) {
    // Busca o elemento de erro relacionado ao input
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
    // Verifica se o elemento de erro existe antes de usar
    if (!errorElement) return;
    
    // Remove a classe de erro do input
    inputElement.classList.remove(this._config.inputErrorClass);
    
    // Limpa a mensagem de erro
    errorElement.textContent = '';
    errorElement.classList.remove(this._config.errorClass);
  }

  // MÉTODO PRIVADO: Verifica se o campo é válido
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      // Se não for válido, mostra o erro
      this._showInputError(inputElement);
    } else {
      // Se for válido, esconde o erro
      this._hideInputError(inputElement);
    }
  }

  // MÉTODO PRIVADO: Verifica se tem algum campo inválido
  _hasInvalidInput() {
    // Retorna true se ALGUM campo for inválido
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // MÉTODO PRIVADO: Altera o estado do botão de Submit
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      // Se tem campo inválido, desabilita o botão
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      // Se todos os campos são válidos, habilita o botão
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  // MÉTODO PRIVADO: Adiciona os ouvintes de eventos em cada input
  _setEventListeners() {
    // Verifica o estado inicial do botão
    this._toggleButtonState();

    // Para cada input do formulário
    this._inputList.forEach((inputElement) => {
      // Adiciona um ouvinte de evento no input
      inputElement.addEventListener('input', () => {
        // Verifica se o campo é válido
        this._checkInputValidity(inputElement);
        // Atualiza o estado do botão
        this._toggleButtonState();
      });
    });
  }

  // MÉTODO PÚBLICO: Habilita a validação do formulário
  enableValidation() {
    // Previne o comportamento padrão do formulário
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    // Adiciona os ouvintes de eventos
    this._setEventListeners();
  }

  // MÉTODO PÚBLICO: Reseta a validação do formulário
  resetValidation() {
    // Limpa todos os erros
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

    // Desabilita o botão
    this._toggleButtonState();
  }
}

// EXPORTANDO a classe FormValidator para ser usada em outros arquivos
export default FormValidator;