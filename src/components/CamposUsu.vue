<template>
    <div class="dadosGerais">
        <InputForm :type="'text'" :spanText="'Nome'" :value="usuario.nomeUsu" :placeholder="'Digite seu nome'" />
        <InputForm :type="'text'" :spanText="'Telefone'" :value="usuario.telefoneUsu"
            :placeholder="'Digite seu telefone'" />
        <InputForm :type="'text'" :spanText="'CPF'" :value="usuario.cpf" :placeholder="'Digite seu CPF'" />
        <InputForm :type="'email'" :spanText="'Email'" :value="usuario.emailUsu" :placeholder="'Digite seu email'" />
        <div class="divsSelectsForm">
            <span for="statusAtivo">Status Ativo</span>
            <select v-model="usuario.statusAtivo" class="selectCamposForm" name="statusAtivo" id="statusAtivo"
                @click="mudouStatus($event.target.value)">
                <option value="">Selecione</option>
                <option value="true">Ativo</option>
                <option value="false">Inativo</option>
            </select>
        </div>
        <div class="divsSelectsForm">
            <span for="tipoContaId">Tipo Conta</span>
            <select v-model="usuario.tipoUsuarioId" class="selectCamposForm" name="tipoContaId" id="tipoContaId"
                @click="mudouTipoUsuario($event.target.value)">
                <option value="">Selecione</option>
                <option value="0">Comprador</option>
                <option value="1">Entregador</option>
            </select>
        </div>
    </div>
</template>

<script>
import InputForm from "./InputForm.vue";
export default {
    name: 'CardUsu',
    data() {
        return {
            usuario: this.dadosCadastrais.usuario,
        }
    },
    props: {
        dadosCadastrais: Object
    },
    components: {
        InputForm
    },
    methods: {
        mudouStatus(option) {
            this.usuario.statusAtivo = option
        },
        mudouTipoUsuario(option) {
            this.usuario.tipoUsuarioId = option
        },
        autoPreencher() {
            this.usuario = this.dadosUsuario
            console.log('this.usuario', this.usuario)
        }
    },
}
</script>

<style scoped>
.divsSelectsForm {
    display: flex;
    justify-content: left;
    flex-direction: column;
}

.selectCamposForm {
    padding: 3%;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 20px;
    width: 100%;
}

span {
    margin-left: 8%;
    margin-bottom: -5px;
    z-index: 1;
    background-color: white;
    border-radius: 10px;
    color: gray;
    padding: 0px 3%;
    width: 5%;
    min-width: fit-content;
    font-size: 0.8rem;
}
</style>