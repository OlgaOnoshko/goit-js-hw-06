const onInput = document.querySelector("#validation-input")

const onInputCheck = (event) => {
    if (event.currentTarget.value.length === Number(onInput.getAttribute('data-length'))) {
        onInput.classList.remove("invalid")
        onInput.classList.add("valid")
    }
    else {
        onInput.classList.remove("valid")
        onInput.classList.add("invalid")
    }
}

const isNumberCorrect = onInput.addEventListener("blur", onInputCheck)