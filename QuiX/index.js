const quizData = [
    {
        question: "1.What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "2.What is the name of the tallest mountain in the world?",
        choices: ["Mt. K2", "Mt. Everest", "Mt. Kilimanjaro", "Mauna Kea"],
        correct: 1
    },
    {
        question: "3.What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2
    },
    {
        question: "4.What is the chemical symbol for water?",
        choices: ["H2O", "O2", "CO2", "NaCl"],
        correct: 0
    },
    {
        question: "5.Which of these is defined as ‘a piece of land that is almost entirely surrounded by water but is connected to the mainland on one side’?",
        choices: ["Peninsula", "Archipelago", "Cape", "Island"],
        correct: 0
    },
    {
        question: "6.What is thought to be the world’s oldest volcano?",
        choices: ["Mauna Loa", "Mount Etna", "Krakatoa", "Mount Fuji"],
        correct: 1
    },
    {
        question: "7.What country has the longest total coastline (including mainland and offshore islands)?",
        choices: ["Sweden", "Russia", "Canada", "India"],
        correct: 2
    },
    {
        question: "8.Which of these countries is NOT in Africa?",
        choices: ["Guyana", "Guinea", "Equatorial Guinea" ,"Egypt"],
        correct: 0
    },
    {
        question: "9.Which of these countries is the most densely populated?",
        choices: ["Hong Kong", "Monaco", "Singapore", "Mexico"],
        correct: 1
    },
    {
        question: "10.How many tectonic plates does the Earth have?",
        choices: ["4", "5", "6", "7"],
        correct: 3,
    },
    {
        question: "11.Which US state is the most sparsely populated?",
        choices: ["Wyoming", "Alaska", "Montana", "Florida"],
        correct: 1,
    },
    {
        question: "12.Canberra is the capital city of what country?",
        choices: ["New Zealand", "Russia","Australia", "Scotland"],
        correct: 2,
    },
    {
        question: "13.When does magma become lava?",
        choices: ["A. When it reaches the surface", "B. When it reaches a certain temperature", "It never does", "Both A & B"],
        correct: 0,
    },
    {
        question: "14.Which of these cities is most northerly?",
        choices: ["Stockholm", "New Delhi", "Copenhagen", "Reykjavik"],
        correct: 3,
    },
    {
        question: "15.What is the capital city of New Zealand?",
        choices: ["Auckland","Moscow", "Wellington", "Christchurch"],
        correct: 2,
    },
    {
        question: "16.Which country has the largest population?",
        choices: ["USA", "China", "India", "Russia"],
        correct: 2,
    },
    {
        question: "17.Which country is known as the Hexagon?",
        choices: ["Spain", "Poland", "France", "Germany"],
        correct: 2,
    },
    {
        question: "18.What country refers to themselves as ‘Kiwis’?",
        choices: ["Australia", "South Africa", "Russia", "New Zealand"],
        correct: 3
    },
    {
        question: "19.Which is the largest River in the world?",
        choices: ["Volga", "Mississippi", "Nile", "Amazon"],
        correct: 3,
    },
    {
        question: "20.Which is the largest desert in the world?",
        choices: ["Gobi", "Sahara", "Antartica", "Arabia"],
        correct: 2,
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM Elements
const questionEl = document.getElementById('question');
const choicesContainer = document.getElementById('choices-container');
const choiceButtons = document.querySelectorAll('.choice');
const nextButton = document.getElementById('nextButton');
const previousButton = document.getElementById('previousButton');
const submitButton = document.getElementById('submitButton');
const resultContainer = document.getElementById('result');
const scoreEl = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

// Initialize quiz
function loadQuiz() {
    const currentQuestion = quizData[currentQuestionIndex];

// Display the current question number (1-based index) and the total number of questions
    document.getElementById('question-count').textContent = 
        `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

    questionEl.textContent = currentQuestion.question;
    choiceButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.onclick = () => selectAnswer(index);
        if (userAnswers[currentQuestionIndex] === index) {
            button.style.backgroundColor = '#0056b3'; // Highlight selected choice
        } else {
            button.style.backgroundColor = '#007bff';
        }
    });

    previousButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    nextButton.style.display = currentQuestionIndex === quizData.length - 1 ? 'none' : 'inline-block';
    submitButton.style.display = currentQuestionIndex === quizData.length - 1 ? 'inline-block' : 'none';
}

// Handle answer selection
function selectAnswer(choiceIndex) {
    userAnswers[currentQuestionIndex] = choiceIndex;
    loadQuiz(); // Refresh choices to show selected answer
}

// Handle next/previous buttons
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuiz();
    }
});

previousButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuiz();
    }
});

// Calculate score and display results
submitButton.addEventListener('click', () => {
    score = userAnswers.reduce((total, answer, index) => {
        return total + (answer === quizData[index].correct ? 1 : 0);
    }, 0);

    // Show score and hide quiz
    scoreEl.textContent = `${score} out of ${quizData.length}`;
    document.getElementById('quiz').classList.add('hidden');
    resultContainer.classList.remove('hidden');
});

// Restart quiz
restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    document.getElementById('quiz').classList.remove('hidden');
    resultContainer.classList.add('hidden');
    loadQuiz();
});

// Start the quiz
loadQuiz();