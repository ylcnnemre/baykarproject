const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choiceAElement = document.getElementById("choice-a");
const choiceBElement = document.getElementById("choice-b");
const choiceCElement = document.getElementById("choice-c");
const choiceDElement = document.getElementById("choice-d");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const timerElement = document.getElementById("timer");
const countElement = document.getElementById("count");
const containerElement = document.getElementById("container");
const tableBody = document.getElementById("table-body");
const tableElement = document.getElementById("resultTable");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let choices = document.querySelectorAll(".choice");

const quizQuestions = [];
let selectedChoices = [];


const correctAnswers = [];
const choicesLetter = ["A", "B", "C", "D"];


for (let i = 0; i < 10; i++) {
  const randomIndex = Math.floor(Math.random() * choicesLetter.length);
  correctAnswers.push(choicesLetter[randomIndex]);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((val) => {
    let questions = val.slice(0, 10);
    for (let item of questions) {
      let sonuc = item.body.replace(/\n/g, " ").split(" ").slice(0, 5);
      sonuc = new Set([...sonuc]);
      let choices = Array.from(sonuc);
      quizQuestions.push({
        question: item.title,
        choices: choices,
      });
    }
    showQuestion();
  });

let questionNumber = 0;
let totalScore = 0;
let timerValue = 10;
let timerInterval = null;

function showQuestion() {
  countElement.innerText = questionNumber + 1;
  startTimer();
  setChoise(questionNumber);

  disabledControl();

  choices.forEach((item) => {
    item.addEventListener("click", function () {
      choices.forEach((choice) => {
        if (choice !== item) {
          choice.classList.remove("bg-success");
          choice.style.color = "black";
        }
      });

      let selectedLetter = getChoiceLetter(choices, this.innerText);
      selectedChoices[selectedChoices.length - 1] = {
        selectedLetter,
        text: this.innerText,
      };

      this.classList.add("bg-success");
      this.style.color = "white";
    });
  });

  nextButton.addEventListener("click", function () {
    if (questionNumber == 9) {
      stopTimer();
      quizContainer.style.display = "none";
      tableElement.style.display = "table";
      createTable();
      alert("Quiz is over");
    } else if (questionNumber < 10) {
      questionNumber += 1;
      countElement.innerText = questionNumber + 1;
      setChoise(questionNumber);
      disabledControl();
      choices.forEach((item) => {
        item.classList.remove("bg-success");
        item.style.color = "black";
      });

      stopTimer();
      startTimer();
    }
  });
}

function startTimer() {
  timerElement.innerText = timerValue;
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timerValue--;

  if (timerValue <= 0) {
    stopTimer();

    if (questionNumber == 9) {
      selectedChoices[selectedChoices.length - 1] = null;

      stopTimer();
      quizContainer.style.display = "none";
      tableElement.style.display = "table";
      alert("Quiz is over")
      createTable();
    } else if (questionNumber < 10) {
      questionNumber += 1;
      selectedChoices[selectedChoices.length - 1] = null;
      countElement.innerText = questionNumber + 1;
      setChoise(questionNumber);

      disabledControl();
      choices.forEach((item) => {
        item.classList.remove("bg-success");
        item.style.color = "black";
      });

      startTimer();
    }
  }

  timerElement.textContent = timerValue;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerValue = 10;
  timerElement.textContent = timerValue;
}

function disabledControl() {
  nextButton.setAttribute("disabled", true);
  addDisabled();
  setTimeout(() => {
    nextButton.removeAttribute("disabled", false);
    removeDisabled();
  }, 1000);
}

function addDisabled() {
  choices.forEach((item) => {
    item.setAttribute("disabled", true);
  });
}

function removeDisabled() {
  choices.forEach((item) => {
    item.removeAttribute("disabled", false);
  });
}

function setChoise(questionIndex) {
  console.log("qıestionIndex ==>", questionIndex);
  let questionEl = quizQuestions[questionIndex];

  selectedChoices.push(null);

  questionElement.innerText = questionEl.question;
  choiceAElement.innerText = questionEl.choices[0];
  choiceBElement.innerText = questionEl.choices[1];
  choiceCElement.innerText = questionEl.choices[2];
  choiceDElement.innerText = questionEl.choices[3];
}

function getChoiceLetter(choices, selectedText) {
  let selectedLetter = "";
  choices.forEach((item, index) => {
    if (item.innerText == selectedText) {
      if (index == 0) {
        selectedLetter = "A";
      } else if (index == 1) {
        selectedLetter = "B";
      } else if (index == 2) {
        selectedLetter = "C";
      } else {
        selectedLetter = "D";
      }
    }
  });
  return selectedLetter;
}

function createTable() {
  for (let i = 0; i < correctAnswers.length; i++) {
    scoreElement.style.display = "block";
    const userAnswer = selectedChoices[i];
    const correctAnswer = correctAnswers[i];
    let result = "";

    if (userAnswer?.selectedLetter != null) {
      result = userAnswer.selectedLetter === correctAnswer ? "True" : "False";
      totalScore += userAnswer.selectedLetter == correctAnswer ? 10 : 0;
    } else {
      result = "Empty Answer";
    }

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td>${userAnswer?.selectedLetter ?? "Empty"}</td>
            <td>${correctAnswer}</td>
            <td>${result}</td>
        `;
    scoreElement.innerText = `Total Score : ${totalScore} `;
    tableBody.appendChild(newRow);
  }
}
