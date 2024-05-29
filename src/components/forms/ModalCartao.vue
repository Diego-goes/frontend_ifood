<template>
    <div class="fundo_modal">
        <div class="modal">
            <div class="criarCartoes" v-if="!listarCartoes">
                <div class="div_btn_voltar">
                    <img src="@/assets/SetaVermelha.png" alt="" @click="voltar">
                    <p>Novo Cartão</p>
                </div>
                <input type="number" placeholder="Número cartão">
                <input type="text" placeholder="Nome impresso">
                <div class="inputsValidadeCvv">
                    <input type="text" placeholder="Validade">
                    <input type="number" placeholder="CVV">
                </div>
                <input type="text" placeholder="Apelido do cartão">
                <input type="number" placeholder="CPF/CNPJ">
                <input type="button" value="Adicionar">
            </div>
            <div class="listarCartoes" v-if="listarCartoes">
                <div class="fechar-modal">
                    <img src="../../assets/close.png" alt="fechar-aba">
                    <a>Selecionar Cartão</a>
                </div>
                <div class="caixas-cartao">
                    <div class="campo-cartao">
                        <img src="../../assets/cartao.png" alt="icone-cartão">
                        <a>Cartão 1</a>
                        <img src="../../assets/icone-opcao.png">
                    </div>
                    <div class="campo-cartao">
                        <img src="../../assets/cartao.png" alt="icone-cartão">
                        <a>Cartão 2</a>
                        <img src="../../assets/icone-opcao.png">
                    </div>
                </div>
            </div>
            <input type="button" value="Editar Cartão" @click="alterarCampo">
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalCartao',
    data() {
        return {
            listarCartoes: true
        }
    },
    methods: {
        voltar() {
            this.$emit('voltar')
        },
        alterarCampo() {
            this.listarCartoes = !this.listarCartoes
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