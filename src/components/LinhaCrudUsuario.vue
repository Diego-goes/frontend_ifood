<template>
    <label v-bind:for="'radio' + linhaData.usuarioId">
        <div class="linhaCrud" v-bind:id="'linhaCrudUsu' + linhaData.usuarioId">
            <input type="radio" v-bind:id="'radio' + linhaData.usuarioId" name="selecionar" @change="salvarId" @click="toggleSelecao">
            <p>{{ linhaData.usuarioId }}</p>
            <p>{{ linhaData.nomeUsu }}</p>
            <p>{{ formatarStatus }}</p>
            <p>{{ formatarTipo }}</p>
            <p>{{ linhaData.dataCriacao }}</p>
        </div>
    </label>
</template>

<script>
export default {
    name: 'linhaCrudUsuario',
    data() {
        return {
            ultimoRadio: ''
        }
    },
    props: {
        linhaData: Object
    },
    methods: {
        salvarId() {
            this.$emit('salvarId', this.linhaData.usuarioId)
        },
        toggleSelecao(event) {
            if (event.target.parentElement.id == this.ultimoRadio) {
                event.target.checked = false
                this.ultimoRadio = ''
            } else {
                event.target.checked = true
                this.ultimoRadio = event.target.parentElement.id
            }
        }
    }
    , computed: {
        formatarTipo() {
            if (this.linhaData.tipoUsuarioId == 0) {
                return 'Comprador'
            } else {
                return 'Entregador'
            }
        },
        formatarStatus() {
            if (this.linhaData.statusAtivo == 0) {
                return 'Desativada'
            } else {
                return 'Ativada'
            }
        },
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

.linhaCrud:nth-child(even) {
    background-color: rgb(234, 234, 234);
}

.linhaCrud p {
    margin: 0px 0px;
    text-align: left;
}
</style>