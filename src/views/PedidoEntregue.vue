<template>
    <div class="viewPedidoEntregue">
        <div class="container">
            <img src="../assets/greenCheck.png" alt="Check">
            <h2>Pedido Entregue <br>com sucesso! </h2>


            <div class="endereco">
                <p>Entrega em:</p>
                <p>{{ this.endereco_principal['logradouro'] }}, {{ this.endereco_principal['numero'] }}{{
                    this.endereco_principal['cidade'] ? ` -
                    ${this.endereco_principal['cidade']}` : '' }}<br>
                    CEP: {{ this.endereco_principal['cep'] }}</p>

            </div>

            <div class="detalhe-pedido">
                <p> <b>Detalhe do pedido</b></p>
                <div class="dados-restaurante">
                    <img :src="`data:image/png;base64,${this.estabelecimento['imagemEstab']}` || '../../src/assets/imagem_default.png'"
                        alt="Img restaurante">
                    <p>{{ this.estabelecimento['nomeEstab'] || 'Carregando...' }}</p>
                </div>
                <div class="total">
                    <p>Total:</p>
                    <p>R$ {{ this.valorTotal.toFixed(2) }}</p>
                </div>
                <div class="btns">
                    <input type="button" value="Visualizar NF" class="btn-nf"
                        @click="() => { this.$router.push('/modalNotaFiscal') }">

                    <input type="button" value="Pagina inicial" class="btn-avaliacao" @click="reiniciarFluxo">
                </div>

            </div>

        </div>

    </div>

</template>
<script>
import { requisicao } from '../../utils/funcsGerais';
export default {
    name: "PedidoEntegue",
    data() {
        return {
            estabelecimento: {},
            itensPedido: [],
            endereco_principal: {}
        }
    },
    methods: {
        requisicao,
        reiniciarFluxo() {
            this.$router.push('/inicio')
            this.limparVariaveisAplication()
        },
        limparVariaveisAplication() {
            localStorage.removeItem('itensPedido')
            localStorage.removeItem('pedido')
            localStorage.removeItem('estabSelecionado')
        }
    },
    async created() {
        let estabelecimentoId = localStorage.getItem("estabSelecionado")
        this.estabelecimento = await this.requisicao(`https://backendhifood-production.up.railway.app/estabelecimentos/ler/${estabelecimentoId}`)
        this.itensPedido = JSON.parse(localStorage.getItem('itensPedido'))
        this.endereco_principal = JSON.parse(localStorage.getItem('endereco_principal'))
        console.log(this.itensPedido)
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
.viewPedidoEntregue {
    background-image: url(../assets/fundoMaps.jpg);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: hsla(0, 0%, 100%, 0.7);
    padding: 8px;
    border-radius: 4px;
    width: 35vw;
    height: 80vh;
}

.container img {
    width: 60px;
}

.container h2 {
    color: rgb(25, 165, 20);
}

.endereco {
    display: flex;
    text-align: left;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;

}

.endereco p:nth-child(1) {
    font-weight: bolder;
    margin-bottom: -2px;

}

.detalhe-pedido {
    display: flex;
    text-align: left;
    flex-direction: column;
    width: 100%;

}

.dados-restaurante {
    display: flex;
    width: 100%;

}

.dados-restaurante img {
    object-fit: contain;
    border-radius: 100%;
}

.total {
    display: flex;
    justify-content: space-between;
}

.btns {
    display: flex;
    justify-content: space-around;
}

.btn-nf {
    border: none;
    border-radius: 3px;
    padding: 10px;
    height: 40px;
    width: 15vw;
    color: white;
    background-color: #EA1D2C;

}

.btn-avaliacao {
    border: none;
    border-radius: 3px;
    padding: 10px;
    height: 40px;
    width: 15vw;
    color: white;
    background-color: #EA1D2C;


}
</style>