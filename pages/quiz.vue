<template>
  <main>
    <h1>Quiz</h1>

    <p>
      This quiz is a culmination of most of the important information in this
      website. It is just supposed to highlight the most important information
      and allow you to test yourself, so feel free to refer if you want to!
    </p>

    This quiz contains &nbsp;<span
      class="summary__block"
      style="padding: 0.25rem 1rem"
      >{{ totalScore }}</span
    >questions.
    <form class="quiz" action="">
      <div class="summary" v-if="showSummary">
        <div class="summary__block">{{ score }} / {{ totalScore }}</div>
        <div class="summary__block">
          {{ Math.round((score / totalScore) * 1000) / 10 }}%
        </div>
      </div>

      <div
        class="quiz__questions"
        v-for="(question, questionIndex) in quizData"
      >
        <div
          class="quiz__question"
          :class="{
            hide: !(questionIndex === currentQuestionIndex || showAllQuestions),
          }"
          :id="'q-' + questionIndex"
        >
          <h3 class="quiz__label">
            {{ questionIndex + 1 }}.&nbsp; {{ question.question }}
          </h3>

          <ul class="quiz__options">
            <li
              class="quiz__option"
              v-for="(option, optionIndex) in question.options"
            >
              <input
                class="quiz__option__select"
                type="radio"
                name="answer"
                :id="questionIndex + '-' + optionIndex"
                @click="checkQuestion(questionIndex, optionIndex)"
              />
              <label
                class="quiz__option__label"
                :for="questionIndex + '-' + optionIndex"
                >{{ option }}</label
              >
            </li>
          </ul>

          <p
            class="quiz__explanation"
            v-if="showExplanation && question.explanation"
          >
            {{ question.explanation }}
          </p>
        </div>
      </div>

      <button
        class="quiz__nextButton button--solid-dark"
        type="button"
        v-if="showNext"
        @click="nextQuestion"
      >
        Next
      </button>
      <button
        class="quiz__finishButton button--solid"
        type="button"
        v-if="showFinish"
        @click="checkQuiz"
      >
        Finish
      </button>
      <button
        class="quiz__restartButton button--solid"
        type="button"
        v-if="showRestart"
        @click="reloadPage"
      >
        Restart
      </button>
    </form>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";

const showAllQuestions = ref(false);
const currentQuestionIndex = ref(0);
const score = ref(0);
const totalScore = computed(() => {
  return quizData.length;
});

const showSummary = ref(false);
const showExplanation = ref(false);
const showNext = ref(false);
const showFinish = ref(false);
const showRestart = ref(false);

function nextQuestion() {
  showExplanation.value = false;
  showNext.value = false;
  currentQuestionIndex.value = currentQuestionIndex.value + 1;
}

function checkQuestion(questionIndex, optionIndex) {
  // optionIndex = selected option
  let correctAnswer = quizData[questionIndex].correctAnswer;
  let isCorrect = optionIndex === correctAnswer;
  // Update score counter
  if (isCorrect) {
    score.value++;
  }

  // Indicate correct/incorrect options
  let selectedOption = document.getElementById(
    questionIndex + "-" + optionIndex
  ).parentElement;
  selectedOption.classList.add("correct");
  if (isCorrect) {
    selectedOption.classList.add("correct");
  } else {
    selectedOption.classList.add("incorrect");
    document
      .getElementById(questionIndex + "-" + correctAnswer)
      .parentElement.classList.add("correct");
  }
  //Disable further changes
  document
    .querySelectorAll(`#q-${questionIndex} .quiz__option__select`)
    .forEach((option) => {
      option.disabled = true;
    });

  //TODO: fill in explanations and re-enable
  //showExplanation.value = true;
  if (currentQuestionIndex.value >= quizData.length - 1)
    showFinish.value = true;
  else showNext.value = true;
}

function checkQuiz() {
  showFinish.value = false;
  showAllQuestions.value = true;
  showSummary.value = true;
  showRestart.value = true;
  document.querySelector(".quiz").classList.add("finished");
}

function reloadPage() {
  window.location.reload();
}

// QUIZ DATA

const quizData = [
  {
    question: "Which of these parts of the nitrogen cycle is most lethal?",
    options: ["Ammonia", "Nitrite", "Nitrate"],
    correctAnswer: 1,
    explanation:
      "This is why this question is so. It is because of so and so, and because of that and this",
  },
  {
    question: "Which of these is a sympton of bacterial infections?",
    options: [
      "Agitated swimming",
      "Gasping for air",
      "Loss of appetite",
      "Aggressive behaviour towards other fish",
    ],
    correctAnswer: 2,
    explanation:
      "This is why this question is so. It is because of so and so, and because of that and this",
  },
  {
    question: "Which of these is not an example of Heavy Metal Poisoning?",
    options: ["Chlorophenamine", "Chlorine", "Chloramine", "Chloride"],
    correctAnswer: 0,
    explanation:
      "This is why this question is so. It is because of so and so, and because of that and this",
  },
  {
    question:
      "You dont have to treat water that is to be added in during cycling",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "An all-round tester kit does not account for which of the following water conditions?",
    options: ["Nitrite", "Temperature", "pH", "Ammonia"],
    correctAnswer: 1,
    explanation:
      "This is why this question is so. It is because of so and so, and because of that and this",
  },
  {
    question:
      "Which of the following is not a chemical level noted in a fish tank?",
    options: ["pH", "KH", "TH", "GH"],
    correctAnswer: 2,
    explanation:
      "This is why this question is so. It is because of so and so, and because of that and this",
  },
  {
    question:
      "When setting up an aquarium tank, which of the following is not noteworthy?",
    options: [
      "Saltwater/freshwater compatibility",
      "Space requirements",
      "Different levels of fishes",
      "All of the above",
    ],
    correctAnswer: 2,
    explanation:
      "This is why this question is so. It is because of so and so, and because of that and this",
  },
  {
    question:
      "Where should the tropical tank be positioned in a room? Assume room temperature is 25°C / 77°F",
    options: [
      "Beside an open window",
      "Beside a closed window",
      "Next to a warm lamp",
      "None of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which of the following is NOT needed in a Fishless cycle?",
    options: ["Ammonia", "Aquarium salts", "Fish food", "Ammonia Tester"],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following is NOT a requirement for aquarium compatibility?",
    options: [
      "Salinity compatibility",
      "Space requirements",
      "Friendliness & predatory behaviours",
      "Size",
    ],
    correctAnswer: 3,
  },
  {
    question: "Substrate is a neccesity for your tank",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question:
      "How much of water should be changed for a heavily stocked tank every week?",
    options: ["5-10%", "10-15%", "20-25%", "30-40%"],
    correctAnswer: 2,
  },
  {
    question: "The biofilter is a critical component of any aquarium",
    options: ["True", "False"],
    correctAnswer: 0,
  },
];
</script>

<style scoped>
@import "~/assets/css/document.css";
@import "~/assets/css/quiz.css";
</style>
