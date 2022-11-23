<template>
  <header class="flex items-center justify-between z-50 py-2 px-4 border-b bg-white">
    <RouterLink to="/"><img class="w-28" src="@/assets/logo.png" alt="Registraduría Nacional del Estado Civil" />
    </RouterLink>
    <nav class="flex gap-4 font-semibold">
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/">Inicio</RouterLink>
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/about">Nosotros</RouterLink>
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/dashboard">Elecciones</RouterLink>
      <a v-if="coki" href="">usuario</a>
    </nav>
  </header>

  <div>
    <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp" v-on:logOut="logOut">
    </router-view>
  </div>

</template>


<script>
export default {
  name: 'App',
  data: function () {
    return {
      is_auth: false
    }
  },

  components: {
  },

  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false)
        this.$router.push("/login");
      else
        this.$router.push("/dashboard");
    },

    loadAccount: function () {
      this.$router.push("/dashboard");
    },

    loadHome: function () {
      this.$router.push("/dashboard");
    },

    logOut: function () {
      localStorage.clear();
      // alert("Sesión Cerrada");
      this.verifyAuth();
    },

    loadLogIn: function () {
      this.$router.push("/login")
    },

    loadSignUp: function () {
      this.$router.push("/singup")
    },

    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token", data.token.token);
      localStorage.setItem("user_id", data.token.user_id);
      console.log(localStorage.token)
      this.verifyAuth();
    },

    completedSignUp: function (data) {
      alert("Registro Exitoso");
      // const formregistro = document.getElementById("formRegistro")
      // formregistro.reset();
      // this.completedLogIn(data);
    },
  },
  created: function () {
    this.verifyAuth()
  }
}
</script>