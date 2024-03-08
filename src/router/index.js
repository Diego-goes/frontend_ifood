import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginUsuario from "../views/LoginUsuario.vue";
import PainelControle from "../views/PainelControle.vue";
import CardCriarUsu from "../components/CardUsu.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/loginUsuario",
    name: "loginUsuario",
    component: LoginUsuario
  },
  {
    path: "/painelControle",
    name: "painelControle",
    component: PainelControle
  },
  {
    path: "/criarUsuario",
    name: "criarUsuario",
    component: CardCriarUsu
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
