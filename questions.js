const flashCards = document.querySelector(".question-holder");
var javascriptQuizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "1. strings", correct: false },
      { text: "2. booleans", correct: false },
      { text: "3. alerts", correct: true },
      { text: "4. numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if / else statement is enclosed with _____.",
    answers: [
      { text: "1. quotes", correct: false },
      { text: "2. curly brackets", correct: false },
      { text: "3. parenthesis", correct: true },
      { text: "4. square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
      { text: "1. numbers and strings", correct: false },
      { text: "2. other arrays", correct: false },
      { text: "3. booleans", correct: false },
      { text: "4. all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "1. commas", correct: false },
      { text: "2. curly brackets", correct: false },
      { text: "3. quotes", correct: true },
      { text: "4. parenthesis", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used during the development and debugger for printing content to the debugger is:",
    answers: [
      { text: "1. JavaScript", correct: false },
      { text: "2. terminal/bash", correct: false },
      { text: "3. for loops", correct: false },
      { text: "4. console.log", correct: true },
    ],
  },
];

const javascriptFlashCardsQuestions = [
  {
    question: "What is a method when talking about an object?",
    answers: "A method is a function inside of an object",
  },
  {
    question:
      'Will this switch statement operate as expected \n alert ("Choose a direction."); \n var chooseNow = function(){ \n var askMe = ("Will you go left or right?"); \n switch(askMe){ \n case "left": \n alert("You have chosen left."); \n break; \n case "right": \n alert("You have chosen right."); \n break; \n default: \n alert("You stay in place"); \n break;}};',
    answers: "Yes this is a fully operational switch statement",
  },
  {
    question:
      "What will print to the console log? Var exp1 = true; var exp2 = false; Var matchIt = function(){ if (exp1 && exp2){ console.log('Both expresions are tue!');} matchIt()",
    answers: "Nothing will print to the log becuase exp2 is false",
  },
  {
    question:
      "What will print to the console log? Var exp1 = true; var exp2 = false; Var matchIt = function(){ if (exp1 || exp2){ console.log('At least one of the values are true!');} matchIt()",
    answers: "At least one of the values are true",
  },
  {
    question:
      "What will print to the console log? Var exp1 = true; var exp2 = false; Var matchIt = function(){ if (exp1 && !exp2){ console.log('Both expresions are tue!');} matchIt()",
    answers: "Both expresions are tue!",
  },
  {
    question:
      "What will print to the console? var num1 = 1; var num2 = 2; var str2 = '2'; var matchIt = function(){if (num2 !== str2){console.log('These are NOT equal values and equal types');}} matchIt();",
    answers: "These are NOT equal values and equal types!",
  },
  {
    question:
      "What will print to the console? var num1 = 1; var num2 = 2; var str2 = '2'; var matchIt = function(){if (num1 != str2){console.log('These are NOT equal values');}} matchIt();",
    answers: "These are not equal values",
  },
  {
    question:
      "What will print to the console? var num1 = 1; var num2 = 2; var str2 = '2'; var matchIt = function(){if (num2 != str2){console.log('These are NOT equal values');}} matchIt();",
    answers: "No response, the console is not logged.",
  },
  {
    question:
      "What will print to the console? var num1 = 1; var num2 = 2; var str2 = '2'; var matchIt = function(){if (num1 === true){console.log('These are equal values and equal types');}} matchIt();",
    answers: "No response, the console is not logged.",
  },
  {
    question:
      "What will print to the console? var num1 = 1; var num2 = 2; var str2 = '2'; var matchIt = function(){if (num1 == true){console.log('These are equal values');}} matchIt();",
    answers: "These are equal values.",
  },
];

console.log(javascriptFlashCardsQuestions[1].question);

const questionObserve = javascriptFlashCardsQuestions[1].question;

const displayFlashCards = function () {
  flashCards.textContent = questionObserve;
};

displayFlashCards();
