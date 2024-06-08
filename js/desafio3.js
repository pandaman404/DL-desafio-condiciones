const passwordFormHTML = document.getElementById('passwordForm');
const passwordMessageHTML = document.getElementById('passwordFormMessage');

passwordFormHTML.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let formData = Object.fromEntries(new FormData(event.target));
  const password = concatFormValues(formData);
  renderPasswordFormMessage(password);
  passwordFormHTML.reset();
}

function concatFormValues(formData) {
  let result = '';
  for (let input in formData) {
    if (formData.hasOwnProperty(input)) {
      result += formData[input];
    }
  }
  return result;
}

function renderPasswordFormMessage(password) {
  if (password.toString() === '911') {
    return (passwordMessageHTML.innerHTML = 'password 1 correcto');
  }
  if (password.toString() === '714') {
    return (passwordMessageHTML.innerHTML = 'password 2 correcto');
  }
  return (passwordMessageHTML.innerHTML = 'password incorrecto');
}
