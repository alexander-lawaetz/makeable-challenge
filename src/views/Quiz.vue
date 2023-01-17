<template>
  <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <h1
        class="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900"
      >
        Quiz difficult: {{ question?.difficulty }}
      </h1>
      <div
        v-html="question?.question"
        class="mt-4 text-center text-xl font-bold tracking-tight text-gray-900"
      ></div>
      <div class="flex flex-col text-center">
        <button
          v-for="(answer, index) in question?.giving_questions"
          :key="index"
          v-html="answer"
          @click="answerGiving(answer)"
          :disabled="!!questionPicked"
          class="text-gray-900 hover:bg-gray-300 hover:text-gray-900 px-3 cursor-pointer py-2 m-2 rounded-md text-sm font-medium bg-gray-100"
        ></button>
      </div>
      <div class="flex justify-between">
        <span
          v-if="
            !!questionPicked &&
            questionPicked.valueOf() == question?.correct_answer.valueOf()
          "
          >You picked the correct answer!</span
        >
        <span
          v-else-if="
            !!questionPicked &&
            questionPicked.valueOf() != question?.correct_answer.valueOf()
          "
          >You picked the wrong answer!</span
        >
        <span v-else>Pick an answer</span>
        <button
          class="px-4 py-2 rounded-md bg-blue-400"
          @click="getNewQuestion"
        >
          Next question
        </button>
      </div>
      <!-- interface OpentdbQuizQuestion {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_question: string[]
} -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuestionStore } from '@/stores/question'
import { useUserStore } from '@/stores/user'

export default defineComponent({
  props: {
    difficulty: {
      type: String,
      required: true,
    },
  },
  data() {
    return { questionPicked: '' }
  },
  setup() {
    const questionStore = useQuestionStore()
    const userStore = useUserStore()
    const token = userStore.user?.token

    const { question } = storeToRefs(questionStore)

    return { question, questionStore, token }
  },
  methods: {
    getNewQuestion() {
      this.questionStore.getQuestion(this.difficulty, (this.token = ''))
      this.questionPicked = ''
    },
    answerGiving(answer: string) {
      this.questionPicked = answer
    },
  },
  beforeMount() {
    this.getNewQuestion()
  },
})
</script>
