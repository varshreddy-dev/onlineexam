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

function showQuestion() {
    document.getElementById("questionArea").innerHTML = `
        <p>Q1. What does HTML stand for?</p>
        <label>
            <input type="radio" name="answer" value="0">
            Hyper Text Markup Language
        </label><br>

        <label>
            <input type="radio" name="answer" value="1">
            High Text Machine Language
        </label><br>
    `;
}