<template>
    
    <main class="grid grid-cols-6 mt-4 h-[calc(100vh-100px)]">
        <aside class="col-span-1  border-r ">
            <nav class="flex-col">
                <a href="#">Partidos inscritos</a> 
                <br>
                <a href="#">Candidatos</a> 
                <br>
                <a href="#">Resulados</a>
                
            </nav>
        </aside>
    </main>

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

