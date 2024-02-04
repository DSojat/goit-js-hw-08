const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Обрізані значення слід призначити змінним
  const userEmail = event.currentTarget.elements.email.value.trim();
  const userPassword = event.currentTarget.elements.password.value.trim();

  if (userEmail === '' || userPassword === '') {
    return alert('Усі поля форми повинні бути заповнені');
  }

  // userData - краще іменування змінних
  const userData = {
    email: userEmail,
    password: userPassword,
  };

  console.log(userData);
  loginForm.reset();
}
