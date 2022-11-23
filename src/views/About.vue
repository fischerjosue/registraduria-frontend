<template>
  <div class="overflow-x-auto mt-4 relative shadow-sm sm:rounded-lg">
    <table class="w-full text-xs md:text-sm text-center text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            #
          </th>
          <th scope="col" class="py-3 px-6">
            Nombre
          </th>
          <th scope="col" class="py-3 px-6">
            Documento
          </th>
          <th scope="col" class="py-3 px-6">
            Resolución
          </th>
          <th scope="col" class="py-3 px-6">
            Partido
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="py-4 px-6">
            {{ index + 1 }}
          </th>
          <td class="py-4 px-6 font-medium">
            {{ item.nombre }} {{ item.apellido }}
          </td>
          <td class="py-4 px-6">
            {{ item.cedula }}
          </td>
          <td class="py-4 px-6">
            {{ item.numero_resolucion }}
          </td>
          <td class="py-4 px-6">
            {{ item.partido }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue';

const items = ref([])
onMounted(async () => {
  await axios
    .get('http://127.0.0.1:9999/candidatos')
    .then(response => {
      items.value = response.data
      console.log(items)
    })
  Cookies.get('userLogged')
    console.log(Cookies.value)
})
</script>
