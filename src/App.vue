<template>
  <main class="w-full h-full font-content text-gray-900 dark:text-gray-100">
    <div class="w-full">
      <div class="relative ml-auto w-12 h-12">
        <label
          for="theme-selector"
          class="
            select-none
            absolute
            pointer-events-none
            w-full
            h-full
            text-center
            bg-gray-300
            dark:bg-gray-1000
            transition-background-150
            rounded-full
            text-xl
            leading-12
          "
          :class="darkMode ? 'bi-moon-fill' : 'bi-sun'"
          aria-hidden="true"
        >
        </label>
        <select
          aria-label="Theme Selector"
          title="Change theme"
          v-model="theme"
          name="theme-selector"
          id="theme-selector"
          class="
            cursor-pointer
            w-full
            h-full
            px-2
            block
            appearance-none
            bg-gray-300
            dark:bg-gray-1000
            transition-background-150
            rounded-full
          "
          tabindex="-1"
        >
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
          <option value="auto">Based on System Settings</option>
        </select>
      </div>
    </div>
    <section
      class="
        mx-4
        sm:w-112 sm:mx-auto
        mt-4
        md:mt-12
        bg-gray-100
        dark:bg-gray-900
        transition-background-150
        p-5
        rounded-md
        flex flex-col
        items-center
      "
    >
      <form-header />
      <form-switcher />
    </section>
  </main>
</template>

<script>
import store from './store'
import { ref, watch } from 'vue'

import FormSwitcher from './components/FormSwitcher.vue'
import FormHeader from './components/FormHeader.vue'

export default {
  name: 'App',
  components: {
    FormSwitcher,
    FormHeader,
  },

  setup() {
    const theme = ref('auto')

    function isMediaDarkTheme() {
      if (!('theme' in localStorage)) {
        // return default theme. light for now
        return false
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    function updateTheme() {
      if (theme.value === 'auto') {
        const isDark = isMediaDarkTheme()

        if (isDark) {
          // toggle dark class on the html node
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }

        localStorage.removeItem('theme')
        store.state.darkMode.value = isDark
      } else if (theme.value === 'dark') {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        store.state.darkMode.value = true
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        store.state.darkMode.value = false
      }
    }

    function initTheme() {
      if (localStorage.theme === 'dark') {
        theme.value = 'dark'
      } else if (localStorage.theme === 'light') {
        theme.value = 'light'
      }
      // defaults to auto
    }

    initTheme()
    updateTheme()
    watch(theme, updateTheme)

    return {
      darkMode: store.state.darkMode,
      theme,
    }
  },
}
</script>
