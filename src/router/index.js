import { createRouter, createWebHistory } from "vue-router";
import PaginaLogada from "../views/PaginaLogada.vue";
import PaginaDeslogada from "../views/PaginaDeslogada.vue";
import PaginaLogin from "../views/PaginaLogin.vue";
import PainelControle from "@/views/PainelControle.vue";
import PaginaCadastro from "@/views/PaginaCadastro.vue";
import PaginaEstabelecimento from "@/views/PaginaEstabelecimento.vue";
import AcompanharPedido from "@/views/AcompanharPedido.vue";
import FinalizarPedido from "@/views/FinalizarPedido.vue";
import ModalPerfil from "@/components/forms/ModalPerfil";
import ModalCartao from "@/components/forms/ModalCartao";

const routes = [
  {
    path: "/",
    component: PaginaDeslogada,
  },
  {
    path: "/paginaEstabelecimento",
    component: PaginaEstabelecimento,
  },
  {
    path: "/acompanharPedido",
    component: AcompanharPedido,
  },
  {
    path: "/finalizarPedido",
    component: FinalizarPedido,
  },
  {
    path: "/inicio",
    component: PaginaLogada,
  },
  {
    path: "/modalPerfil",
    component: ModalPerfil,
  },
  {
    path: "/modalCartao",
    component: ModalCartao,
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
    path: "/paginaCadastro",
    component: PaginaCadastro,
  },
  {
    path: "/paginaLogin",
    component: PaginaLogin,
  },
  {
    path: "/painelControle",
    component: PainelControle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
