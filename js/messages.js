const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

function onBodyClick (evt) {
  if(evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }
  hideMessage();
}

const onDocumentKeydown = (evt) => {
  if(evt.key==='Escape'){
    hideMessage();
  }
};

function hideMessage () {
  const messageElement = document.querySelector('.success') ||  document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onBodyClick);
}

function showMessage (messageElement, closeButtonClass) {
  body.append(messageElement);
  document.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onBodyClick);
  messageElement.querySelector(closeButtonClass).addEventListener('click', hideMessage);
}

const showSuccessMessage = () => showMessage(successMessage, '.success__button');
const showErrorMessage = () => showMessage(errorMessage, '.error__button');

export {showErrorMessage, showSuccessMessage};

