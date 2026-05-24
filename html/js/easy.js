/* =========================
   QUESTION BANKS
========================= */
/* ✅ STOP MAIN SITE MUSIC */
window.addEventListener("DOMContentLoaded", () => {
  const allAudio = document.querySelectorAll("audio");

  allAudio.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
});
/* EASY QUESTIONS */
const easyQuestions = [
  {
    question: "What is the largest coral reef system in the Philippines?",
    choices: ["Tubbataha Reefs", "Great Barrier Reef", "Apo Reef", "Coral Triangle"],
    answer: 0
  },
  {
    question: "Which animal is known as the largest fish in the world?",
    choices: ["Great White Shark", "Whale Shark", "Manta Ray", "Blue Marlin"],
    answer: 1
  },
  {
    question: "Which marine animal lives in sea anemones?",
    choices: ["Clownfish", "Sea Turtle", "Octopus", "Starfish"],
    answer: 0
  },
  {
    question: "Which ecosystem helps protect coastlines from strong waves?",
    choices: ["Coral Reefs", "Open Ocean", "Deep Sea", "Arctic Ice"],
    answer: 0
  },
  {
    question: "What do green sea turtles mainly eat?",
    choices: ["Seagrass", "Fish", "Coral", "Plankton"],
    answer: 0
  },
  {
    question: "What color are most coral reef fish known for?",
    choices: ["Bright and colorful", "Gray only", "Transparent", "Black"],
    answer: 0
  },
  {
    question: "Which animal is commonly found on the ocean floor?",
    choices: ["Starfish", "Eagle", "Lion", "Snake"],
    answer: 0
  },
  {
    question: "What type of water do most marine species live in?",
    choices: ["Saltwater", "Freshwater", "Rainwater", "River water"],
    answer: 0
  },
  {
    question: "Which marine animal has a hard shell and flippers?",
    choices: ["Sea Turtle", "Shark", "Octopus", "Jellyfish"],
    answer: 0
  },
  {
    question: "Which ecosystem is known for colorful corals?",
    choices: ["Coral Reef", "Desert", "Forest", "Mountain"],
    answer: 0
  }
];

/* MEDIUM QUESTIONS */
const mediumQuestions = [
  {
    question: "Which ecosystem serves as a nursery for many marine species?",
    choices: ["Mangroves", "Open Ocean", "Deep Sea", "Ice Caps"],
    answer: 0
  },
  {
    question: "Why are coral reefs important to marine ecosystems?",
    choices: [
      "They provide habitat and shelter",
      "They raise ocean temperature",
      "They reduce oxygen levels",
      "They block sunlight"
    ],
    answer: 0
  },
  {
    question: "Which human activity causes the most damage to coral reefs?",
    choices: ["Overfishing", "Rainfall", "Natural tides", "Ocean currents"],
    answer: 0
  },
  {
    question: "What is the main role of seagrass beds?",
    choices: [
      "Stabilizing sediments and feeding marine life",
      "Blocking coral growth",
      "Polluting coastal waters",
      "Increasing wave force"
    ],
    answer: 0
  },
  {
    question: "Which conservation method best protects marine life?",
    choices: [
      "Marine protected areas",
      "Dynamite fishing",
      "Plastic dumping",
      "Coral mining"
    ],
    answer: 0
  },
  {
    question: "Which ecosystem reduces coastal erosion?",
    choices: ["Mangroves", "Deep Sea", "Open Ocean", "Glaciers"],
    answer: 0
  },
  {
    question: "What do coral reefs rely on for energy?",
    choices: ["Sunlight", "Darkness", "Wind", "Ice"],
    answer: 0
  },
  {
    question: "Which species helps keep seagrass beds healthy?",
    choices: ["Sea turtles", "Sharks", "Whales", "Octopus"],
    answer: 0
  },
  {
    question: "What problem is caused by plastic in oceans?",
    choices: [
      "Harming marine animals",
      "Making water fresh",
      "Helping plants grow",
      "Cooling the ocean"
    ],
    answer: 0
  },
  {
    question: "Which ecosystem contains the most biodiversity?",
    choices: ["Coral reefs", "Open ocean", "Polar seas", "Deep trenches"],
    answer: 0
  }
];

