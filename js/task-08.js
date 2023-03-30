const formSendEl = document.querySelector('.login-form');

formSendEl.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  const filledForm = { email: email.value, password: password.value };

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(filledForm);
  event.currentTarget.reset();
});
