<template>
    <div class="fundo_modal">
        <div class="modal">
            <div class="div_btn_voltar">
                <img src="@/assets/SetaVermelha.png" alt="" @click="voltar" >
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
    </div>
</template>
<script>
export default {
    name: 'ModalCartao',
    data() {
        return {

        }
    },
    methods:{
        voltar(){
            this.$emit('voltar')
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