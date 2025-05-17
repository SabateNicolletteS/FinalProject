document.addEventListener("DOMContentLoaded", function () {
    const quizData = [
        {
            question: "What action can you take to empower women in your workplace?",
            options: ["Focus only on hiring women for diversity without considering qualifications", "Avoid speaking up in meetings to avoid confrontation", "Encourage equal opportunities for career advancement", "Ignore unequal pay gaps as it doesn't affect you directly"],
            answer: 2
        },
        {
            question: "Which of the following is an example of supporting women’s empowerment in education?",
            options: ["Limiting women to traditional fields of study like teaching or nursing", "Providing scholarships to women in underrepresented fields", "Offering less support to women because they are already 'represented'", "Discouraging women from participating in sports or leadership programs"],
            answer: 1
        },
        {
            question: "How can you advocate for women’s empowerment in your community?",
            options: ["Discourage women from pursuing leadership roles to maintain traditional roles", "Avoid discussing women rights to keep things 'comfortable'", "Support policies that only benefit men in positions of power", "Volunteer to mentor young women in leadership and entrepreneurship"],
            answer: 3
        },
        {
            question: "What is a practical way to reduce gender bias in your personal life?",
            options: ["Recognize and challenge your own biases, and educate yourself about gender equality", "Ignore the biases you encounter, thinking they do not affect you", "Only support women related issues if they directly affect you", "Avoid advocating for rights of women to avoid conflict"],
            answer: 0
        },
        {
            question: "What is one way to ensure women have equal representation in leadership roles?",
            options: ["Assume women are not interested in leadership positions", "Only promote men to leadership positions", "Encourage mentorship and sponsorship for women in your organization", "Ignore the barriers that women face in reaching leadership roles"],
            answer: 2
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next");
    const resultElement = document.getElementById("result");

    function loadQuestion() {
        questionElement.textContent = quizData[currentQuestion].question;
        optionsElement.innerHTML = "";
        quizData[currentQuestion].options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option");
            button.onclick = () => checkAnswer(index);
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selected) {
        const correct = quizData[currentQuestion].answer;
        if (selected === correct) {
            score++;
            optionsElement.children[selected].style.backgroundColor = "#4CAF50"; // Green for correct answer
        } else {
            optionsElement.children[selected].style.backgroundColor = "#FF5733"; // Red for incorrect answer
            optionsElement.children[correct].style.backgroundColor = "#4CAF50"; // Show correct answer
        }
        disableOptions();
        nextButton.style.display = "block";
    }

    function disableOptions() {
        Array.from(optionsElement.children).forEach(button => {
            button.disabled = true;
        });
    }

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
            nextButton.style.display = "none";
        } else {
            showResults();
        }
    }

    function showResults() {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = `You scored ${score} out of ${quizData.length}!`;
        nextButton.style.display = "none";
    }

    nextButton.addEventListener("click", nextQuestion);
    loadQuestion();
});