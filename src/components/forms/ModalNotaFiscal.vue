<template>
    <div class="fundo-modal">
        <div class="modal-perfil">
            <div class="container">
                <h2> NF-E Hifood</h2>
                <div class="dados-restaurante">
                    <h3><b>{{ this.estabelecimento['nomeEstab'] }} </b></h3> 
                    <p>Data: {{ this.data }}</p>
                </div>
                <div class="pedido-tempo">
                    <p>Hora: {{ this.hora }}</p>
                </div>
                <hr>
                <table>
                    <thead>
                        <tr>
                            <th>Qtd.</th>
                            <th>Nome do Produto</th>
                            <th>Valor Unit.</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in itensPedido" :key="index">
                            <td>{{ item.qtdItens }}x</td>
                            <td>{{ item.nomeProd }}</td>
                            <td>R${{ item.preco.toFixed(2) }}</td>
                            <td>R${{ (item.preco * item.qtdItens).toFixed(2) }}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <div class="total">
                    <p><b>TOTAL PAGO:</b></p>
                    <div>
                        <p>R$ {{ this.valorTotal.toFixed(2) }}</p>
                    </div>
                </div>
                <div class="total">
                    <p><b>Taxa</b></p>
                    <div class="elemento-verde">
                        <p>Grátis</p>
                    </div>
                </div>
                <hr>
                <div>
                    <p><b>Muito Obrigado!</b></p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { requisicao } from '../../../utils/funcsGerais';
export default {
    name: "ModalNotaFiscal",
    data() {
        return {
            itensPedido: [],
            estabelecimento: '',
            data: '',
            hora: '',
        }
    },
    methods: {
        requisicao,
    },
    async mounted() {
        let token = localStorage.getItem('tokenJWT');
        let estabSelecionado = localStorage.getItem('estabSelecionado');
        this.dataCompleta = JSON.parse(localStorage.getItem('pedido'));
        let dataHora = new Date(this.dataCompleta.dataPedido);
        this.data = dataHora.toLocaleDateString();
        this.hora = dataHora.toLocaleTimeString();
        this.estabelecimento = await this.requisicao(`https://backendhifood-production.up.railway.app/estabelecimentos/ler/${estabSelecionado}`, 'GET', token);
        const itensSalvos = localStorage.getItem("itensPedido");
        if (itensSalvos) {
            this.itensPedido = JSON.parse(itensSalvos);
        }
    },
    computed: {
        valorTotal() {
            let total = 0
            for (let itemPedido of this.itensPedido) {
                total += itemPedido.preco * itemPedido.qtdItens
            }
            return total
        }
    }
}
</script>
<style scoped>
h3 {
    font-size: 1.5rem;
    margin: 0;
}

table {
    width: 100%;
    text-align: left;
}

.fundo-modal {
    position: fixed;
    background-color: #3e3e3ea5;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-perfil {
    display: flex;
    width: 30vw;
    min-height: 40vh;
    flex-direction: column;
    background-color: #f7f7be;
    border-radius: 0.3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    padding: 35px;
}

.dados-restaurante{
    display: flex;
    justify-content: space-between;
    margin-bottom: -30px;

}

.pedido-tempo{
    display: flex;
    justify-content: flex-end;
   
}

hr{
    border: none; 
    border-top: 3px dotted rgb(207, 203, 203);
}

.produto{
    display: flex;
    justify-content:space-between;
}

.total{
    display: flex;
    justify-content: space-between;
    margin-bottom: -20px;


}

.elemento-verde{
    color: rgb(62, 177, 62);
}

</style>