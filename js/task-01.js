const categories = document.querySelector("#categories")
const categoryItem = document.querySelectorAll("li.item")

console.log(`Number of categories: ${categories.children.length}`)

categoryItem.forEach(item => {
    const categoryName = item.querySelector("h2").innerText
    const categoryNumber = item.querySelector("ul").children.length
    console.log(`Category: ${categoryName}`)
    console.log(`Elements: ${categoryNumber}`)
})
