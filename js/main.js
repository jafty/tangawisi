const formEndpoint = 'https://formspree.io/f/japhet.situmonana@gmail.com';

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
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalContent = submitButton.innerHTML;

    if (formEndpoint.includes('japhet.situmonana@gmail.com')) {
      alert(
        "⚠️ Configuration requise : créez un formulaire sur Formspree.io et remplacez 'japhet.situmonana@gmail.com' dans js/main.js."
      );
      return;
    }

    const data = new FormData(form);
    submitButton.innerHTML =
      '<i class="fas fa-circle-notch fa-spin"></i> ENVOI EN COURS...';
    submitButton.disabled = true;

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        successMessage.classList.remove('hidden');
        form.reset();
      } else {
        errorMessage.classList.remove('hidden');
      }
    } catch (error) {
      errorMessage.classList.remove('hidden');
    } finally {
      submitButton.innerHTML = originalContent;
      submitButton.disabled = false;
    }
  });
}
