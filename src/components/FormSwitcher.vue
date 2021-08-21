<template>
  <!-- clever css hack to display a div based on the radio selected as well as style the relevant label -->
  <!-- buttons for switching language are relocated at the top of this div -->
  <div class="relative pt-16">
    <!-- login form -->
    <div>
      <input
        class="nt1-switcher-radio hidden"
        type="radio"
        id="login-form"
        name="switcher-radio"
        value="login-form"
        v-model="formType"
      />
      <div class="nt1-switcher-label absolute top-0 left-0 w-1/2 flex">
        <label
          class="
            w-full
            text-center
            bg-gray-200
            dark:bg-gray-850
            transition-background-150
            font-bold
            py-2
            rounded-l-md
            cursor-pointer
            hover:lighten-2
            dark:hover:lighten-10
            select-none
            border-2 border-solid border-transparent
          "
          for="login-form"
          >Login</label
        >
      </div>
      <login-form class="nt1-switcher-form" />
    </div>

    <!-- register form -->
    <div>
      <input
        class="nt1-switcher-radio hidden"
        type="radio"
        id="register-form"
        name="switcher-radio"
        value="register-form"
        v-model="formType"
      />
      <div class="nt1-switcher-label absolute top-0 right-0 w-1/2 flex">
        <label
          class="
            w-full
            text-center
            bg-gray-200
            dark:bg-gray-850
            transition-background-150
            font-bold
            py-2
            rounded-r-md
            cursor-pointer
            hover:lighten-2
            dark:hover:lighten-10
            select-none
            border-2 border-solid border-transparent
          "
          for="register-form"
          >Register</label
        >
      </div>
      <register-form class="nt1-switcher-form" />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
export default {
  name: 'FormSwitcher',
  components: { LoginForm, RegisterForm },
  setup() {
    const formType = ref('login-form')

    return {
      formType,
    }
  },
}
</script>
