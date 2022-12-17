var n = 0;
var score = 0;
var totalTime = 45;
var highscores = [];

// List of questions for the quiz. 
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
  {
    question: "What is the correct way to write a JavaScript array?",
    choices: {
      0: "var colors = (1:'red', 2:'green', 3:'blue')",
      1: "var colors = 'red', 'green', 'blue'",
      2: "var colors = ['red', 'green', 'blue']",
      3: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
    },
    correctChoice: "2"
  },  
  {
    question: "What is the correct way to write a for loop in JavaScript?",
    choices: {
      0: "for (i = 0; i <= 5; i++)",
      1: "for (i <= 5; i++)",
      2: "for i = 1 to 5",
      3: "for (i = 0; i <= 5)"
    },
    correctChoice: "0"
  },  
  {
    question: "How do you access the third element in an array?",
    choices: {
      0: "array[3]",
      1: "array(3)",
      2: "array[2]",
      3: "array(2)"
    },
    correctChoice: "2"
  },  
  {
    question: "How do you add a comment in JavaScript?",
    choices: {
      0: "// This is a comment",
      1: "!-- This is a comment --",
      2: "# This is a comment",
      3: "// This is a comment //"
    },
    correctChoice: "0"
  },
  {
    question: "What is the correct way to concatenate two strings in JavaScript?",
    choices: {
      0: "string1 + string2",
      1: "string1 & string2",
      2: "string1 && string2",
      3: "string1 += string2"
    },
    correctChoice: "0"
  },
  {
    question: "What is the correct way to convert a string to a number in JavaScript?",
    choices: {
      0: "parseInt(string)",
      1: "parseNumber(string)",
      2: "string.toNumber()",
      3: "Number(string)"
    },
    correctChoice: "3"
  },
  {
    question: "Which of the following is not a primitive data type in JavaScript?",
    choices: {
      0: "string",
      1: "number",
      2: "boolean",
      3: "array"
    },
    correctChoice: "3"
  },
  {
    question: "What is the correct way to get the length of an array in JavaScript?",
    choices: {
      0: "array.length",
      1: "array.size()",
      2: "array.count()",
      3: "array.total()"
    },
    correctChoice: "0"
  },
  {
    question: "What is the correct way to round a number to the nearest integer in JavaScript?",
    choices: {
      0: "round(number)",
      1: "number.round()",
      2: "Math.round(number)",
      3: "number.Math.round()"
    },
    correctChoice: "2"
  },
  {
    question: "What is the correct way to check if a variable is undefined in JavaScript?",
    choices: {
      0: "if (variable === undefined)",
      1: "if (typeof variable === 'undefined')",
      2: "if (variable == undefined)",
      3: "if (variable != undefined)"
    },
    correctChoice: "1"
  },
  {
    question: "Which of the following is not a way to define a function in JavaScript?",
    choices: {
      0: "function definition",
      1: "function expression",
      2: "arrow function",
      3: "for loop"
    },
    correctChoice: "3"
  },
]; 

// Main play button - starts the game.
$("#play").on("click", function () {
  $("#main-container").children().empty();
  $("#timer").removeClass("hidden");
  startTimer();
  callNextQuestion();
})

// Highscores button - populates the highscores list.
$("#highscores").on("click", function () {
  $("#main-header").text("Highscores");
  $("#clear").removeClass("hidden");
  $("#highscores").hide();

  let highscores = localStorage.getItem("highScores");
  highscores = JSON.parse(highscores);
  console.log(highscores);

  for (let i = 0; i < highscores.length; i++) {
    var item = $("<li>" + highscores[i] + "</li>");
    item.attr("class", "color-text fs-3");
    $("#highscores-list").append(item);
  };
})

// Timer function for the game. Fires on game start, finishes when time runs out or <= 0
function startTimer() {
  var countingDown = setInterval(function () {
    $("#time-left").text(totalTime);
    totalTime--;
    if (totalTime <= 0) {
      $("#time-left").text("");
      callHighscores();
      clearInterval(countingDown);
    }
    else if (n === questions.length) {
      clearInterval(countingDown);
    };
  },  1000);
};

// Question picker function.
function callNextQuestion() {
  $("#main-header").text(questions[n].question);
  $("#main-buttons").empty();;

  for (var i = 0; i < 4; i++) {
    var newButtons = $("<button>" + questions[n].choices[i] + "</button>");
    newButtons.attr("class", "btn-purple rounded-3 border-0 fs-2 color-text w-50 align-self-center mb-3");
    $(newButtons).attr("value", i);
    $("#main-buttons").append(newButtons);
    newButtons.on("click", rightWrong);
  };
};

// Takes user input and decides what to do next (next question, end game, etc) based on a number of conditionals nested together.
function rightWrong() {
  var userChoice = $(this).prop("value");
  // If user chose the correct answer: 
  if (userChoice === questions[n].correctChoice) {
    // Is this the last question?
    if (n === (questions.length-1)) {
      n++;
      score++;
      callHighscores();
    }
    else {
      n++;
      score++;
      callNextQuestion();
    }
  }
  // If user chose the incorrect answer: 
  else if (userChoice != questions[n].correctChoice) {
    // Is this the last question?
    if (n === (questions.length-1)) {
      n++;
      callHighscores();
    }
    else {
      // Subtract five seconds and update #time-left.
      totalTime = (totalTime - 5);
      $("#time-left").text(totalTime)
      n++;
      callNextQuestion();
    }
  }
};

// Populate the users name and score for pushing to local storage.
$("#submit").on("click", function (event) {
  event.preventDefault();
  var scoreText = $("#highscores-name").val();
  if (scoreText === "") {
    return;
  };
  getHighScores();
  highscores.push(scoreText + ": " + score);
  saveHighScores();
  reloadPage();
})

// Clear local storage on CLEAR HIGHSCORES button.
$("#clear").on("click", function (event) {
  localStorage.clear();
  location.reload(); 
})

// Move to the form screen that lets the user save their score.
function callHighscores() {
  $("#main-container").addClass("hidden");
  $("#timer").hide();
  $("#highscores-container").removeClass("hidden");
}

// Update the highscores array so it's most up-to-date for new additions.
function getHighScores() {
  var storageHighScores = JSON.parse(localStorage.getItem("highScores"));
  if (storageHighScores !== null) {
    highscores = storageHighScores;
  }
}

// Save the highscores array to local storage.
function saveHighScores() {
  localStorage.setItem("highScores", JSON.stringify(highscores));
}

// Basic force-reload function.
function reloadPage() {
  location.reload();
}