var elements = document.getElementById("dropdown-item-container");
elements.style.display ="none"
function showohide() {
    if (elements.style.display === "none") {
        elements.style.display = "block";
      } else {
        elements.style.display = "none";
      }
}
