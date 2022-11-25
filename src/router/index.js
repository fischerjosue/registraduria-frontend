import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Elecciones/Login.vue"
import SignUp from "../views/Elecciones/SignUp.vue";
import Dashboard from "../views/Elecciones/Dashboard.vue";
import AsignarRolUsuario from "../views/Admin/AsignarRolUsuario.vue";

/* Candidatos */
import Candidatos from "../views/Elecciones/Candidatos/Candidatos.vue";
import NuevoCandidato from "../views/Elecciones/Candidatos/NuevoCandidato.vue";
import ActualizarCandidato from "../views/Elecciones/Candidatos/ActualizarCandidato.vue";
import InfoCandidato from "../views/Elecciones/Candidatos/InfoCandidato.vue";

/* Mesas */
import Mesas from "../views/Elecciones/Mesas/Mesas.vue";

/* Partidos */
import Partidos from "../views/Elecciones/Partidos/Partidos.vue";
import NuevoPartido from "../views/Elecciones/Partidos/NuevoPartido.vue";
import ActualizarPartido from "../views/Elecciones/Partidos/ActualizarPartido.vue";
import InfoPartido from "../views/Elecciones/Partidos/InfoPartido.vue";

/* Resultados x Canndidato */
import ResultadosCandidaro from "../views/Elecciones/Resultado-Candidato/Resultados.vue";
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
      path: "/signup",
      name: "signUp",
      component: SignUp,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/asignarrolusuario",
      name: "asignarrolusuario",
      component: AsignarRolUsuario,
    },
    {
      path: "/candidatos",
      name: "candidatos",
      component: Candidatos,
    },
    {
      path: "/nuevocandidato",
      name: "nuevocandidato",
      component: NuevoCandidato,
    },
    {
      path: "/actualizarcandidato",
      name: "actualizarcandidato",
      component: ActualizarCandidato,
    },
    {
      path: "/infocandidato",
      name: "infocandidato",
      component: InfoCandidato,
    },
    {
      path: "/mesas",
      name: "mesas",
      component: Mesas,
    },
    {
      path: "/partidos",
      name: "partidos",
      component: Partidos,
    },
    {
      path: "/nuevopartido",
      name: "nuevopartido",
      component: NuevoPartido,
    },
    {
      path: "/actualizarpartido",
      name: "actualizarpartido",
      component: ActualizarPartido,
    },
    {
      path: "/infopartido",
      name: "infopartido",
      component: InfoPartido,
    },
    {
      path: "/resultadoscandidato",
      name: "resultadoscandidato",
      component: ResultadosCandidaro,
    },
    {
      path: "/nuevoresultadocandiddato",
      name: "nuevoresultadocandiddato",
      component: NuevoResultado,
    },
    {
      path: "/resultadosmesa",
      name: "resultadosmesa",
      component: ResultadosMesa,
    },
  ],
});

export default router