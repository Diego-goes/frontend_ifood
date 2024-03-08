<template>
    <div class="linhaCrud">
        <input type="checkbox" name="" id="">
        <p>{{ linhaData.usuarioId }}</p>
        <p>{{ linhaData.nomeUsu }}</p>
        <p>{{ formatarStatus }}</p>
        <p>{{ formatarTipo }}</p>
        <p>{{ linhaData.dataCriacao }}</p>
    </div>
</template>

<script>
export default {
    name: 'linhaCrudUsuario',
    props: {
        linhaData: Object
    }, computed: {
        formatarTipo() {
            if (this.linhaData.tipoUsuarioId == 0) {
                return 'Comprador'
            } else {
                return 'Entregador'
            }
        },
        formatarStatus() {
            if (this.linhaData.ativo == false) {
                return 'Desativada'
            } else {
                return 'Ativada'
            }
        }
    }
}
</script>

<style scoped>
.linhaCrud {
    display: grid;
    gap: 2%;
    grid-template-columns: 0.2fr 1fr 2fr 1fr 1fr 2fr;
    padding: 2% 1%;
}

.linhaCrud:nth-child(even){
  background-color: rgb(234, 234, 234);
}

.linhaCrud p{
    margin: 0px 0px;
    text-align: left;
}
</style>