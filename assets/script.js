var startContainerElement = document.getElementById("start-container")
var questionContainerElement = document.getElementById("question-container")
var startBtn = document.getElementById("start")
var answerOne = document.getElementById("answer1")
var answerTwo = document.getElementById("answer2")
var answerThree = document.getElementById("answer3")
var answerFour = document.getElementById("answer4")

startBtn.addEventListener("click", startGame)


function startGame() {
    //startTimer()
    var count = 0
    startContainerElement.classList.add("hidden");
    questionContainerElement.classList.remove("hidden")
    nextQuestion()

}

function nextQuestion() {

}

function selectAnswer() {

}

function startTimer() {

}

function endTimer() {

}