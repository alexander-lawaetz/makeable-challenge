import { defineStore } from 'pinia'

export const useQuestionStore = defineStore('question', {
  state: () => {
    return {
      question: null as QuizQuestion | null,
    }
  },

  actions: {
    async getQuestion(difficult: string, token: string) {
      try {
        const response: OpentsQuizResponse = await fetch(
          `https://opentdb.com/api.php?amount=1&difficulty=${difficult}&token=${token}`
        ).then((response) => response.json())

        const {
          category,
          type,
          difficulty,
          question,
          correct_answer,
          incorrect_answers,
        }: OpentdbQuizQuestion = response.results[0]

        this.question = {
          category,
          type,
          difficulty,
          question,
          correct_answer,
          giving_questions: shuffle([correct_answer, ...incorrect_answers]),
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
})

function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

interface OpentsQuizResponse {
  response_code: string
  results: OpentdbQuizQuestion[]
}

interface OpentdbQuizQuestion {
  category: string
  type: string | boolean
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

interface QuizQuestion {
  category: string
  type: string | boolean
  difficulty: string
  question: string
  correct_answer: string
  giving_questions: string[]
}
