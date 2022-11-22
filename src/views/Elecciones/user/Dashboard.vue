<template>
    <main class="grid grid-cols-6 gap-4 mt-4 h-[calc(100vh-100px)]">
        <aside class="col-span-1  border-r ">
            <nav class="grid">
                <router-link to="">Resultado</router-link>
                <router-link to="">Candidatos</router-link>
                <router-link to="">Mesas</router-link>

            </nav>
        </aside>

        <section class="col-span-5">
            <Candidatos />
        </section>
    </main>

</template>

<script setup>
import Candidatos from '@/components/Candidatos.vue'
</script>
