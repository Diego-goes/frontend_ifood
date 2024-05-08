<template>
    <div class="viewPaginaEstabelecimento">
        <ModalItemPedido v-if="exibirItemPedido" :idProdutoProps="produtoSelecionadoId"
            :estabelecimentoProps="estabelecimento" @addAoPedido="abrirModalCarrinho"
            @fecharModalItemPedido="fecharModalItemPedido" />
        <ModalCarrinhoCheio v-if="exibirModalPedido" @fecharModalCarrinho="fecharModalCarrinho" />
        <div class="imagem-inicial">
            <img src="../assets/imagem_alteravel.avif" alt="imagem inicial">
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
            <input type="button" value="Abrir Carrinho" @click="abrirModalCarrinho" >
            </p>

        </div>

        <div class="destaque">
            <h3>Pratos</h3>
            <SliderComp>
                <CardProdutoEstab v-for="produto in produtos" :key="`produto-${produto.produtoId}`"
                    :nomeProps="produto.nomeProd" :imagemPathProps="`data:image/png;base64,${produto.imagemProd}`"
                    :precoProps="produto.preco" :nomeEstabProps="estabelecimento.nomeEstab"
                    :produtoIdProps="produto.produtoId" @abriItemPedido=abriItemPedido />
            </SliderComp>

        </div>

    </div>
</template>
<script>
import { requisicao } from '../../utils/funcsGerais'
import SliderComp from '@/components/base/SliderComp.vue'
import CardProdutoEstab from '@/components/base/CardProdutoEstab.vue'
import ModalItemPedido from '@/components/forms/ModalItemPedido.vue'
import ModalCarrinhoCheio from '@/components/forms/ModalCarrinhoCheio.vue'
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
            produtoSelecionadoId: null,
            exibirModalPedido: false
        }
    },
    components: {
        SliderComp,
        CardProdutoEstab,
        ModalItemPedido,
        ModalCarrinhoCheio
    },
    methods: {
        requisicao,
        abriItemPedido(produtoId) {
            this.exibirItemPedido = true
            this.produtoSelecionadoId = produtoId
        },
        fecharModalCarrinho(){
            this.exibirModalPedido = false
        },
        abrirModalCarrinho(bool) {
            this.exibirItemPedido = false
            this.exibirModalPedido = bool
        },
        fecharModalItemPedido() {
            this.exibirItemPedido = false
        }
    },
    async created() {
        this.estabelecimento = await this.requisicao(`https://backendhifood-production.up.railway.app/estabelecimentos/ler/${this.estabelecimentoId}`)
        this.produtos = await this.requisicao(`https://backendhifood-production.up.railway.app/produtosEstab/${this.estabelecimentoId}`)
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
