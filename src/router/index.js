import { createRouter, createWebHistory } from "vue-router";
import PaginaLogada from "../views/PaginaLogada.vue";
import PaginaDeslogada from "../views/PaginaDeslogada.vue";
import PaginaLogin from "../views/PaginaLogin.vue";
import PaginaCadastro from "@/views/PaginaCadastro.vue";
import PaginaEstabelecimento from "@/views/PaginaEstabelecimento.vue";
import AcompanharPedido from "@/views/AcompanharPedido.vue";
import FinalizarPedido from "@/views/FinalizarPedido.vue";
import ModalEndereco from "@/components/forms/ModalEndereco.vue";
import CardValidarCelular from "@/components/forms/CardValidarCelular.vue";
import PedidoEntregue from "@/views/PedidoEntregue.vue";
import PaginaAvaliacao from "@/views/PaginaAvaliacao.vue";
const routes = [
  {
    path: "/",
    name: "paginaDeslogadaRt",
    component: PaginaDeslogada,
  },
  {
    path: "/modalEndereco",
    name: "modalEnderecoRt",
    component: ModalEndereco,
  },
  {
    path: "/codVerif",
    name: "codVerifRt",
    component: CardValidarCelular,
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
    path: "/pedidoEntregue",
    name: "pedidoEntregueRt",
    component: PedidoEntregue,
  },
  {
    path: "/inicio",
    name: "paginaLogadaRt",
    component: PaginaLogada,
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
    path: "/paginaAvaliacao",
    name: "paginaAvaliacaoRt",
    component: PaginaAvaliacao,

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
