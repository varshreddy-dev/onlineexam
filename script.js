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
        showQuestion();
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

function submitExam() {
    let selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selected) {
        document.getElementById("result").textContent =
            "Please select an answer.";
        return;
    }

    let score = selected.value === "0" ? 1 : 0;

    document.getElementById("result").textContent =
        "Your score: " + score + " / 1";
}