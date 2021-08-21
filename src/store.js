import { ref } from 'vue'

export const state = {
  /**
   * When true, the app should be rendered in dark mode
   */
  darkMode: ref(false),
}

export const getters = {}

export const actions = {
  /**
   * Set the app dark mode
   * @param {boolean} darkMode the new dark mode
   * @returns {boolean} the new dark mode
   */
  setDarkMode(darkMode) {
    state.darkMode.value = darkMode
    return darkMode
  },
}

export default {
  state,
  getters,
  actions,
}
