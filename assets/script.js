// variables

var n = 0;
var count = 0
var totalTimer = 75;
var highscores = [];

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

function selectNextQuestion() {
    $("#question").text(questions[n].question)
    $("#answer-buttons").empty();
    for (var i=0;i<4;i++) {

        var newButtons = $("<button>" + questions[n].choices[i] + "</button>");~
        newButtons.attr("class", "bt n");
        $(newButtons).attr("value", i);

        $("#answer-buttons").append(newButtons);

        newButtons.on("click", selectChoice);

    }
};

function selectChoice() {
    
    var userChoice = $(this).prop("value");

    if (userChoice === questions[n].correctChoice) {
        if (n===3) {
            console.log("Correct, last question. Count: " + count + " N= " +n);
            count++;
            n++;
            callHighscores();
        }
        else {
            n++;
            count++;
            console.log("Correct, next question please. Count: " + count + " N= " +n);
            selectNextQuestion();
        }
    }
    else if (userChoice != questions[n].correctChoice) {
        if (n===3) {
            console.log("incorrect, last question");
            n++;
            callHighscores();
        }
        else {
            n++;
            console.log("Incorrect, next question please. Count: " + count + " N= " +n);
            selectNextQuestion();
        }
    }
};

function startTimer() {

};

function endTimer() {

};

function callHighscores() {
    $("#question-container").hide();
    $("#highscores-container").show();
};

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
        0: "script href='script.js'",
        1: "script src='script.js'",
        2: "link href='script.js'",
        3: "script name='script.js'",
      },
      correctChoice: "1"
    },
    {
      question: "How would you write 'Hello World' in the web console?",
      choices: {
        0: "msg('Hello World')",
        1: "console('Hello World')",
        2: "console.log('Hello World')",
        3: "log('Hello World')",
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