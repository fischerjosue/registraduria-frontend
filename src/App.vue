<template>


  <header class="flex items-center justify-between z-50 py-2 px-4 border-b bg-white">
    <RouterLink to="/"><img class="w-28" src="@/assets/logo.png" alt="Registraduría Nacional del Estado Civil" />
    </RouterLink>
    <nav class="flex gap-4 font-semibold">
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/">Inicio</RouterLink>
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/about">Nosotros</RouterLink>
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/login">Elecciones</RouterLink>
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/dashboarduser">Usuario</RouterLink>
      <a v-if="coki" href="">usuario</a>
    </nav>
  </header>

  <RouterView />

</template>


<script>
export default {
  name: "App",

};
</script>