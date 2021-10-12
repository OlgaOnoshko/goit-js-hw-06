const input = document.querySelector("#name-input")
const nameSpan = document.querySelector('#name-output')

function onInputChange(event) {
  nameSpan.textContent = event.currentTarget.value;
}

input.addEventListener('input', onInputChange)



