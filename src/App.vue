<template>
  <Nav v-if="user.isLoggedIn" />
  <RouterView :key="$route.path" />
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/Nav.vue'
import { defineComponent } from 'vue'
import { useUserStore } from './stores/user'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const user = userStore

    return { user }
  },
  components: {
    Nav,
  },
})
</script>
