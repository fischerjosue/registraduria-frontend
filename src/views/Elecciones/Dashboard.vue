<template>
    <main class="grid grid-cols-6 gap-4 mt-4 h-[calc(100vh-250px)]">
        <aside class="col-span-1  border-r">
            <nav class="grid">
                <router-link to="">Resultado</router-link>
                <router-link to="candidatos">Candidatos</router-link>
                <router-link to="mesas">Mesas</router-link>
                <router-link to="asignarrolusuario">Arignar Rol a Usuario</router-link>
            </nav>
        </aside>
    </main>
</template>

<script>
export default {
name: "home",
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
            this.$router.push("/login");
            else
            this.$router.push("/dashboard");
        }
    },
    created: function () {
    this.verifyAuth()
  }
};
</script>