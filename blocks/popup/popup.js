const editButton = document.querySelector(".user-title__pen");

function activeBody() {
    let body = document.querySelector("body");
    body.classList.toggle("_active");

}
function activePopup() {
    let popup = document.querySelector(".popup");
    popup.classList.toggle("_active");
}

function toggleActive(e) {
    activeBody();
    activePopup();
    e.preventDefault();
}

editButton.addEventListener('click', toggleActive)

