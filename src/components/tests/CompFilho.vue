<template>
    <div v-if="exibirComponenteLocal">
        <h2>Componente Filho</h2>
        <input type="button" value="Ocultar" @click="ocultarComponente">
    </div>
</template>

<script>
export default {
    name: "CompPai",

    props: {
        exibir: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            exibirComponenteLocal: false // Inicialmente, o componente está oculto
        };
    },
    watch: {
        exibir(novoValor) {
            // Quando a propriedade exibir fornecida pelo pai mudar,
            // atualizamos a visibilidade interna do componente filho
            this.exibirComponenteLocal = novoValor;
        }
    },
    methods: {
        ocultarComponente() {
            this.exibirComponenteLocal = false;
            console.log(`exibirComponenteLocal : ${this.exibirComponenteLocal}`)
        }
    }
}
</script>



<style scoped>
div {
    background-color: cornflowerblue;
    border-radius: 20px;
    padding: 3vw;
}
</style>