import { defineStore } from 'pinia'
import demoData from '@/data/demoUser.json'
import { router } from '@/router'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: JSON.parse(localStorage.getItem('user') || '[]') as UserInfo | null,
    }
  },

  actions: {
    login(username: string, password: string) {
      try {
        if (username !== demoData.username && password !== demoData.password)
          throw new Error(
            'Username and Password did not match the Demo credintials'
          )

        const user = demoData

        this.user = user

        localStorage.setItem('user', JSON.stringify(user))

        router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
      router.push('/login')
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
  },
})

interface UserInfo {
  id: number
  username: string
  password: string
}
