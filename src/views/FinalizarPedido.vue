<template>
    <div class="viewFinalizarPedido">
        <ModalEndereco v-if="exibirModalEndereco" @closeModal="esconderModalEndereco" />
        <ModalCartao v-if="exibirModalCartao" @voltar="esconderModalCartao" />
        <div class="container-esquerdo">
            <h2>Finalize seu pedido</h2>
            <div class="subtitulo">
                <p>Entrega</p>
                <hr>
            </div>
            <div class="endereco">
                <img src="../assets/google-maps.png" alt="Maps" height="100px">
                <div class="dados-endereco">
                    <p>Endereço</p>
                    <p class="texto-cinza">São Paulo, SP</p>
                </div>
                <input @click="mostrarModalEndereco" class="btn-opcao texto-vermelho" type="button" value="Trocar">

            </div>

            <hr class="linha-divisão">
            <p class="pague-pelo-site">Pague pelo site</p>

            <div class="btn-pix btnsFormasPagamento">
                <div>
                    <img class="img-pix" :src="imgPix.src" :style="`${imgPix.height}`" alt="imagem pix">
                    <div class="dados-pix">
                        <p>Pague com Pix</p>
                        <p> Use o QR Code ou copie e cole o código</p>
                        <input v-if="formaPagamentoSelecionada == 'pix'" type="text" value="00020126330014br.gov.bcb.pix0111+5511999999999520400005303986544060.005802BR5913Fulano de
                        Tal6008BRASILIA62070503***6304ABCD" class="codinputix">
                        <input v-if="formaPagamentoSelecionada == 'pix'" type="button" value="Copiar código">
                    </div>
                </div>
                <input type="button" value="Pagar com pix" @click="pegarFormaPagamentoSelecionada('pix')">
            </div>

            <p class="add-cartao">Adicione um cartão no Hifood</p>
            <div class="addcartao">
                <div>
                    <input type="button" value="Crédito" class="btn-cartao btnsFormasPagamento"
                        @click="($event) => { pegarFormaPagamentoSelecionada('credito', $event.target); abrirModalCartao() }">
                    <input type="button" value="Débito" class="btn-cartao btnsFormasPagamento"
                        @click="($event) => { pegarFormaPagamentoSelecionada('debito', $event.target); abrirModalCartao() }">
                    <p class="frase-pix">É prático, seguro e você não perde nenhum minuto a mais quando seu pedido
                        chegar.</p>
                </div>
                <img src="../assets/formaPagamento.png" alt="Forma de pagamento">
            </div>
            <hr>
            <input type="button" value="Fazer pedido" class="btn-fazer-pedido" @click="fazerPedido">

        </div>
        <div class="container-direito">
            <p class="texto-cinza">Seu pedido em...</p>
            <p class="nome-restaurante">{{ this.estabelecimento.nomeEstab }}</p>
            <small>{{ this.categoria.nomeCategoria }}</small>
            <hr>
            <div class="card-itemPedido">
                <div class="caixas_produto">
                    <CardCrudItemCarrinho :itemPedidoProps="itemPedido" v-for="itemPedido in this.itensPedido"
                        :key="`itemCarrinho_${itemPedido.produtoId}`" @editarItemPedido="editarItemPedido"
                        @removerItemPedido="removerItemPedido" />
                </div>
            </div>
            <div class="valores-pedido">

                <div class="texto-cinza">
                    <p>Taxa de entrega</p>
                    <p id="gratis">Grátis</p>
                </div>

                <div>
                    <p>Total</p>
                    <p>R$ {{ this.valorTotal }}</p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { requisicao } from "../../utils/funcsGerais"
