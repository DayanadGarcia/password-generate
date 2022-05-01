const sliderElement = document.querySelector('#slider');
const buttonSelector = document.querySelector('#button');
const sizePassword = document.querySelector('#size');
const password = document.querySelector('#password');
const containerPassword = document.querySelector('#container-password');

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?/+-';

let newPassword = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
 sizePassword.innerHTML = this.value;
 // o sizePassword receberá/exibirá o valor que está atualmente no slider
}

const generatePassword = () => {
  let pass = '';

  for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove('hide');
  password.innerHTML = pass;
  newPassword = pass;
}

const copyPassword = () => {
  alert('Senha copiada com sucesso!');
  navigator.clipboard.writeText(newPassword);
}