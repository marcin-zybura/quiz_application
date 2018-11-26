function populate() {
  if(quiz.isEnded()) {
    showScores();
  }
  else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'>Your score: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var questions = [
  new Question("Test question 1?", ["Answer1", "Answer2", "Answer3", "Answer4"], "Answer1"),
  new Question("Test question 2?", ["Answer1", "Answer2", "Answer3", "Answer4"], "Answer2"),
  new Question("Test question 3?", ["Answer1", "Answer2", "Answer3", "Answer4"], "Answer3"),
  new Question("Test question 4?", ["Answer1", "Answer2", "Answer3", "Answer4"], "Answer4"),
  new Question("Test question 5?", ["Answer1", "Answer2", "Answer3", "Answer4"], "Answer1")
];

var quiz = new Quiz(questions);

populate();