<template>
    <div class="greetings">
        <h1>Bienvenido a Hospital Home, <span>{{ username }}</span>.</h1>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            username: localStorage.getItem('username') || "none",
            perfil: localStorage.getItem('perfil') || "none"
        }
    }
}
</script>
