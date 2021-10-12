const slider = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

const fontSizeChange = (input) => {
    text.style.fontSize = `${slider.value}px`
}

slider.addEventListener("input", fontSizeChange)

