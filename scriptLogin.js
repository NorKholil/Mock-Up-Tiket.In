let body = document.getElementById("body");
let button = document.querySelector('button[data-toggle="modal"]');
let invalid = document.querySelector(".invalid");
let success = document.querySelector(".success");
let login = document.getElementById("form-login")


login.addEventListener("click", function(event) {
    event.preventDefault()
});


button.addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        success.classList.add("show");
        invalid.classList.remove("show");

    } else {
        invalid.classList.add("show");
        document.body.style.background = "#FFFFFF";

    }
});

success.addEventListener("click", function() {
    this.classList.remove("show");
});