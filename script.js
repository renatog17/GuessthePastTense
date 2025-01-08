import { verbs } from "./verbs.js";

let currentVerb = {};

const verbElement = document.getElementById("verb");
const answerInput = document.getElementById("answer");
const feedbackElement = document.getElementById("feedback");
const checkButton = document.getElementById("check");

function pickRandomVerb() {
  currentVerb = verbs[Math.floor(Math.random() * verbs.length)];
  verbElement.textContent = `Infinitive: ${currentVerb.infinitive}`;
  answerInput.value = "";
  feedbackElement.textContent = "";
  answerInput.classList.remove("correct", "wrong");
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  if (userAnswer === currentVerb.past) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
    answerInput.classList.add("correct");
    answerInput.classList.remove("wrong");
    setTimeout(pickRandomVerb, 500); 
  } else {
    feedbackElement.textContent = `"${currentVerb.past}"`;
    feedbackElement.style.color = "red";
    answerInput.classList.add("wrong");
    answerInput.classList.remove("correct");
    setTimeout(pickRandomVerb, 2000);
  }
}

checkButton.addEventListener("click", checkAnswer);
answerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

pickRandomVerb();
