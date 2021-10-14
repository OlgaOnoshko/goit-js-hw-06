const button = document.querySelector(".change-color")
const backgrColorName = document.querySelector(".color")

button.addEventListener("click", changeColor)

function changeColor() {
  backgrColorName.textContent = getRandomHexColor()
  document.body.style.background = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
