const editButton = document.querySelector(".user-title__pen");
editButton.addEventListener('click', function (e) {
    let body = document.querySelector("body");
    let popup = document.querySelector(".popup");
    body.classList.toggle("_active");
    popup.classList.toggle("_active");
    e.preventDefault();
})

