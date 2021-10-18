const categories = document.querySelector("#categories")
const categoryItem = document.querySelectorAll("li.item")

console.log(`Number of categories: ${categoryItem.length}`)

categoryItem.forEach(item => {
    const categoryName = item.firstElementChild.innerText
    const categoryNumber = item.lastElementChild.children.length
    console.log(`Category: ${categoryName}`)
    console.log(`Elements: ${categoryNumber}`)
})
