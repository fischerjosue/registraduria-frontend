<template>
    <h1>Dashboard</h1>
</template>

<script>
import auth from "@/logic/auth";
export default {
    name: "Dashboard",
    computed: {
        userlogeed() {
            const conectado = auth.getUserLogged()
            if (conectado == "userlogeed") {
                alert("conetado")
            } else {
                this.$route("/login")
            }
        }
    },
  
};
</script>
