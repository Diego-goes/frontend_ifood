<template>
    <div class="fundo_modal" :style="`transform: translateX(${distanciaModalCarrinho}vw)`">
        <div class="modal_carrinho">
            <div class="fechar_carrinho">
                <img src="@/assets/close.png" alt="imagem-close" @click="fecharModalCarrinho">
            </div>
            <div class="caixa_carrinhocheio" v-if="itensPedidoSalvos">
                <a>Seu pedido em</a>
                <div class="caixas">
                    <a href="">{{ this.estabelecimento.nomeEstab}}</a>
                    <a href="" class="texto_vermelho">Ver cardápio</a>
                </div>
                <hr>
                <div class="caixas_produto">
                    <CardCrudItemCarrinho :itemPedidoProps="itemPedido" v-for="itemPedido in this.itensPedido"
                        :key="`itemCarrinho_${itemPedido.produtoId}`" @editarItemPedido="editarItemPedido"
                        @removerItemPedido="removerItemPedido" />
                </div>
                <hr>
                <!-- <div class="cupom">
                    <img src="@/assets/Cupom.png" alt="imagem-cupom">
                    <a>Cupom</a>
                    <a><input type="button" class="texto_vermelho" value="Ver" id="ver"></a>
                </div>
                <hr> -->
                <div class="caixas">
                    <a>Total</a>
                    <a>R$ {{ this.valorTotal.toFixed(2) }}</a>
                </div>
                <div class="botao-total">
                    <input @click="irParaFinalizarPedido" type="button" value="Escolher forma de pagamento">
                </div>
            </div>
            <div class="caixa_carrinhovazio" v-if="!itensPedidoSalvos">
                <div>
                    <img src="../../assets/icone_carrinhovazio.png" alt="imagem-carrinhovazio">
                </div>
                <div>
                    <a>Sua sacola está vazia</a>
                </div>
                <div>
                    <a>Adicione itens</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardCrudItemCarrinho from '@/components/forms/CardCrudItemCarrinho.vue'
// import FinalizarPedido from '@/views/FinalizarPedido.vue'
export default {
    name: 'ModalCarrinho',
    data() {
        return {
            distanciaModalCarrinho: 50,
            itensPedido: this.itensPedidoProps,
            estabelecimento: this.estabelecimentoProps
        }
    },
    props: {
        itensPedidoProps: Array,
        estabelecimentoProps: Object
    },
    methods: {
        irParaFinalizarPedido(){
            this.$router.push('/finalizarPedido')
        },
        fecharModalCarrinho() {
            this.distanciaModalCarrinho = 50
            setTimeout(() => {
                this.$emit('fecharModalCarrinho')
            }, 500)
        },
        editarItemPedido(produto) {
            this.$emit('editarItemPedido', produto)
        },
        removerItemPedido(produto) {
            this.$emit('removerItemPedido', produto)
        },
    },
    computed: {
        itensPedidoSalvos() {
            return this.itensPedido.length > 0 ? true : false
        },
        valorTotal() {
            let total = 0
            for (let itemPedido of this.itensPedido) {
                total += itemPedido.preco * itemPedido.qtdItens
            }
            return total
        }
    },
    created() {
        setTimeout(() => {
            this.distanciaModalCarrinho = 0
        }, 300)
    },
    components: {
        CardCrudItemCarrinho
    }
}
</script>
<style scoped>
.fundo_modal {
    transition: all 0.3s;
    right: 0;
    top: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    /*background-color: #3e3e3ea5;
    width: 100vw;
    */
    z-index: 2;
}

.fechar_carrinho {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    align-items: center;
}

.fechar_carrinho img {
    cursor: pointer;
}

.modal_carrinho {
    flex-direction: column;
    height: 100vh;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 350px;
    padding: 20px 5vh;
    padding-bottom: 5vh;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
    box-shadow: -2px 1px 10px lightgray;
    gap: 5%;
}

.caixa_carrinhocheio {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    height: 85%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
}

.caixas_produto {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

.caixas {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.caixas a:nth-child(1) {
    color: black;
}

.texto_vermelho {
    display: flex;
    border: none;
    background-color: rgba(255, 255, 255, 1);
    color: red;
    padding: 10px 10px;
    font-size: 12px;
    cursor: pointer;
}

.cupom {
    display: flex;
    align-items: center;

}

.botao-total {
    display: flex;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    margin-top: 2vw;

}

.botao-total input[type='button'] {
    background-color: red;
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    color: white;
    border: none;
}

* {
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
    /*border: 1px solid red !important;*/
}

hr {
    width: 100%;
    border: 1px solid rgb(245, 245, 245);
}

a {
    text-decoration: none;
}
</style>
