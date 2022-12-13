// variables

var n = 0;
var count = 0
var totalTimer = 75;
var highscores = [];

// start button listener
$("#start-button").on("click", function () {
    console.log("Start Button");
    $("#start-container").hide();
    $("#highscores").hide();
    $("#question-container").show();
    $("#question-container").css('display', 'flex' );
    $("#timer").show();
    startTimer();
    selectNextQuestion();
});

// highscores button listener

$("#highscores").on("click", function() {

})

function selectNextQuestion() {
    console.log("selectNextQuestion fired")
    $("#question").text(questions[n].question)

    for (var i=0;i<4;i++) {

        var newButtons = $("<button>" + questions[n].choices[i] + "</button>");
        newButtons.attr("class", "btn");
        $(newButtons).attr("value", i);

        $("#answer-buttons").append(newButtons);

        newButtons.on("click", selectChoice);

    }
}

function selectChoice() {
    
    var userChoice = $(this).prop("value");
    console.log(userChoice)

    if (userChoice === questions[n].correctChoice && n === 5) {
        console.log("correct, last question");
        count++;
        highscores();
    } else if (userChoice != questions[n].correctChoice && n === 5) {
        console.log("incorrect, last question");
        highscores();
    } else if (userChoice === questions[n].correctChoice && n < 5) {
        console.log("correct, next question");
        count++;
        n++;
        selectNextQuestion();
        
    }
}

function startTimer() {

}

function endTimer() {

}

function highscores() {

}

const questions = [
    {
      question: "Where is the correct place to insert a JavaScript file?",
      choices: {
        0: "the body section",
        1: "the head section",
        2: "the html section", 
        3: "both body and head sections",
      },
      correctChoice: "0"
    },
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      choices: {
        0: "<script href='script.js'>",
        1: "<script src='script.js'>",
        2: "<link href='script.js'>",
        3: "<script name='script.js'>",
      },
      correctChoice: "1"
    },
    {
      question: "How would you write 'Hello World' in the web console?",
      choices: {
        0: "msg('Hello World')>",
        1: "console('Hello World')>",
        2: "console.log('Hello World')>",
        3: "log('Hello World')>",
      },
      correctChoice: "2"
    },
    {
      question: "What is the proper way of writing an IF statement in JavaScript?",
      choices: {
        0: "if i==5 then",
        1: "if i = 5",
        2: "if (i==5)",
        3: "if i=5 then",
      },
      correctChoice: "2"
    },
  ];