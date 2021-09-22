
const button = document.querySelector("#share-icon")

button.addEventListener("click", function () {
    const tooltip = document.getElementById("share-tooltip")

    if (tooltip.style.display === "none") {
        tooltip.style.display = "block"
    } else {
        tooltip.style.display = "none"
    }

})
