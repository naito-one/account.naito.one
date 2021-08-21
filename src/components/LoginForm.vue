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
    <div
      class="flex items-center w-full my-3 transition-color-150 checkbox-parent"
    >
      <label class="nt1-checkbox-parent cursor-pointer w-8" for="remember-me">
        <input
          class="hidden"
          v-model="rememberMe"
          type="checkbox"
          name="remember-me"
          id="remember-me"
        />
        <span
          class="
            label__check
            border-2 border-solid border-gray-400
            dark:border-gray-600
            hover:border-4
            transition-border-radius-300
            rounded-full
          "
        >
          <span
            class="
              bi-check
              text-gray-400
              dark:text-gray-600
              opacity-100
              text-xl
              nt1-checkbox-icon
            "
            aria-hidden="true"
          ></span>
        </span>
      </label>
      <label
        class="
          flex-grow
          px-4
          py-3
          transition-color-150
          cursor-pointer
          select-none
        "
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
        hover:lighten-2
        dark:hover:lighten-5
      "
      type="submit"
    >
      Login
    </button>
    <a
      class="
        mt-10
        md:mt-20
        w-full
        px-4
        py-3
        text-center
        hover:text-naito-pink-200
        dark:hover:text-naito-pink-100
      "
      href="/recover"
      >Forgot Password ?</a
    >
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
