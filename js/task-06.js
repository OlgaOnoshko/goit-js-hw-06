const onInput = document.querySelector("#validation-input")


const onInputCheck = (event) => {
    if (event.currentTarget.value.length === 6) {
        onInput.classList.remove("invalid")
        onInput.classList.add("valid")
    }
    else {
        onInput.classList.remove("valid")
        onInput.classList.add("invalid")
    }
}

const isNumberCorrect = onInput.addEventListener("blur", onInputCheck)
