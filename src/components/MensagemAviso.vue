<template>
    <div class="modal">
        <div :class="['cardAlerta', classesPrioridade]">
            <small>Aviso!</small>
            <p v-for="aviso, index in avisos" :key="index"> {{ aviso }} </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            avisos: this.avisosProp,
            nivelPrioridade: this.nivelPrioridadeProp,
            classesPrioridades : {
            1: "prioridade1",
            2: "prioridade2",
            3: "prioridade3",
        }
        }
    },
    props: {
        avisosProp: {
            type: Array,
            default: ()=>['Mensagem de Aviso!']
        },
        nivelPrioridadeProp: {
            type: Number,
            default: 1
        },
    },
    computed:{
        classesPrioridade(){
            return this.classesPrioridades[this.nivelPrioridade] 
        }
    }
}

</script>
<style scoped>
.modal {
    /*Caso fundo escuro, alterar proporções para tela inteira e add bg*/
    position: fixed;
    bottom: 10vh;
    right: 10vw;
    z-index: 2;
    font-size: 0.7rem;
}

.prioridade1{
    background-color: white;
}
.prioridade2{
    background-color: rgb(255, 204, 0);
    font-weight: bold
}
.prioridade3{
    background-color: rgb(255, 25, 0);
    color: white;
    font-weight: bolder
}

.cardAlerta {
    min-height: fit-content;
    min-width: max-content;
    box-shadow: 0px 4px 15px rgb(47, 47, 47);
    padding: 5% 10%;
    border-radius: 1rem;
}

.modal p {
    margin: 0;
}
</style>