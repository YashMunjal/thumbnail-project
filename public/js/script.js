const loginForm = document.getElementById('login-form');

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
      alert('Login Sucessfull')
      //* Note: Login Sucess.... redirect user 
    }
    else {
      alert(response.error)
    }

  } catch (err) {
    // Handle Err
  }
}

// Event Listners
loginForm.addEventListener('submit', handleLoginFormSubmit);