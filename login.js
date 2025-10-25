function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (email === "admin" && password === "admin") {
        window.location.href = "dashboard.html"; 
    } else {
        errorMessage.textContent = "Invalid email or password.";
    }
}
