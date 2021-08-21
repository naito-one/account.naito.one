<template>
  <form
    @submit="login"
    action="#"
    method="post"
    class="w-full sm:w-80 px-10 sm:px-0 flex-col items-center"
  >
    <div class="nt1-text-field w-full my-3" data-active="false">
      <label for="email" class="bi-envelope-fill" aria-hidden="true"></label>
      <input
        class="flex-grow"
        v-model="username"
        type="email"
        name="email"
        id="email"
        autocomplete="email"
        placeholder="Email"
        required
        aria-label="Email address"
        @focus="$event.target.parentElement.dataset.active = true"
        @blur="$event.target.parentElement.dataset.active = false"
      />
    </div>
    <div class="nt1-text-field w-full my-3" data-active="false">
      <label for="password" class="bi-lock-fill" aria-hidden="true"></label>
      <input
        class="flex-grow"
        v-model="password"
        type="password"
        name="password"
        id="password"
        autocomplete="current-password"
        placeholder="Password"
        required
        aria-label="Password"
        @focus="$event.target.parentElement.dataset.active = true"
        @blur="$event.target.parentElement.dataset.active = false"
      />
    </div>
    <div class="flex items-center w-full my-3 transition-color-150">
      <input
        v-model="rememberMe"
        type="checkbox"
        name="remember-me"
        id="remember-me"
      />
      <label
        class="flex-grow px-4 py-3 transition-color-150 select-none"
        for="remember-me"
        >Keep me signed in</label
      >
    </div>

    <button
      class="
        w-full
        px-4
        py-3
        bg-naito-yellow-200
        dark:bg-naito-yellow-100 dark:text-gray-900
        transition-background-150
        font-semibold
        text-center
        rounded-md
        mb-3
      "
      type="submit"
    >
      Register
    </button>
  </form>
</template>

<script>
import store from '../store'
import { ref } from 'vue'

export default {
  name: 'LoginForm',
  setup() {
    const username = ref('')
    const password = ref('')
    const rememberMe = ref(false)

    /**
     * @param {Event} event
     */
    function login(event) {
      event.preventDefault()
      console.log(username.value)
      console.log(password.value)
      console.log(rememberMe.value)
    }

    return {
      username,
      password,
      rememberMe,
      darkMode: store.state.darkMode,

      login,
    }
  },
}
</script>
