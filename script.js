function login() {
    let name = document.getElementById("student").value.trim();

    if (name === "") {
        document.getElementById("result").textContent =
            "Enter your name to login.";
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("exam").style.display = "block";
    document.getElementById("welcome").textContent =
        "Welcome, " + name;
}