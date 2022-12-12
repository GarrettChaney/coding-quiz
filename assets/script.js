// header elements
let highscoresElement = document.getElementById("highscores");
let timerElement = document.getElementById("timer");

// start container elements
let startContainerElement = document.getElementById("start-container");
let startButtonElement = document.getElementById("start-button");

// question elements
let questionContainerElement = document.getElementById("question-container");
let questionElement = document.getElementById("question");

let shuffledQuestions, currentQuestionIndex;

// answer elements
let answerButtonElement = document.getElementById("answers");

// start button listener
startButtonElement.addEventListener("click", startGame)


function startGame() {
    console.log("started");
    startContainerElement.classList.add("hidden");
    questionContainerElement.classList.remove("hidden");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    console.log(shuffledQuestions)
    nextQuestion();

}

function showQuestion(question) {

}

function nextQuestion() {
    console.log("fired nextQuestion()")
    showQuestion(shuffledQuestions[currentQuestionIndex])


}

function selectAnswer() {

}

function startTimer() {

}

function endTimer() {

}