<template>
    <div class="fundo_modal">
        <div class="modal_selecionado">
            <div class="caixa_selecionado">
                <div class="fechar_modal">
                    <img @click="fecharModalItemPedido" src="@/assets/SetaVermelha.png" alt="imagem-close">
                </div>
                <div class="imagem_pedido">
                    <img :src="`data:image/png;base64,${this.produto.imagemProd}` || '../../assets/imagem_default.png'"
                        alt="imagem_produto">
                </div>
                <div class="textos">
                    <a>{{ this.produto.nomeProd }} | ID: {{ this.produto.produtoId }}</a>
                    <a>{{ this.produto.descricao }}</a>
                    <a>R$ {{ this.produto.preco.toFixed(2) }}</a>
                    <div class="nome_nota">
                        <a>{{ this.estabelecimento.nomeEstab }}</a>
                        <div class="nota">
                            <a>5.0</a>
                            <img src="@/assets/iconeEstrela.png" alt="icone-estrela" id="icone-estrela">
                        </div>
                    </div>
                    <hr>
                    <a>Algum comentário?</a>
                    <div class="caixa_comentario">
                        <input class="caixa_inserir" type="text" v-model="itemPedido.observacao"
                            placeholder="Ex: tirar cebola, maionese à parte etc.">
                    </div>
                    <hr>
                    <div class="botao_adicao">
                        <div class="botao_quantidade">
                            <input class="adicao" type="button" value="-" @click="alterarQtd" min="1">
                            <input class="texto_quantidade" type="number" @input="corrigirQtd" v-model="itemPedido.qtdItens">
                            <input class="adicao" type="button" value="+" @click="alterarQtd">
                        </div>
                        <input class="botao_adcvalor" type="button"
                            :value="`Adicionar R$ ${(produto.preco * itemPedido.qtdItens).toFixed(2)}`"
                            @click="addAoPedido">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { requisicao } from '../../../utils/funcsGerais';
export default {
    name: "ModalItemPedido",
    data() {
        return {
            estabelecimento: this.estabelecimentoProps,
            itemPedido: {
                ...this.produtoProps,
                "observacao": '',
                "qtdItens": 1
            },
            itensPedido: this.itensPedidoProps,
            produto: this.produtoProps
        }
    },
    props: {
        itensPedidoProps: Array,
        produtoProps: Object,
        estabelecimentoProps: Object,
    },
    methods: {
        requisicao,
        corrigirQtd(){
            if (this.itemPedido.qtdItens < 1) {
                this.itemPedido.qtdItens = 1
            }
        },
        alterarQtd(event) {
            if (event.target.value == '-') {
                if (this.itemPedido.qtdItens > 1) {
                    this.itemPedido.qtdItens -= 1
                }
            } else {
                this.itemPedido.qtdItens += 1
            }
            // this.itemPedido.qtdItens = event.target.value == '-' ? ()=>{
            //     return !this.itemPedido.qtdItens==1?
            //         this.itemPedido.qtdItens - 1: ()=>{}
            //     } : this.itemPedido.qtdItens + 1
        },
        addAoPedido() {
            let respostaPrompt = null
            for (let index in this.itensPedido) {
                let itemPedido = this.itensPedido[index]
                if (this.itemPedido.estabelecimentoId != itemPedido.estabelecimentoId) {
                    if (respostaPrompt === null) {
                        respostaPrompt = prompt('Você só pode adicionar itens de um restaurante ou mercado por vez, deseja esvaziar a sacola e adicionar este item? (SIM / NÃO)') || ''
                    }
                    if ((respostaPrompt).toLowerCase().startsWith('n') || respostaPrompt == '') {
                        return
                    } else {
                        this.itensPedido = []
                        break
                    }
                }
            }
            for (let index in this.itensPedido) {
                let itemPedido = this.itensPedido[index]
                if (itemPedido.produtoId == this.itemPedido.produtoId) {
                    this.itensPedido[index] = this.itemPedido
                    localStorage.setItem('itensPedido', JSON.stringify(this.itensPedido))
                    this.$emit('addAoPedido', true)
                    return
                }
            }
            this.itensPedido.push(this.itemPedido)
            localStorage.setItem('itensPedido', JSON.stringify(this.itensPedido))
            this.$emit('addAoPedido', true)
        },
        fecharModalItemPedido() {
            this.$emit("fecharModalItemPedido")
        }
    },
    async created() {
        for (let index in this.itensPedido) {
            let itemPedido = this.itensPedido[index]
            if (itemPedido.produtoId == this.itemPedido.produtoId) {
                this.itemPedido = itemPedido
            }
        }
    }
}
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}


.fundo_modal {
    position: fixed;
    background-color: #3e3e3ea5;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.fechar_modal {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.modal_selecionado {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 800px;
    padding: 50px 7vh;
    padding-bottom: 5vh;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
}


.caixa_selecionado {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
}

.textos {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 18px;
}

.nome_nota {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
}

.caixa_comentario {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.caixa_inserir {
    display: flex;
    width: 100%;
    padding: 15px 170px 15px 15px;
    background-color: rgba(247, 247, 247, 1);
    border-radius: 0.3rem;
    border: none;
}

.nota {
    display: flex;
    align-items: flex-end;
}

#icone-estrela {
    width: 3vh;
}

.botao_adicao {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.botao_quantidade {
    display: flex;
    align-items: center;
    padding: 10px 4vh;
    border: none;
}

.botao_quantidade input {
    border: none;
    outline: none;
}

.texto_quantidade {
    min-width: 1rem;
    width: 2rem;
    text-align: center;
}

.adicao {
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    color: white;
    background-color: red;
    font-size: large;
    cursor: pointer;
}

.botao_adcvalor {
    padding: 9px 6vh;
    background-color: red;
    border: none;
    color: white;
    border-radius: 0.3rem;
    cursor: pointer
}

.imagem_pedido img {
    width: 90%;
    border-radius: 1rem;
}

hr {
    width: 100%;
    color: lightgray;
}

* {
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
}
</style>
