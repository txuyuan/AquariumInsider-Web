<template>
  <main>
    <h1>Quiz</h1>

    <p>
      This quiz is merely to show you the important information and allow you to
      test yourself. Feel free to refer if you want to!
    </p>

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
        class="quiz__submitButton button--solid"
        type="button"
        v-if="showSubmit"
        @click="checkQuiz"
      >
        Submit
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
const showSubmit = ref(false);

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

  showExplanation.value = true;
  if (currentQuestionIndex.value >= quizData.length - 1)
    showSubmit.value = true;
  else showNext.value = true;
}

function checkQuiz() {
  showSubmit.value = false;
  showAllQuestions.value = true;
  showSummary.value = true;
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
      "When setting up an aquarium tank, which of the following is not something of note?",
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
];
</script>

<style scoped>
@import "~/assets/css/document.css";
@import "~/assets/css/quiz.css";
</style>
