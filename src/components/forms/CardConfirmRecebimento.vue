<template>
    <div class="CardConfirmRecebimento">
        
    </div>
</template>
<script>
export default {
    name: 'CardConfirmRecebimento',
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
</style>