
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  const email = form.elements.email.value
  const password = form.elements.password.value

  const formContent = { email, password }

  if (email === "" || password === "") {
    alert("All fields must be  filled!")
  } else {

    console.log(formContent)
  }
  
  form.reset()
}
