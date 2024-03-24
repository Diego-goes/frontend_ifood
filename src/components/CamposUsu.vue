<template>
    <div class="dadosGerais" @change="retornarDadosUsu">
        <InputForm @retornarDadoInput="armazenarDadoInput" :typeProp="'text'" :nomeAtributoProp="'nomeUsu'" :spanTextProp="'Nome'" :valueProp="usuario.nomeUsu"
            :placeholderProp="'Digite seu nome'" />
        <InputForm @retornarDadoInput="armazenarDadoInput" :typeProp="'text'" :nomeAtributoProp="'telefoneUsu'" :spanTextProp="'Telefone'"
            :valueProp="usuario.telefoneUsu" :placeholderProp="'Digite seu telefone'" />
        <InputForm @retornarDadoInput="armazenarDadoInput" :typeProp="'text'" :nomeAtributoProp="'cpf'" :spanTextProp="'CPF'" :valueProp="usuario.cpf"
            :placeholderProp="'Digite seu CPF'" />
        <InputForm @retornarDadoInput="armazenarDadoInput" :typeProp="'email'" :nomeAtributoProp="'emailUsu'" :spanTextProp="'Email'"
            :valueProp="usuario.emailUsu" :placeholderProp="'Digite seu email'" />
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
        <!-- <small style="font-size: 0.7rem;">{{ this.usuario }}</small> -->
    </div>
</template>

<script>
import InputForm from "./InputForm.vue";
export default {
    name: 'CardUsu',
    data() {
        return {
            usuario: this.dadosUsu,
        }
    },
    props: {
        dadosUsu: Object
    },
    components: {
        InputForm
    },
    methods: {
        armazenarDadoInput(inputData) {
            let value = inputData.value
            let nomeAtributoProp = inputData.nomeAtributoProp
            this.usuario[`${nomeAtributoProp}`] = value
        },
        mudouStatus(option) {
            this.usuario.statusAtivo = option
        },
        mudouTipoUsuario(option) {
            this.usuario.tipoUsuarioId = option
        },
        retornarDadosUsu() {
            this.$emit('retornarDadosUsu', this.usuario)
        },
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

select {
    font-size: 0.8rem;
}

span {
    margin-left: 8%;
    margin-bottom: -5px;
    z-index: 1;
    background-color: white;
    border-radius: 10px;
    color: rgb(152, 152, 152);
    padding: 0px 3%;
    width: 5%;
    min-width: fit-content;
    font-size: 0.8rem;
}
</style>