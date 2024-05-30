<template>
    <CardConfirm v-if="false" @fecharModal="fecharCardConfirm" :modalConfirmacaoProps="modalConfirmacao" />
    <ModalConfirmRecebimento v-if="exibirModal" />
    <div class="viewAcompanharPedido">
        <div class="cardPrincipal">
            <h3>O pedido está sendo preparado...</h3>
            <p class="status">Previsão de entrega</p>
            <p class="previsao">Hoje, 19:45 - 20:10 </p>
            <div class="hr-container">
                <hr class="status-concluido">
                <hr class="status-aguardando">
                <hr class="">
            </div>
            <div class="codigo-pedido">
                <p class="ponto-verde">.</p>
                <p>Use o código <u>0000</u> para receber seu pedido.</p>
            </div>

            <div class="confirmar-pedido">
                <p class="seu-pedido-chegou">Seu pedido chegou?</p>
                <p class="frase-confirmacao">Confirme assim que receber o pedido e nos ajude a saber se deu tudo certo!
                </p>
                <input type="button" value="Confirmar entrega" @click="exibirModal" class="btn-confirmar">

            </div>

            <div class="endereco-entrega">
                <p><b>Endereço de entrega</b></p>
                <div class="img-endereco">
                    <img src="../assets/google-maps.png" alt="imagem maps">
                    <div class="dados-endereco">
                        <p>Endereço <br>Bairro - São Paulo, SP</p>
                    </div>
                </div>
                <p><b>Detalhes do pedido</b></p>
                <div class="restaurante">
                    <img src="../assets/imagem_default.png" alt="imagem restaurante">
                    <p>{{ this.estabelecimento.nome }}</p>
                </div>

                <div class="total-entrega">
                    <p><b>Total com entrega</b></p>
                    <p>R$ 45,00</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardConfirm from '@/components/forms/CardConfirm.vue';
import ModalConfirmRecebimento from '@/components/forms/ModalConfirmRecebimento.vue'
export default {
    name: "AcompanharPedido",
    data() {
        return {
            estabelecimento: {
                nome: "Outback"
            },
            modalVisivel: false,
            modalConfirmacao: {
                pergunta: "Recebeste o pedido?",
                btn1: {
                    value: "Não",
                    func(thisContext) { thisContext.$emit('fecharModal') }
                },
                btn2: {
                    value: "Sim",
                    func(thisContext) {thisContext.$router.push('/pedidoEntregue') }
                }
            }
        }
    },
    methods: {
        abrirModalConfirmarEntrega() {

        },
        exibirModal() {
            this.modalVisivel = true
        },
        fecharCardConfirm() {
            this.modalVisivel = false
        }
    },
    components: {
        CardConfirm,
        ModalConfirmRecebimento
    }
}
</script>
<style scoped>
p,
h3 {
    margin: 0
}

@keyframes loading {
    0% {
        transform: scaleX(0)
    }

    100% {
        transform: scaleX(1)
    }
}

@keyframes passear {
    0% {
        background-position: 0vw 300vw;
    }

    100% {
        background-position: 300vw 0vw;
    }
}

.viewAcompanharPedido {
    background-image: url(../assets/fundoMaps.jpg);
    background-repeat: repeat;
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /*
    animation: passear 300s infinite linear alternate;
    */
}



.cardPrincipal {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background-color: white;
    padding: 2rem 4rem;
    box-shadow: 0px 0px 60vw white;
    height: 80vh;
    width: 35vw;
    justify-content: space-between;
}

.status {
    display: flex;
    align-items: flex-start;
    font-size: 1.2vw;
    color: #3e3e3e;


}

.previsao {
    display: flex;
    align-items: flex-start;
    font-size: 1.6vw;
}

.hr-container {
    display: flex;
    justify-content: space-between;
}

hr {
    width: 32%;
    height: 4px;
    border: none;
    transform-origin: left;
    border-radius: 2px;
    background-color: rgb(235, 235, 235)
}

.status-aguardando {
    background-color: rgb(34, 180, 34);
    animation: loading 2s infinite linear;
}

.status-concluido {
    background-color: rgb(34, 180, 34);
}



.codigo-pedido {
    font-size: 14px;
    display: flex;
    align-items: flex-start;
}

.ponto-verde {
    border-radius: 100%;
    background-color: green;
    width: 1rem;
    height: 1rem;
    color: green;
    margin-right: 1rem;
}

.confirmar-pedido {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e2dfdf93;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
}

.seu-pedido-chegou {
    font-size: 15px;
    margin-bottom: 1px;
    color: #EA1D2C;
}

.frase-confirmacao {
    font-size: 12px;
    color: #3e3e3e;
}

.btn-confirmar {
    border: none;
    background-color: #EA1D2C;
    height: 5vh;
    width: 20vw;
    margin-bottom: 10px;
    border-radius: 3px;
    color: white;

}

.btn-confirmar:hover {
    background-color: rgb(230, 73, 73);
    cursor: pointer;

}

.endereco-entrega {
    display: flex;
    text-align: left;
    flex-direction: column;
    font-size: 14px;
    gap: 1rem;
}

.img-endereco {
    display: flex;
    align-items: center;
}

.img-endereco img {
    display: flex;
    align-items: flex-start;
    width: 35px;
    height: 35px;
    margin-right: 10px;

}

.dados-endereco {
    display: flex;
    text-align: left;
    flex-direction: column;

}

.restaurante {
    display: flex;
    align-items: center;

}

.restaurante img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 10px;

}

.total-entrega {
    display: flex;
    font-size: 15px;
    justify-content: space-between;

}
</style>
