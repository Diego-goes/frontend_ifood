<template>
    <div class="cardConfirm">
        <div class="iconeConfirmacao">
            ?
        </div>
        <div>
            <p> {{ this.modalConfirmacao.pergunta }} </p>
        </div>
        <div>
            <input type="button" @click="modalConfirmacao.btn1.func(this)" value="Cancelar">
            <input type="button" @click="modalConfirmacao.btn2.func(this)" value="Confirmar">
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardConfirm',
    data() {
        return {
            modalConfirmacao: this.modalConfirmacaoProps,
            thisContext: this
        }
    },
    methods: {},
    props: {
        perguntaProps: {
            type: String,
            default: "",
            required: false
        },
        modalConfirmacaoProps: {
            type: Object,
            default: () => ({
                pergunta: "",
                btn1: {
                    value: "",
                    func() { }
                },
                btn2: {
                    value: "",
                    func() { }
                }
            }),
            required: false
        },
    },
}
</script>
<style scoped>
.cardConfirm {
    max-width: 40vw;
    max-height: 70vh;
    width: 40vw;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.iconeConfirmacao {
    border: 1px solid lightgray;
    aspect-ratio: 1/1;
    width: 5%;
    border-radius: 100%;
}
</style>