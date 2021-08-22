<template>
  <form
    @submit="login"
    action="#"
    method="post"
    class="w-full sm:w-80 px-10 sm:px-0 flex-col items-center"
  >
    <div class="nt1-text-field w-full my-3">
      <input
        class="flex-grow"
        v-model="username"
        type="email"
        name="login-email"
        id="login-email"
        autocomplete="email"
        placeholder="Email"
        required
        aria-label="Email address"
      />
      <label
        for="login-email"
        class="text-xl w-8 text-center"
        :class="darkMode ? 'bi-envelope-fill' : 'bi-envelope'"
        aria-hidden="true"
      ></label>
      <div class="nt1-text-field-border"></div>
    </div>
    <div class="nt1-text-field w-full my-3 flex flex-row-reverse">
      <input
        class="flex-grow"
        v-model="password"
        type="password"
        name="login-password"
        id="login-password"
        autocomplete="current-password"
        placeholder="Password"
        required
        aria-label="Password"
      />
      <label
        for="login-password"
        class="text-xl w-8 text-center"
        :class="darkMode ? 'bi-lock-fill' : 'bi-lock'"
        aria-hidden="true"
      ></label>
      <div class="nt1-text-field-border"></div>
    </div>
    <div
      class="flex items-center w-full my-3 transition-color-150 checkbox-parent"
    >
      <label
        class="nt1-checkbox-parent cursor-pointer w-8"
        for="login-remember-me"
      >
        <input
          class="absolute opacity-0"
          v-model="rememberMe"
          type="checkbox"
          name="login-remember-me"
          id="login-remember-me"
        />
        <span
          class="
            nt1-checkbox-icon-parent
            w-8
            h-8
            border-2 border-solid border-gray-400
            dark:border-gray-600
            hover:border-4
            transition-border-radius-300
            rounded-full
            flex
            justify-center
            items-center
            cursor-pointer
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
        for="login-remember-me"
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
        select-none
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
