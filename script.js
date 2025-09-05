const questions = [
  "Will you be my Valentine?",
  "Will you be my Valentine?",
  "Will you be my Valentine?",
  "Will you be my Valentine?",
  "Will you be my Valentine?",
  "Will you be my Valentine?",
  "Will you be my Valentine?",
  "Will you be my Valentine?",
  "Will you be my Valentine?"
];

const options = [
  ["Yes", "No"],
  ["Yes", "Don’t lie 😘"],
  ["Yes", "Na books vangi tharan"],
  ["Yes", "Namba onna tour polam"],
  ["Yes", "We'll make rasam together"],
  ["Yes", "Namba gym polam"],
  ["Yes", "I have biceps"],
  ["Yes", "Namaku future la 6 packs vendama"],
  ["Yes", "Yes"]
];

let index = 0;
const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");
const ending = document.getElementById("ending");
const heartsContainer = document.querySelector(".hearts");

function updateQuestion() {
  questionEl.textContent = questions[index];
  yesBtn.textContent = options[index][0];
  noBtn.textContent = options[index][1];
}

noBtn.addEventListener("click", () => {
  index++;
  if (index < questions.length) {
    updateQuestion();
  } else {
    container.classList.add("hidden");
    ending.classList.remove("hidden");
    startHearts();
  }
});

yesBtn.addEventListener("click", () => {
  index++;
  if (index < questions.length) {
    updateQuestion();
  } else {
    container.classList.add("hidden");
    ending.classList.remove("hidden");
    startHearts();
  }
});

// Floating hearts animation
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 500);
}

// Start first question
updateQuestion();
