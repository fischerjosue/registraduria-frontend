<template>
    <div class="overflow-x-auto mt-4 relative shadow-sm sm:rounded-lg">
        <table class="w-full text-xs md:text-sm text-center text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        #
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Número de Mesa
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Cantidad Inscritos
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
                        {{ item.numero }}
                    </td>
                    <td class="py-4 px-6">
                        {{ item.cantidad_inscritos }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
    data: function () {
        return {
            userid: localStorage.getItem("user_id") || "none",
            items: "",
            loaded: false,
        };
    },
    methods: {
        verifyAuth: function () {
            this.is_auth = localStorage.getItem("isAuth") || false;
            if (this.is_auth == false)
            this.$router.push({ name: "logIn" });
            else
            this.$router.push({ name: "dashboard" });
            
            // let userId = jwt_decode(localStorage.token).sub.rol.nombre.toString();
        },
        getData: async function () {
            if (localStorage.getItem("token") === null) {
                this.$emit("logOut");
                return;
            }
            
            const options = {
                method: 'GET',
                url: 'http://127.0.0.1:9999/mesa',
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            };
            
            axios.request(options).then((response) => {
                this.items = response.data;
                this.loaded = true;
                console.log(response.data);
            }).catch((error) => {
                console.error(error);
                this.$emit("logOut");
            });
        },
    },
    components: {  },
    created: async function () {
        this.getData();
    },

};
</script>