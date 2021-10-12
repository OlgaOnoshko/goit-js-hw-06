const decreaseValueBtn = document.querySelector('button[data-action="decrement"]')
const increaseValueBtn = document.querySelector('button[data-action="increment"]')

let value = document.querySelector("#value")
let num = Number(value.textContent)

const increaseValue = () => {
    num += 1
    value.textContent = num
};
const decreaseValue = () => {
    num -= 1
    value.textContent = num
};

increaseValueBtn.addEventListener("click", increaseValue)
decreaseValueBtn.addEventListener("click", decreaseValue)

