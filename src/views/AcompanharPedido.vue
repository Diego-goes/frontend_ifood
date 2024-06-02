<template>
    <CardConfirm v-if="false" @fecharModal="fecharCardConfirm" :modalConfirmacaoProps="modalConfirmacao" />
    <ModalConfirmRecebimento v-if="modalVisivel" @fecharModal="fecharCardConfirm"  />
    <div class="viewAcompanharPedido">
        <div class="cardPrincipal">
            <h3>{{ this.nomeEtapaPedido || 'Carregando...' }}</h3>
            <p class="status">Previsão de entrega</p>
            <p class="previsao">Hoje, {{ this.horarios.inicio }} -
                {{ this.horarios.previsao }} </p>
            <div class="hr-container">
                <hr v-for="(hr, index) in classes_hr_array[pedido.etapaPedidoId - 1]" :key="`hr_${index}`" :class="hr">
            </div>
            <div class="codigo-pedido">
                <p class="ponto-verde">.</p>
                <p>Use o código <u>{{ this.codRetirada }}</u> para receber seu pedido.</p>
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
                        <p>Endereço <br>{{ this.endereco_principal.logradouro }} - {{ this.endereco_principal.numero }}
                        </p>
                    </div>
                </div>
                <p><b>Detalhes do pedido</b></p>
                <div class="restaurante">
                    <img :src="`data:image/png;base64,${this.estabelecimento.imagemEstab}`" alt="imagem restaurante">
                    <p>{{ this.estabelecimento.nomeEstab }}</p>
                </div>

                <div class="total-entrega">
                    <p><b>Total com entrega</b></p>
                    <p>R$ {{this.valorTotal}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardConfirm from '@/components/forms/CardConfirm.vue';
import ModalConfirmRecebimento from '@/components/forms/ModalConfirmRecebimento.vue'
import { requisicao } from '../../utils/funcsGerais';
export default {
    name: "AcompanharPedido",
    data() {
        return {
            itensPedido: JSON.parse(localStorage.getItem('itensPedido')),
            endereco_principal: { logradouro: "Carregando...", numero: "Carregando..." },
            codRetirada: "Carregando...",
            classes_hr_array: [
                {
                    class_hr_1: "status-aguardando",
                    class_hr_2: "",
                    class_hr_3: ""
                },
                {
                    class_hr_1: "status-concluido",
                    class_hr_2: "status-aguardando",
                    class_hr_3: ""
                },
                {
                    class_hr_1: "status-concluido",
                    class_hr_2: "status-concluido",
                    class_hr_3: "status-aguardando"
                },
                {
                    class_hr_1: "status-concluido",
                    class_hr_2: "status-concluido",
                    class_hr_3: "status-concluido"
                },
            ],
            etapasPedido: [],
            horarios: {
                inicio: '',
                previsao: ''
            },
            pedido: { etapaPedidoId: 1 },
            token_jwt: '',
            estabelecimento: {
                nome: "Outback",
                imagemEstab: ""
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
                    func(thisContext) { thisContext.$router.push('/pedidoEntregue') }
                }
            }
        }
    },
    methods: {
        requisicao,
        pegarHoraInicio() {
            let horarioAtual = new Date()
            let horas = horarioAtual.getHours().toString().padStart(2, "0")
            let minutos = horarioAtual.getMinutes().toString().padStart(2, "0")
            this.horarios.inicio = `${horas}:${minutos}`
        },
        calcularPrevisao() {
            let horarioAtual = new Date()
            horarioAtual.setMinutes(horarioAtual.getMinutes() + 40);
            const minutosFormatados = horarioAtual.getMinutes().toString().padStart(2, "0");
            this.horarios.previsao = `${horarioAtual.getHours()}:${minutosFormatados} `;
        },
        abrirModalConfirmarEntrega() {

        },
        exibirModal() {
            this.modalVisivel = true
        },
        fecharCardConfirm() {
            this.modalVisivel = false
        },
        async simularAlteracaoEtapaPedido(etapaPedidoId) {
            await this.requisicao('https://backendhifood-production.up.railway.app/ultimoPedido/usuario/editar', "PUT", this.token_jwt, { etapaPedidoId, formaPagId: this.pedido.formaPagId })
        },
        async puxarDadosPedido() {
            this.pedido = await this.requisicao('https://backendhifood-production.up.railway.app/ultimoPedido/usuario/ler', "GET", this.token_jwt)
            localStorage.setItem('pedido', JSON.stringify(this.pedido))
        },
        async atualizarEstadoPedido() {
            let etapaPedidoIdSimulado = this.pedido.etapaPedidoId
            let interval = setInterval(async () => {
                if (etapaPedidoIdSimulado < this.etapasPedido.length) {
                    etapaPedidoIdSimulado += 1
                    await this.simularAlteracaoEtapaPedido(etapaPedidoIdSimulado)
                } else {
                    clearInterval(interval)
                }
                await this.puxarDadosPedido()
                this.hrsEl = this.classes_hr_array[etapaPedidoIdSimulado - 1]
            }, 5000)
        }
    },
    components: {
        CardConfirm,
        ModalConfirmRecebimento
    },
    async created() {
        this.token_jwt = localStorage.getItem('tokenJWT')
        this.codRetirada = localStorage.getItem('telefoneUsu').slice(-4)
        this.pegarHoraInicio()
        this.calcularPrevisao()
        this.endereco_principal = JSON.parse(localStorage.getItem('endereco_principal'))
        this.estabelecimento = await this.requisicao(`https://backendhifood-production.up.railway.app/estabelecimentos/ler/${localStorage.getItem('estabSelecionado')}`, "GET", this.token_jwt)
        await this.puxarDadosPedido()
        this.etapasPedido = await this.requisicao(`https://backendhifood-production.up.railway.app/etapasPedido`, "GET", this.token_jwt)
        this.atualizarEstadoPedido()
    },
    computed: {
        valorTotal() {
            let total = 0
            for (let itemPedido of this.itensPedido) {
                total += itemPedido.preco * itemPedido.qtdItens
            }
            return total.toFixed(2)
        },
        nomeEtapaPedido() {
            return this.etapasPedido[this.pedido.etapaPedidoId - 1] ?
                this.etapasPedido[this.pedido.etapaPedidoId - 1]['etapaPedido'] : ''
        }
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
    animation: passear 300s infinite linear alternate;
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
    background-color: rgb(235, 235, 235);
    transition: all 1s;
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
