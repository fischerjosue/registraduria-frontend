<template>
  <header class="flex items-center justify-between z-50 py-2 px-4 border-b bg-white">
    <RouterLink to="/"><img class="w-28" src="@/assets/logo.png" alt="Registraduría Nacional del Estado Civil" />
    </RouterLink>
    <nav class="flex gap-4 font-semibold">
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/">Inicio</RouterLink>
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/about">Nosotros</RouterLink>
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/login">Elecciones</RouterLink>
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/crearcandidato">Crear Candidato</RouterLink>
    </nav>
  </header>

  <AdminMenu />

  <RouterView />
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AdminMenu from "./components/admin/menu.vue"
  /* import HelloWorld from './components/HelloWorld.vue' */
</script>