<template>
    <div class="viewPaginaEstabelecimento">
        <ModalItemPedido v-if="exibirItemPedido" v-model:produtoProps="produtoSelecionado"
            v-model:itensPedidoProps="itensPedido" :estabelecimentoProps="estabelecimento"
            @addAoPedido="abrirModalCarrinho" @fecharModalItemPedido="fecharModalItemPedido" />
        <ModalCarrinho v-if="exibirModalPedido" @fecharModalCarrinho="fecharModalCarrinho"
            @editarItemPedido="editarItemPedido" @removerItemPedido="removerItemPedido"
            v-model:itensPedidoProps="itensPedido" :estabelecimentoProps="estabelecimento" />
        <div class="imagem-inicial">
            <img :src="`data:image/png;base64,${this.estabelecimento.imagemBanner}` || '../../src/assets/imagem_default.png' " alt="imagem inicial">
        </div>

        <div class="estabelecimento">
            <img id="foto_do_estabelecimento" :src="`data:image/png;base64,${this.estabelecimento.imagemEstab}`"
                alt="imagem do estabelecimento">
            <div class="nome-restaurante">
                <p>{{ this.estabelecimento.nomeEstab }}</p>
            </div>
            <img id="estrela" src="../assets/estrela.png" alt="estrela avaliação">
            <p id="avaliacao">4.7</p>
            <p id="sifrao">$</p>
            <p id="pedido-minimo">Pedido mínimo R$ 30,00
            </p>
            <input type="button" value="Abrir Carrinho" @click="abrirModalCarrinho">

        </div>

        <div class="destaque">
            <h3>Pratos</h3>
            <SliderComp>
                <CardProdutoEstab v-for="produto in produtos" :key="`produto-${produto.produtoId}`"
                    :nomeEstabProps="estabelecimento.nomeEstab" :produtoProps="produto"
                    @abrirModalItemPedido=abrirModalItemPedido />
            </SliderComp>

        </div>

    </div>
</template>
<script>
import { requisicao } from '../../utils/funcsGerais'
import SliderComp from '@/components/base/SliderComp.vue'
import CardProdutoEstab from '@/components/base/CardProdutoEstab.vue'
import ModalItemPedido from '@/components/forms/ModalItemPedido.vue'
import ModalCarrinho from '@/components/forms/ModalCarrinho.vue'
export default {
    name: "PaginaEstabelecimento",
    data() {
        return {
            estabelecimentoId: localStorage.getItem("estabSelecionado"),
            estabelecimento: {
                imagemEstab: ''
            },
            produtos: [],
            exibirItemPedido: false,
            produtoSelecionado: {},
            exibirModalPedido: false,
            itensPedido: JSON.parse(localStorage.getItem('itensPedido')) || []

        }
    },
    props: {
        query: {
            type: Object,
            required: false,
            default: () => ({
                exibirItemPedidoProps: false,
                produtoSelecionadoProps: {}
            })
        }
    },
    components: {
        SliderComp,
        CardProdutoEstab,
        ModalItemPedido,
        ModalCarrinho
    },
    methods: {
        requisicao,
        abrirModalItemPedido(produto) {
            this.itensPedido = JSON.parse(localStorage.getItem('itensPedido'))
            this.exibirItemPedido = true
            this.produtoSelecionado = produto
        },
        fecharModalItemPedido() {
            this.exibirItemPedido = false
        },
        fecharModalCarrinho() {
            this.exibirModalPedido = false
        },
        abrirModalCarrinho(bool) {
            this.itensPedido = JSON.parse(localStorage.getItem('itensPedido'))
            this.exibirItemPedido = false
            this.exibirModalPedido = bool
        },
        editarItemPedido(produto) {
            this.fecharModalCarrinho()
            this.abrirModalItemPedido(produto)
        },
        removerItemPedido(produto) {
            for (let index in this.itensPedido) {
                let itemPedido = this.itensPedido[index]
                if (itemPedido.produtoId == produto.produtoId) {
                    this.itensPedido.splice(index, 1)
                    break;
                }
            }
            localStorage.setItem('itensPedido', JSON.stringify(this.itensPedido))
        }
    },
    computed: {
        exibirItemPedidoProps() {
            return this.query.exibirItemPedidoProps === 'true';
        },
        produtoSelecionadoProps() {
            try {
                return JSON.parse(this.query.produtoSelecionadoProps);
            } catch (e) {
                return {};
            }
        }
    },
    async created() {
        this.estabelecimento = await this.requisicao(`https://backendhifood-production.up.railway.app/estabelecimentos/ler/${this.estabelecimentoId}`)
        this.produtos = await this.requisicao(`https://backendhifood-production.up.railway.app/produtosEstab/${this.estabelecimentoId}`)
        this.exibirItemPedido = this.exibirItemPedidoProps
        this.produtoSelecionado = this.produtoSelecionadoProps
        console.log(this.estabelecimento['imagemBanner'])
    }
}
</script>
<style scoped>
.viewPaginaEstabelecimento {
    display: flex;
    flex-direction: column;
    width: 97vw;


}

.imagem-inicial {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    filter: brightness(0.7);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    height: 35vh;

}

.estabelecimento {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1vh;

}

#foto_do_estabelecimento {
    display: flex;
    width: 5vw;
    height: auto;
    border-radius: 100%;
    margin-right: 10px;
    aspect-ratio: 1 / 1;
}

.nome-restaurante {
    display: flex;
    font-size: 1.625rem;
    font-weight: 500;
    letter-spacing: -1px;
    color: #3e3e3e;
    margin-right: 20px
}

#estrela {
    display: flex;
    width: 20px;
    height: auto;
    margin-right: 5px;
}

#avaliacao {
    color: #fcbb00;
    font-size: 14px;
    margin-right: 47vw;

}

#sifrao {
    border: 4px solid #a6a6a5;
    border-radius: 100%;
    text-align: center;
    color: #fff;
    background-color: #a6a6a5;
    margin-right: 5px;
    width: 1rem;
    height: 1rem;
}

#pedido-minimo {
    color: #a6a6a5
}

.destaque {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 4vh;
    font-size: 25px;
}
</style>
