import { createRouter, createWebHistory } from "vue-router";
import PaginaDeslogada from "../views/PaginaDeslogada.vue";
import LoginUsuario from "../views/LoginUsuario.vue";
import CardCriarUsu from "../components/CamposUsu.vue";
import compPai from "@/views/compPai.vue";
import PaginaLogin1 from "../views/PaginaLogin1";

const routes = [
  {
    path: "/",
    name: "home",
    component: PaginaDeslogada,
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
  // {
  //   path: "/",
  //   name: "painelControle",
  //   component: PainelControle
  // },
  {
    path: "/teste",
    name: "teste",
    component: compPai
  },
  {
    path: "/criarUsuario",
    name: "criarUsuario",
    component: CardCriarUsu
  },
  {
    path: "/paginaLogin1",
    name: "paginaLogin1",
    component: PaginaLogin1
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