/* HARD QUESTIONS */
const hardQuestions = [
  {
    question: "What is the scientific name of the green sea turtle?",
    choices: [
      "Chelonia mydas",
      "Eretmochelys imbricata",
      "Dermochelys coriacea",
      "Caretta caretta"
    ],
    answer: 0
  },
  {
    question: "Which zone of the ocean receives little to no sunlight?",
    choices: ["Aphotic zone", "Euphotic zone", "Intertidal zone", "Neritic zone"],
    answer: 0
  },
  {
    question: "What gas is primarily absorbed by phytoplankton during photosynthesis?",
    choices: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: 0
  },
  {
    question: "Which marine organism forms the base of most ocean food webs?",
    choices: ["Phytoplankton", "Zooplankton", "Small fish", "Coral polyps"],
    answer: 0
  },
  {
    question: "What deep-sea feature is formed by tectonic plate movement?",
    choices: ["Mid-ocean ridge", "Coral reef", "Lagoon", "Seagrass meadow"],
    answer: 0
  },
  {
    question: "Which symbiotic organism lives within coral tissues?",
    choices: ["Zooxanthellae", "Krill", "Plankton", "Bacteria"],
    answer: 0
  },
  {
    question: "What ocean zone lies just below the euphotic layer?",
    choices: ["Disphotic zone", "Aphotic zone", "Intertidal zone", "Pelagic zone"],
    answer: 0
  },
  {
    question: "Which current helps regulate global climate?",
    choices: ["Thermohaline circulation", "River current", "Tidal current", "Wind drift"],
    answer: 0
  },
  {
    question: "What is the main source of energy in deep sea ecosystems?",
    choices: ["Chemosynthesis", "Sunlight", "Photosynthesis", "Wind energy"],
    answer: 0
  },
  {
    question: "Which marine process drives nutrient circulation in oceans?",
    choices: ["Upwelling", "Photosynthesis", "Evaporation", "Condensation"],
    answer: 0
  }
];

/* =========================
   SELECT DIFFICULTY
========================= */
const difficulty = document.body.dataset.difficulty;

let questions =
  difficulty === "medium" ? mediumQuestions :
  difficulty === "hard" ? hardQuestions :
  easyQuestions;

/* =========================
   VARIABLES
========================= */
let currentQuestion = 0;
let score = 0;
let locked = false;

/* =========================
   AUDIO
========================= */
const quizMusic = new Audio("images,vids/quiz_song.mp3");
const correctSound = new Audio("images,vids/correct.mp3");
const wrongSound = new Audio("images,vids/wrong.mp3");

quizMusic.loop = true;
quizMusic.volume = 0.35;
correctSound.volume = 0.9;
wrongSound.volume = 0.9;

let quizAudioUnlocked = false;

function unlockQuizAudio() {
  if (quizAudioUnlocked) return;
  quizAudioUnlocked = true;
  quizMusic.play().catch(() => {});
}

["click", "touchstart", "keydown"].forEach(evt => {
  document.addEventListener(evt, unlockQuizAudio, { once: true });
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    quizMusic.pause();
  } else if (quizAudioUnlocked) {
    quizMusic.play().catch(() => {});
  }
});

/* ========================= DOM ELEMENTS ========================= */
const questionText = document.getElementById("questionText");
const choiceButtons = document.querySelectorAll(".choice");
const scoreText = document.getElementById("score");
const questionNumber = document.getElementById("qNumber");
const progressBar = document.getElementById("progress");

const endScreen = document.getElementById("endScreen");
const finalScore = document.getElementById("finalScore");

/* ========================= LOAD QUESTIO ========================= */
function loadQuestion() {
  locked = false;

  const current = questions[currentQuestion];
  if (!current) return;

  if (questionText) questionText.textContent = current.question;
  if (questionNumber) questionNumber.textContent = currentQuestion + 1;

  choiceButtons.forEach((btn, index) => {
    btn.textContent = current.choices[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
    btn.dataset.index = index;
  });

  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  if (progressBar) progressBar.style.width = progressPercent + "%";
}

/* ========================= ANSWER HANDLER ======================= */
choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (locked) return;
    locked = true;

    const selected = Number(button.dataset.index);
    const correct = questions[currentQuestion].answer;

    choiceButtons.forEach(btn => {
      btn.disabled = true;
    });

    if (selected === correct) {
      button.classList.add("correct");
      score++;

      if (scoreText) scoreText.textContent = score;

      correctSound.currentTime = 0;
      correctSound.play().catch(() => {});
    } else {
      button.classList.add("wrong");

      choiceButtons.forEach(btn => {
        if (Number(btn.dataset.index) === correct) {
          btn.classList.add("correct");
        }
      });

      wrongSound.currentTime = 0;
      wrongSound.play().catch(() => {});
    }

    setTimeout(() => {
      currentQuestion++;

      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        endQuiz();
      }
    }, 700);
  });
});

/* ========================= END QUIZ ======================== */
function endQuiz() {
  const questionCard = document.querySelector(".question-card");
  if (questionCard) {
    questionCard.style.display = "none";
  }

  if (finalScore) {
    finalScore.textContent = score;
  }

  const performanceText = document.getElementById("performanceText");

  if (performanceText) {
    if (score === questions.length) {
      performanceText.textContent = "EXCELLENT! 🌟";
      performanceText.style.color = "#2ecc71";
    } else if (score >= Math.ceil(questions.length * 0.6)) {
      performanceText.textContent = "GOOD JOB 👍";
      performanceText.style.color = "#f1c40f";
    } else {
      performanceText.textContent = "TRY AGAIN 💡";
      performanceText.style.color = "#e74c3c";
    }
  }

  if (endScreen) {
    endScreen.style.display = "block";
  }

  quizMusic.pause();
}

/* ========================= NAV BACK ====================== */
function goBackMenu() {
  if (document.referrer.includes("index.html")) {
    window.location.href = "index.html#quiz";
  } else {
    window.location.href = "quiz.html";
  }
}

/* =========================
   START
========================= */
if (questionText && choiceButtons.length) {
  loadQuestion();
}
