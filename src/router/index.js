import { createRouter, createWebHistory } from "vue-router";
import PaginaLogada from "../views/PaginaLogada.vue";
import PaginaDeslogada from "../views/PaginaDeslogada.vue";
import LoginUsuario from "../views/LoginUsuario.vue";
import PaginaCadastro from "../views/PaginaCadastro.vue";
import PaginaLogin from "../views/PaginaLogin";
import PainelControle from "@/views/PainelControle.vue";
import PaginaLogada from "../views/PaginaLogada"; 

const routes = [
  // {
  //   path: "/teste",
  //   component: compPai
  // },
  {
    path: "/",
    component: PaginaDeslogada,
  },
  {
    path: "/inicio",
    component: PaginaLogada,
  },
  {
    path: "/about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cadastro",
    component: PaginaCadastro
  },
  {
    path: "/loginUsuario",
    component: LoginUsuario
  },
  {
    path: "/painelControle",
    component: PainelControle
  },
  {
    path: "/paginaLogin",
    component: PaginaLogin
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
