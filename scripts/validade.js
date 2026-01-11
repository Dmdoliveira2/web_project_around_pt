function resetFormValidation(formElement, buttonElement) {
  const errorElements = formElement.querySelectorAll('.popup__error');
  errorElements.forEach((errorElement) => {
    errorElement.textContent = '';
  });

  const inputElements = formElement.querySelectorAll('.popup__input');
  inputElements.forEach((inputElement) => {
    inputElement.classList.remove('popup__input_type_error'); 
  });

  buttonElement.disabled = true;
}

