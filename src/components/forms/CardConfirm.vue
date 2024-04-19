<template>
    <div class="cardConfirm">
        <div class="iconeConfirmacao">
            ?
        </div>
        <div>
            <p> {{ pergunta }} </p>
        </div>
        <div>
            <input type="button" @click="retornarResposta" value="Cancelar">
            <input type="button" @click="retornarResposta" value="Confirmar">
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardConfirm',
    data(){
        return {
            resposta: null
        }
    },
    props: {
        pergunta: String
    },
    methods: {
        retornarResposta(event){
            // this.$emit('retornarResposta', value)
            alert(event.target.value)
        }
    }
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