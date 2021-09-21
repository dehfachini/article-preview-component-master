

const button = document.querySelector("#share-icon")
console.log(button)

button.addEventListener("click", function () {
    const tooltip = document.getElementById("share-tooltip")

    if (tooltip.style.display === "none") {
        tooltip.style.display = ""
    } else {
        tooltip.style.display = "none"
    }

})