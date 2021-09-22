const shareIcon = document.querySelector("#share-icon")
const shareTooltip = document.querySelector("#share-tooltip")

shareIcon.addEventListener("mouseover", function () {
   shareTooltip.style.display = "block";
    
})

shareIcon.addEventListener("mouseleave", function () {
   shareTooltip.style.display = "none";
    
})
