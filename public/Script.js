let currentQuestionIndex = 0;
let score = 0;
let questions = [];

async function loadQuestions() {
    const res = await fetch("/questions");
    questions = await res.json();
    showQuestion();
}

function showQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        const questionEl = document.createElement("h2");
        questionEl.textContent = q.question;
        quizContainer.appendChild(questionEl);

        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.onclick = () => checkAnswer(option);
            quizContainer.appendChild(btn);
        });
    } else {
        document.getElementById("result").innerHTML = `You scored ${score} / ${questions.length}`;
        document.getElementById("next-btn").style.display = "none";
    }
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});

loadQuestions();
