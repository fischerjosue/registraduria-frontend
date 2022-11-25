<template>
    <div class="flex justify-between items-center my-4 p-4 bg-gray-100 rounded-full">
        
        <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">Menu Principal <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg></button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                <li>
                    <a href="#"
                        class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <button id="btnCandidatos" data-dropdown-toggle="DropdownCandidatos"
                        data-dropdown-placement="right-start" type="button"
                        class="flex justify-between items-center py-2 px-4 w-full hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white">Candidatos<svg
                            aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg></button>
                    <button id="btnPartidos" data-dropdown-toggle="DropdownPartidos"
                        data-dropdown-placement="right-start" type="button"
                        class="flex justify-between items-center py-2 px-4 w-full hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white">Partidos<svg
                            aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg></button>
                    <button id="btnMesas" data-dropdown-toggle="DropdownMesas" data-dropdown-placement="right-start"
                        type="button"
                        class="flex justify-between items-center py-2 px-4 w-full hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white">Mesas<svg
                            aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg></button>
                    <button id="btnResultados" data-dropdown-toggle="DropdownResultados"
                        data-dropdown-placement="right-start" type="button"
                        class="flex justify-between items-center py-2 px-4 w-full hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white">Resultados<svg
                            aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg></button>
                    <div id="DropdownCandidatos"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="DropdownCandidatos">
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="candidatos">Listar</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="infocandidatos">Ver/Borrar</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="nuevocandidato">Crear</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="actualizarcandidato">Actualizar</router-link>
                            </li>
                        </ul>
                    </div>
                    <div id="DropdownPartidos"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="DropdownPartidos">
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="partidos">Listar</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="infopartido">Ver/Borrar</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="nuevopartido">Crear</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="actualizarpartido">Actualizar</router-link>
                            </li>
                        </ul>
                    </div>
                    <div id="DropdownMesas"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="DropdownMesas">
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="mesas">Listar</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="infomesa">Ver/Borrar</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="nuevamesa">Crear</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="actualizarmensa">Actualizar</router-link>
                            </li>
                        </ul>
                    </div>
                    <div id="DropdownResultados"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="DropdownResultados">
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="resultadoscandidato">Resultado Candidatos</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="resultadosmesa">Resultados Mesa</router-link>
                            </li>
                            <li>
                                <router-link
                                    class="block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    to="nuevoresultadocandiddato">Nuevo Resul-Candidato</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button class="block text-start py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                        v-on:click="logOut">Salir</button>
                </li>
            </ul>
        </div>
        <h2 class="text-xl font-bold ml-2">{{ name }}</h2>
    </div>
</template>

<script>
export default {
    methods: {
        logOut: function () {
            localStorage.clear();
            alert("Sesión Cerrada");
            this.$router.push({ name: "logIn" })
        },
    },
}
</script>