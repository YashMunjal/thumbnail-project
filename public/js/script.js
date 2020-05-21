const loginForm = document.getElementById('login-form');
const alertBox = document.getElementById('alert-box');

const usernameInputField = document.getElementById('username-input-field');
const passwordInputField = document.getElementById('password-input-field');


// Event Handlers
const handleLoginFormSubmit = async (e) => {
  e.preventDefault();
  const username = usernameInputField.value;
  const password = passwordInputField.value;

  try {

    const loginApiOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }

    const response = await (await fetch('/api/auth/login', loginApiOptions)).json();
    if (response.status === "success") {
      window.localStorage.setItem('token', response.token);
      window.location.href = '/app.html';

    }

  } catch (err) {
    // Handle Err
    alertBox.innerHTML = `<div class="aler alert-danger">${response.error}</div>`
  }
}

// Event Listners
loginForm.addEventListener('submit', handleLoginFormSubmit);
