const questions = [
  "Will you be my Valentine?",
  "Will you be my Valentine? (Don't lie 💋)",
  "Will you be my Valentine? (Na books vangi tharan 📚)",
  "Will you be my Valentine? (Namba onna tour polam 🏞️)",
  "Will you be my Valentine? (We'll make rasam together 🍲)",
  "Will you be my Valentine? (Namba gym polam 💪)",
  "Will you be my Valentine? (I have biceps 💪)",
  "Will you be my Valentine? (Namaku future la 6 packs vendama 🏋️)",
  "Will you be my Valentine? (I'll give you nose 👃)",
  "Will you be my Valentine? (Final one ❤️)"
];

let currentIndex = 0;
const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalScene = document.getElementById("finalScene");

noBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    questionEl.textContent = questions[currentIndex];

    if (currentIndex === questions.length - 1) {
      noBtn.style.display = "none"; // hide NO at the end
    }
  }
});

yesBtn.addEventListener("click", () => {
  questionEl.style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  finalScene.classList.remove("hidden");
});
