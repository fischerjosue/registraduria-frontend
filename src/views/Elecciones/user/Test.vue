<template>
    
    <main class="grid grid-cols-6 mt-4 h-[calc(100vh-100px)]">
            
        <aside class="col-span-1  border-r ">
            
            <nav class="flex-col">
                
                <a v-on:click="mostrarPartidos=true" href="#">Partidos inscritos</a> 
                
                <br>
                <a v-on:click="mostrarPartidos=true" href="#">Candidatos</a> 
                
                <br>
                <a v-on:click="mostrarPartidos=true" href="#">Resulados</a> 
                
            
            </nav>

        </aside>

        <div id="app" v-if="mostrarPartidos">
            <img src="@/assets/logo.png"> Este es un mensaje de prueba para partidos inscritos
        </div>
        <div id="app" v-if="mostrarInscritos">
            <img src="@/assets/logo.png"> Este es un mensaje de prueba para candidatos inscritos
        </div>
        <div id="app" v-if="mostrarResultados">
            <img src="@/assets/logo.png"> Este es un mensaje de prueba para resultados
        </div>
    </main>





    
</template>






<script>
export default {
  name: "Test",

};
const app={
    data() {
        return{
            mostrarPartidos: false

        }
    }
}

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