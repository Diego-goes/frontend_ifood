import { createRouter, createWebHistory } from "vue-router";
import PaginaLogada from "../views/PaginaLogada.vue";
import PaginaDeslogada from "../views/PaginaDeslogada.vue";
import PaginaLogin from "../views/PaginaLogin.vue";
import PaginaCadastro from "@/views/PaginaCadastro.vue";
import PaginaEstabelecimento from "@/views/PaginaEstabelecimento.vue";
import AcompanharPedido from "@/views/AcompanharPedido.vue";
import FinalizarPedido from "@/views/FinalizarPedido.vue";
import CardValidarCelular from "@/components/forms/CardValidarCelular.vue";
import PedidoEntregue from "@/views/PedidoEntregue.vue";
import PaginaAvaliacao from "@/views/PaginaAvaliacao.vue";
import ModalCartao from "@/components/forms/ModalCartao.vue";
import ModalNotaFiscal from "@/components/forms/ModalNotaFiscal.vue";
import CardRelatorio from "@/components/forms/CardRelatorio.vue";
import PainelControle from "@/views/PainelControle.vue";
const routes = [
  {
    path: "/",
    name: "paginaDeslogadaRt",
    component: PaginaDeslogada,
  },
  {
    path: "/modalCartao",
    name: "modalCartaoRt",
    component: ModalCartao,
  },
  {
    path: "/modalNotaFiscal",
    name: "modalNotaFiscalRt",
    component: ModalNotaFiscal,
  },
  {
    path: "/modalRelatorio",
    name: "modalRelatorioRt",
    component: CardRelatorio,
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
