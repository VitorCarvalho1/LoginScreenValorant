const  inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

function handleChange() {
    const [username, password] = inputs;
  
    if (username.value && password.value.length >= 12) {
      button.removeAttribute('disabled');     
    } else {
      button.setAttribute('disabled', '')
    }
  }
inputs.forEach((input) => input.addEventListener('input', handleChange));



