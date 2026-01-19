const form = document.getElementById('orderForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const resetButton = document.getElementById('resetFormButton');
const errorDismissButton = document.getElementById('errorDismissButton');

const hideMessages = () => {
  successMessage.classList.add('hidden');
  errorMessage.classList.add('hidden');
};

const resetForm = () => {
  form.reset();
  hideMessages();
};

if (resetButton) {
  resetButton.addEventListener('click', resetForm);
}

if (errorDismissButton) {
  errorDismissButton.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
  });
}

if (form) {
  form.addEventListener('submit', () => {
    hideMessages();
  });
}
