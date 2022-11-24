import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Elecciones/Login.vue"
import SingUp from "../views/Elecciones/SingUp.vue";
import Dashboard from "../views/Elecciones/Dashboard.vue";

/* Candidatos */
import Candidatos from "../views/Elecciones/Candidatos/Candidatos.vue";
import NuevoCandidato from "../views/Elecciones/Candidatos/NuevoCandidato.vue";
import ActualizarCandidato from "../views/Elecciones/Candidatos/ActualizarCandidato.vue";
import InfoCandidato from "../views/Elecciones/Candidatos/InfoCandidato.vue";

/* Mesas */
import Mesas from "../views/Elecciones/Mesas/Mesas.vue";
import NuevaMesa from "../views/Elecciones/Mesas/NuevaMesa.vue";
import ActualizarMesa from "../views/Elecciones/Mesas/ActualizarMesa.vue";
import InfoMesa from "../views/Elecciones/Mesas/InfoMesa.vue";

/* Partidos */
import Partidos from "../views/Elecciones/Partidos/Partidos.vue";
import NuevoPartido from "../views/Elecciones/Partidos/NuevoPartido.vue";
import ActualizarPartido from "../views/Elecciones/Partidos/ActualizarPartido.vue";
import InfoPartido from "../views/Elecciones/Partidos/InfoPartido.vue";

/* Resultados x Canndidato */
import Resultados from "../views/Elecciones/Resultado-Candidato/Resultados.vue";
import NuevoResultado from "../views/Elecciones/Resultado-Candidato/NuevoResultado.vue";

/* Resultados x Mesa */
import ResultadosMesa from "../views/Elecciones/Resultado-Mesa/Resultados.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "logIn",
      component: Login,
    },
    {
      path: "/singup",
      name: "singUp",
      component: SingUp,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/candidatos",
      name: "candidatos",
      component: Candidatos,
    },
    {
      path: "/mesas",
      name: "mesas",
      component: Mesas,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
  ],
});

export default router