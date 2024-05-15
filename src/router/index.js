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
import CardConfirmRecebimento from "@/components/forms/CardConfirmRecebimento";

const routes = [
  {
    path: "/",
    name: "paginaDeslogadaRt",
    component: PaginaDeslogada,
  },
  {
    path: "/paginaEstabelecimento",
    name: "paginaEstabelecimentoRt",
    component: PaginaEstabelecimento,
    props: (route) => ({ query: route.query })
  },
  {
    path: "/acompanharPedido",
    name: "acompanharPedidoRt",
    component: AcompanharPedido,
  },
  {
    path: "/finalizarPedido",
    name: "finalizarPedidoRt",
    component: FinalizarPedido,
  },
  {
    path: "/inicio",
    name: "paginaLogadaRt",
    component: PaginaLogada,
  },
  {
    path: "/modalPerfil",
    name: "modalPerfilRt",
    component: ModalPerfil,
  },
  {
    path: "/cardConfirmRecebimento",
    name: "cardConfirmRecebimentoRt",
    component: CardConfirmRecebimento,
  },
  {
    path: "/modalCartao",
    name: "modalCartaoRt",
    component: ModalCartao,
  },
  {
    path: "/paginaCadastro",
    name: "paginaCadastroRt",
    component: PaginaCadastro,
  },
  {
    path: "/paginaLogin",
    name: "paginaLoginRt",
    component: PaginaLogin,
  },
  {
    path: "/painelControle",
    name: "painelControleRt",
    component: PainelControle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
