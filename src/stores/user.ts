import { defineStore } from 'pinia'
import { router } from '@/router'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: JSON.parse(
        localStorage.getItem('user') || 'null'
      ) as UserInfo | null,
    }
  },

  actions: {
    async login(username: string, password: string) {
      try {
        const requestToken: OpentdbRequestToken = await fetch(
          'https://opentdb.com/api_token.php?command=request'
        ).then((response) => response.json())

        const user = {
          username,
          password,
          token: requestToken.token,
        }

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
    isLoggedIn(state): boolean {
      return !!state.user
    },
  },
})

interface UserInfo {
  username: string
  password: string
  token: string
}

interface OpentdbRequestToken {
  response_code: number
  response_message: string
  token: string
}
