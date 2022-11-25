<template>
    <Menu/>
    <div class="flex justify-center">
        <img src="@/assets/elecciones.jpg" class=""
          alt="Elecciones 2022"/>
      </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
    name: "Dashboard",
    data: function () {
        return {
            userid: localStorage.getItem("user_id") || "none",
            items: "",
            loaded: false,
        };
    },
    components: {Menu},
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