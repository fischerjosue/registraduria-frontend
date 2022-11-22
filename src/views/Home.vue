<template>
  <main class="mt-4">
    <h1 class="font-bold text-3xl">Pagina Inicial</h1>
  </main>
</template>

<script>
// import TheWelcome from '../components/TheWelcome.vue'
import auth from "@/logic/auth";
export default {
  name: "Home",
  components: {
    navigation: Navigation
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  }
};
</script>
