const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  if (nameValue === '' || emailValue === '' || passwordValue === '' || confirmPasswordValue === '') {
    errorMessage.textContent = 'Please fill in all fields.';
  } else if (passwordValue !== confirmPasswordValue) {
    errorMessage.textContent = 'Passwords do not match.';
  } else {
    // Perform signup logic here
    // Send form data to the server, etc.
    // Display success message to the user
    successMessage.textContent = 'Signup successful!';
    form.reset();
  }
});
