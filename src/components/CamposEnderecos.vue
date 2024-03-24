<template>
    <div class="dadosEndereco">
        <div class="tagsEspecificasEnderecos">
            <select v-model="selectEndereco.index" name="selectEnderecos" id="selectEndereco">
                <option v-for="end, index in enderecos" :key="end.enderecoId" :value="index">{{ end.logradouro }}
                </option>
            </select>
        </div>
        <div class="camposEnderecos" @change="retornarDadosEnds">
            <InputForm :nomeAtributoProp="'logradouro'" :typeProp="'text'" :spanTextProp="'Logradouro'"
                :valueProp="`${endereco.logradouro}`" @retornarDadoInput="armazenarDadoInput"
                :placeholderProp="'Digite seu logradouro'" />
            <InputForm :nomeAtributoProp="'cep'" :typeProp="'text'" :spanTextProp="'CEP'" :valueProp="`${endereco.cep}`"
                :placeholderProp="'Digite seu CEP'" />
            <InputForm :nomeAtributoProp="'bairro'" :typeProp="'text'" :spanTextProp="'Bairro'"
                :valueProp="`${endereco.bairro}`" :placeholderProp="'Digite seu bairro'" />
            <InputForm :nomeAtributoProp="'cidade'" :typeProp="'text'" :spanTextProp="'Cidade'"
                :valueProp="`${endereco.cidade}`" :placeholderProp="'Digite sua cidade'" />
            <InputForm :nomeAtributoProp="'estado'" :typeProp="'text'" :spanTextProp="'Estado'"
                :valueProp="`${endereco.estado}`" :placeholderProp="'Digite seu estado'" />
            <InputForm :nomeAtributoProp="'numero'" :typeProp="'number'" :spanTextProp="'Numero'"
                :valueProp="`${endereco.numero}`" :placeholderProp="'Digite seu numero'" />
            <InputForm :nomeAtributoProp="'complemento'" :typeProp="'text'" :spanTextProp="'Complemento'"
                :valueProp="`${endereco.complemento}`" :placeholderProp="'Digite seu complemento'" />
            <InputForm :nomeAtributoProp="'apelido'" :typeProp="'text'" :spanTextProp="'Apelido'"
                :valueProp="`${endereco.apelido}`" :placeholderProp="'Digite o apelido'" />
            <InputForm :nomeAtributoProp="'pontoReferencia'" :typeProp="'text'" :spanTextProp="'Ponto de Referência'"
                :valueProp="`${endereco.pontoReferencia}`" :placeholderProp="'Digite uma referência'" />
            <InputForm :nomeAtributoProp="'coordenadas'" :typeProp="'text'" :spanTextProp="'Coordenadas'"
                :valueProp="`${endereco.coordenadas}`" :placeholderProp="'Digite as coordenadas'" />

            <!-- {{ this.endereco }} -->
        </div>
    </div>
</template>

<script>
import InputForm from "./InputForm.vue";
export default {
    name: 'CardUsu',
    data() {
        return {
            enderecos: this.dadosEnderecos,
            selectEndereco: {
                text: '',
                index: 2
            }
        }
    },
    props: {
        dadosEnderecos: Object
    },
    components: {
        InputForm
    },
    methods: {
        armazenarDadoInput(inputData) {
            let value = inputData.value
            let nomeAtributoProp = inputData.nomeAtributoProp
            this.endereco[`${nomeAtributoProp}`] = value
        },
        retornarDadosEnds() {
            this.$emit('retornarDadosEnd', this.enderecos)
        },
    },
    computed: {
        endereco: function () {
            return this.enderecos[this.selectEndereco.index];
        },
        enderecoSelecionado(){
            return this.endereco != null? true :false              
        }
    }
}
</script>

<style scoped>
.dadosEndereco,
select {
    font-size: 0.6rem;
}

.tagsEspecificasEnderecos {
    display: flex;
}

.camposEnderecos {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    justify-content: space-between;
}

#selectEndereco {
    padding: 2% 3%;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 20px;
}
</style>