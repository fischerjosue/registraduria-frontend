<template>
  <header class="flex items-center justify-between z-50 py-2 px-4 border-b bg-white">
    <RouterLink to="/"><img class="w-28" src="@/assets/logo.png" alt="Logo de la Registraduría Nacional del Estado Civil"/></RouterLink>
    <nav class="flex gap-4 font-semibold">
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/">Inicio</RouterLink>
      <RouterLink class="hover:text-gray-600 focus:text-black" to="/dashboard">Elecciones</RouterLink>
    </nav>
  </header>

  <div>
    <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp" v-on:logOut="logOut"></router-view>
  </div>
  
  <footer class="p-4 bg-white rounded-3xl shadow md:px-6 md:py-4 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <RouterLink to="/"><a class="flex items-center mb-4 sm:mb-0">
              <img src="@/assets/logo.png" class="w-20" alt="Logo de la Registraduría Nacional del Estado Civíl"/>
          </a></RouterLink>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-semibold">
              <li>
                <RouterLink class="hover:text-gray-600 focus:text-black mr-4 md:mr-6" to="/">Inicio</RouterLink>
              </li>
              <li>
                <RouterLink class="hover:text-gray-600 focus:text-black mr-4 md:mr-6" to="/dashboard">Elecciones</RouterLink>
              </li>
          </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4"/>
      <p class="block text-base text-gray-500 sm:text-center dark:text-gray-400"><i class="bi bi-github" style="font-size: 1.5rem; color: gray; padding-right: 5px; vertical-align: bottom;"></i><a href="https://github.com/iamjosuefischer/registraduria-frontend" class="hover:underline">Repositorio de GitHub</a>
      </p>
  </footer>
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
      this.$router.push("/signup")
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