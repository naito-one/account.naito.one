<template>
  <main class="w-full h-full font-content text-gray-900 dark:text-gray-100">
    <div class="w-full">
      <input
        v-model="darkMode"
        type="checkbox"
        name="enable-dark-mode"
        id="enable-dark-mode"
      />
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
import { watch } from 'vue'

import FormSwitcher from './components/FormSwitcher.vue'
import FormHeader from './components/FormHeader.vue'

export default {
  name: 'App',
  components: {
    FormSwitcher,
    FormHeader,
  },

  setup() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      store.state.darkMode.value = true
    } else {
      document.documentElement.classList.remove('dark')
      store.state.darkMode.value = false
    }

    // toggle dark class on the html node
    watch(store.state.darkMode, (darkMode) => {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
    })

    // TODO: revert theme
    // localStorage.removeItem('theme')

    return {
      darkMode: store.state.darkMode,
    }
  },
}
</script>