import CardCrudItemCarrinho from "@/components/forms/CardCrudItemCarrinho.vue"
import ModalCartao from "@/components/forms/ModalCartao.vue";
import ModalEndereco from "@/components/forms/ModalEndereco.vue";
export default {
    name: "FinalizarPedido",
    data() {
        return {
            estabelecimentoId: localStorage.getItem('estabSelecionado'),
            estabelecimento: { nomeEstab: 'Carregando...' },
            categoria: { nomeCategoria: 'Carregando...' },
            itensPedido: [{ nomeProd: 'Carregando...' }],
            formaPagamentoSelecionada: null,
            exibirModalCartao: false,
            token_jwt: null,
            imgPix: {
                src: require('../assets/logoPix.png'),
                height: ''
            },
            exibirModalEndereco: false,
        }
    },
    methods: {
        requisicao,
        mostrarModalEndereco() {
            this.exibirModalEndereco = true
        },
        esconderModalEndereco() {
            this.exibirModalEndereco = false
        },
        esconderModalCartao() {
            this.exibirModalCartao = false
        },
        abrirModalCartao() {
            this.exibirModalCartao = true
        },
        pegarFormaPagamentoSelecionada(nome) {
            this.formaPagamentoSelecionada = nome
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
        },
        editarItemPedido(produto) {
            console.log(produto)
            this.$router.push({
                name: 'paginaEstabelecimentoRt', query: {
                    exibirItemPedidoProps: 'true',
                    produtoSelecionadoProps: JSON.stringify(produto)
                }
            })
        },
        async fazerPedido() {
            // Criar ItensPedido pela API
            let bodyFormaPagamento = { "nome": "Pix" }
            let formaPagamentoId = await this.requisicao('https://backendhifood-production.up.railway.app/formaPagamentoPorNome', 'POST', this.token_jwt, bodyFormaPagamento)

            const chavesDesejadas = ['produtoId', 'observacao', 'qtdItens'];

            const itensFiltrados = this.itensPedido.map(item =>
                Object.keys(item)
                    .filter(key => chavesDesejadas.includes(key))
                    .reduce((obj, key) => {
                        if (item[key] !== '') { 
                            obj[key] = item[key];
                        }
                        return obj;
                    }, {})
            );

            console.table(itensFiltrados);

            let itensPedidoBody = {
                "itensPedido": itensFiltrados,
                "formaPagId": formaPagamentoId
            };
            try{
                await this.requisicao('https://backendhifood-production.up.railway.app/itensPedidos/criar', 'POST', this.token_jwt, JSON.stringify(itensPedidoBody))
                // Efetuar pagamento
                // await this.requisicao('https://backendhifood-production.up.railway.app/pagamento', 'POST', this.token_jwt)
                this.$router.push({ name: 'acompanharPedidoRt' })
            }
            catch(e){
                console.log(e)
            }
            // Criar Pedido
        }
    },
    async created() {
        this.token_jwt = localStorage.getItem('tokenJWT')
        let urlEstab = `https://backendhifood-production.up.railway.app/estabelecimentos/ler/${this.estabelecimentoId}`
        this.estabelecimento = await this.requisicao(urlEstab, "GET", this.token_jwt)

        // let urlCategoria = `https://backendhifood-production.up.railway.app/categorias/ler/${this.estabelecimento.categoriaId}`
        // this.categoria = await this.requisicao(urlCategoria, "GET", this.token_jwt)

        // console.log(this.categoria)
        this.itensPedido = JSON.parse(localStorage.getItem('itensPedido'))
    },
    watch: {
        'formaPagamentoSelecionada'() {
            this.imgPix.src = require(this.formaPagamentoSelecionada == 'pix' ?
                '../assets/qr_code_pix.png' :
                '../assets/logoPix.png')
            this.imgPix.height = this.formaPagamentoSelecionada == 'pix' ?
                'height:10rem;' :
                ''
        }
    },
    computed: {
        valorTotal() {
            let total = 0
            for (let itemPedido of this.itensPedido) {
                total += itemPedido.preco * itemPedido.qtdItens
            }
            return total.toFixed(2)
        }
    },
    components: {
        CardCrudItemCarrinho,
        ModalCartao,
        ModalEndereco
    }
}
</script>
<style scoped>
p {
    margin: 0
}

.viewFinalizarPedido {
    display: flex;
    width: 90vw;
    padding-bottom: 2rem;
}

.container-esquerdo {
    display: flex;
    text-align: left;
    flex-direction: column;

}

.container-esquerdo h2 {
    font-size: 2.5rem;
    color: #3e3e3e;
}

.subtitulo {
    width: fit-content;
    margin-bottom: 10px;
}

.subtitulo p {
    color: #EA1D2C;
    font-weight: 550;
    margin-bottom: 0;

}

.subtitulo hr {
    width: 100%;
    border: 0.15rem solid #EA1D2C;

}

.endereco {
    display: flex;

}

.endereco img {
    width: 5vw;
    object-fit: contain;
    margin-right: 15px;
}

.endereco p {
    margin: 0;
    margin-right: 35vh;
    margin-top: 18px;

}

.dados-endereco p:nth-child(1) {
    font-weight: 550;

}

.btn-opcao {
    height: min-content;
    background-color: transparent;
    border: none;
    margin-top: 3vw;
    font-size: 15px;

}

hr {
    width: 100%;
    border: 1px solid #f5f5f9;
}

.pague-pelo-site {

    font-weight: 550;
    color: #EA1D2C;
    margin-top: 5vh;

}

.btnsFormasPagamento {
    box-shadow: 1px 1px 10px rgb(233, 233, 233);
}

.img-pix {
    height: 50px;
    width: auto;
    transition: all 0.3s
}

.codPix {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 3rem;
}

.dados-pix {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.btn-pix {
    display: flex;
    border: 1px solid #f5f5f9;
    margin-top: 2vh;
    padding: 1rem;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: space-between
}

.btn-pix>div {
    display: flex;
    gap: 1rem;
}

.btn-pix input[type="button"] {
    border: 1px solid #f5f5f9;
    margin-top: 2vh;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
}

.add-cartao {
    font-weight: 550;
    color: #EA1D2C;
    margin-top: 7vh;
}

.btn-cartao {
    width: 100px;
    height: 30px;
    border: none;
    margin-right: 10px;
    color: #3e3e3e;
    margin-top: 20px;
    border-radius: 2px;
    cursor: pointer;
}

.frase-pix {
    margin-top: 50px;
    font-style: italic
}

.btn-fazer-pedido {
    width: 300px;
    height: 50px;
    border: none;
    background-color: #EA1D2C;
    color: white;
    align-items: center;
    margin-left: 25vh;
    cursor: pointer;
}

/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */

.container-direito {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    margin-top: 5vw;
    margin-left: 5vw;
    top: 5vw;
    width: 40vw;
    height: 80vh;
    border: 20px solid white;
    background-color: white;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    padding: 0rem 3rem;
    border-radius: 0.5rem;
}

.nome-restaurante {
    font-size: 20px;
}

.addcartao {
    display: flex;
}

.caixas_produto {
    width: 100%;
    height: 40vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

.valores-pedido div {
    display: flex;
    justify-content: space-between;
}

#gratis {
    color: green;
}

.texto-cinza {
    color: #717171;

}

.texto-vermelho {
    color: #EA1D2C;
}
</style>