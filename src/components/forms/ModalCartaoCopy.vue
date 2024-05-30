<template>
    <div class="fundo_modal">
        <div class="modal">
            <div class="listarCartoes" v-if="listarCartoes">
                <div class="div_btn_voltar">
                    <img src="@/assets/SetaVermelha.png" alt="" @click="voltar">
                    <p>Novo Cartão</p>
                </div>
                <input type="number" v-model="dadosCartao.numCartao" placeholder="Número cartão" maxlength="16" required >
                <input type="text" v-model="dadosCartao.nomeBandeira" placeholder="Nome impresso" required >
                <div class="inputsValidadeCvv" required>
                    <input type="text" v-model="dadosCartao.validade" placeholder="Validade" required >
                    <input type="number" v-model="dadosCartao.cvv" placeholder="CVV" required >
                </div>
                <input type="text" v-model="dadosCartao.apelidoCartao" placeholder="Apelido do cartão" required >
                <input type="number" v-model="dadosCartao.cpfCnpj" placeholder="CPF/CNPJ" required >
                <input type="button" value="Adicionar" @click="submitForm" required >
            
            </div>
            <div class="listarCartoes" v-if="!listarCartoes">
            </div>
            <input type="button" value="Mudar campo" @click="alterarCampo">
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
            dadosCartao: {
                "formaPagId": "3",
                "nomeTitular": "nomeTitular",
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
        }
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
</style>