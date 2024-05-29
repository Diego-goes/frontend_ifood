<template>
    <div class="fundo_modal">
        <div class="modal">
            <div class="criarCartoes" v-if="!listarCartoes">
                <div class="div_btn_voltar">
                    <img src="@/assets/SetaVermelha.png" alt="" @click="alterarCampo">
                    <p>Novo Cartão</p>
                </div>
                <input type="text" v-model="dadosCartao.nomeTitular" placeholder="Nome do Titular" required >
                <input type="number" v-model="dadosCartao.numCartao" placeholder="Número cartão" maxlength="16" required >
                <input type="text" v-model="dadosCartao.nomeBandeira" placeholder="Bandeira do Cartão" required >
                <div class="inputsValidadeCvv">
                    <input type="text" v-model="dadosCartao.validade" placeholder="Validade" required >
                    <input type="number" v-model="dadosCartao.cvv" placeholder="CVV" required >
                </div>
                <input type="text" v-model="dadosCartao.apelidoCartao" placeholder="Apelido do cartão" required >
                <input type="number" v-model="dadosCartao.cpfCnpj" placeholder="CPF/CNPJ" required >
                <input type="button" value="Adicionar" @click="submitForm" >
            </div>
            <div class="listarCartoes" v-if="listarCartoes">
                <div class="fechar-modal">
                    <img src="../../assets/close.png" alt="fechar-aba" @click="voltar">
                    <a>Selecionar Cartão</a>
                </div>
                <div v-for="cartao_atual in cartoes" :key="cartao_atual.cartaoId">
                    <div class="caixas-cartao">
                        <div class="campo-cartao">
                            <img src="../../assets/cartao.png" alt="icone-cartão">
                            <a>this.cartao_atual.apelidoCartao</a>
                            <img src="../../assets/pencil.png">
                            <img src="../../assets/lixoVermelho.png">
                        </div>
                        <div class="campo-cartao">
                            <img src="../../assets/cartao.png" alt="icone-cartão">
                            <a>Cartão 2</a>
                            <img src="../../assets/pencil.png">
                            <img src="../../assets/lixoVermelho.png">
                        </div>
                </div>
                </div>
            </div>
            <input type="button" value="Adicionar Cartão" @click="alterarCampo" v-if="listarCartoes">
        </div>
    </div>
</template>
<script>
import { requisicao } from '../../../utils/funcsGerais'
export default {
    name: 'ModalCartaoCopy',
    data() {
        return {
            listarCartoes: true,
            cartoes: [],
            dadosCartao: {
                "formaPagId": "3",
                "nomeTitular": "",
                "numCartao": "",
                "nomeBandeira": "",
                "validade": "",
                "cvv": "",
                "apelidoCartao": "",
                "cpfCnpj": ""
            }
        }
    },
    methods: {
        requisicao,
        voltar() {
            this.$emit('voltar')
        },
        alterarCampo() {
            this.listarCartoes = !this.listarCartoes
        },
        async submitForm () { // Esta função deve estar dentro do objeto 'methods'
            let token = localStorage.getItem('tokenJWT');
            await this.requisicao(`https://backendhifood-production.up.railway.app/cartoes/criar`, 'POST', token, this.dadosCartao);
            console.log("passou aqui")
            this.listarCartoes = true
        },
        async puxarCartoes() {
            let token = localStorage.getItem('tokenJWT');
            let idUsu = localStorage.getItem('usuarioId');
            this.cartoes = await this.requisicao(`https://backendhifood-production.up.railway.app/cartoes/usuario/${idUsu}`, 'GET', token)
            console.log()
        }
    },
    created() {
        this.puxarCartoes()
    }
}
</script>
<style scoped>
p {
    margin: 0
}

input {
    border-radius: 0.3rem;
}

.fundo_modal {
    background-color: rgba(0, 0, 0, 0.595);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}


.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 20vw;
    gap: 2vh;
    padding: 2rem 3rem;
    border-radius: 0.3rem;
}

.criarCartoes {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.div_btn_voltar {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
}

.inputsValidadeCvv {
    display: flex;
    width: 102%;
    justify-content: space-between;
}


input[type="Number"],
input[type="Text"] {
    padding: 3% 1%;
    border: 1px solid lightgray;
    width: 100%;
}

.inputsValidadeCvv input {
    width: 45%;
}

input::placeholder {
    color: lightgray;
}

input[type="Button"] {
    width: 100%;
    padding: 3% 2%;
    background-color: red;
    color: white;
    border: none;
}

.fechar-modal {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 60px;
}

.listarCartoes {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.listarCartoes img {
    width: 20px;
}

.caixas-cartao {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.campo-cartao {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 1px solid rgba(211, 211, 211, 0.348);
    border-radius: 0.3rem;
    padding: 1.5rem 1.5rem;
}

</style>