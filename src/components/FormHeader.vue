<template>
  <header
    class="
      w-full
      my-10
      md:mb-20
      flex
      justify-center
      items-center
      transition-color-150
    "
  >
    <naito-logo class="hidden sm:block h-20 w-20" title="Naito One Logo" />
    <div class="flex flex-col items-center">
      <h1 class="font-heading text-5xl text-center leading-tighter">
        One Account
      </h1>
      <h2 class="font-medium text-2xl text-center leading-tighter">
        TO RULE THEM ALL
      </h2>
    </div>
  </header>
</template>

<script>
import NaitoLogo from './NaitoLogo.vue'

export default {
  name: 'LoginForm',
  components: { NaitoLogo },
  setup() {},
}
</script>
