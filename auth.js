const correctUsername = "azataro";
const correctPassword = "blue2025";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "main.html";
    } else {
        document.getElementById("error").textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    }
}

function checkLogin() {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn !== "true") {
        window.location.href = "index.html";
    }
}