import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Elecciones/Login.vue"
import SingUp from "../views/Elecciones/SingUp.vue";
import DashBoard from "../views/Elecciones/Dashboard.vue";

/* Candidatos */
import CandidatosAll from "../views/Elecciones/admin/Candidatos/CandidatosAll.vue";

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
      component: DashBoard,
    },
    {
      path: "/candidatos",
      name: "candidatos",
      component: CandidatosAll,
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