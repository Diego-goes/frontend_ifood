<template>
    <div class="dadosEndereco">
        <div class="tagsEspecificasEnderecos">
            <select v-model="selectEndereco.index" name="selectEnderecos" id="selectEndereco">
                <option v-for="end, index in enderecos" :key="end.enderecoId" :value="index">{{ index + 1 }} - {{
                end.logradouro }}
                </option>
                <option v-show="podeEditar" :value="enderecos.length" :selected="true">Novo Endereço</option>
            </select>
            <div>
                <BtnDefault v-show="podeEditar" :value="'Remover'" @click="removerEndereco"
                    v-if="typeof (enderecos[enderecos.length - 1]) === 'object' && selectEndereco.index !== enderecos.length"
                    :preenchido="false" />
                <BtnDefault v-show="podeEditar" v-if="selectEndereco.index == enderecos.length || enderecos.length == 0"
                    :value="'Novo'" @click="adicionarEndereco" :preenchido="true" />
                <BtnDefault v-show="podeEditar" v-if="selectEndereco.index !== enderecos.length"
                    :value="'Salvar Endereço'" @click="editarEndereco" :preenchido="true" />
            </div>
        </div>
        <hr>
        <div class="camposEnderecos" v-if="exibirPronto" @change="retornarDadosEnds">
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'logradouro'" :typeProp="'text'"
                :spanTextProp="'Logradouro'" :valueProp="`${endereco.logradouro}`"
                :placeholderProp="'Digite seu logradouro'" />
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'cep'" :typeProp="'text'"
                :spanTextProp="'CEP'" :valueProp="`${endereco.cep}`" :placeholderProp="'Digite seu CEP'" />
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'bairro'" :typeProp="'text'"
                :spanTextProp="'Bairro'" :valueProp="`${endereco.bairro}`" :placeholderProp="'Digite seu bairro'" />
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'cidade'" :typeProp="'text'"
                :spanTextProp="'Cidade'" :valueProp="`${endereco.cidade}`" :placeholderProp="'Digite sua cidade'" />
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'estado'" :typeProp="'text'"
                :spanTextProp="'Estado'" :valueProp="`${endereco.estado}`" :placeholderProp="'Digite seu estado'" />
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'numero'" :typeProp="'number'"
                :spanTextProp="'Numero'" :valueProp="`${endereco.numero}`" :placeholderProp="'Digite seu numero'" />
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'complemento'" :typeProp="'text'"
                :spanTextProp="'Complemento'" :valueProp="`${endereco.complemento}`"
                :placeholderProp="'Digite seu complemento'" />
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'apelido'" :typeProp="'text'"
                :spanTextProp="'Apelido'" :valueProp="`${endereco.apelido}`" :placeholderProp="'Digite o apelido'" />
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'pontoReferencia'" :typeProp="'text'"
                :spanTextProp="'Ponto de Referência'" :valueProp="`${endereco.pontoReferencia}`"
                :placeholderProp="'Digite uma referência'" />
            <InputForm :podeEditarProp="podeEditar" @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'coordenadas'" :typeProp="'text'"
                :spanTextProp="'Coordenadas'" :valueProp="`${endereco.coordenadas}`"
                :placeholderProp="'Digite as coordenadas'" />

        </div>
    </div>
</template>

<script>
import InputForm from "./InputForm.vue";
import BtnDefault from "./BtnDefault.vue";
export default {
    name: 'CardUsu',
    data() {
        return {
            enderecos: this.dadosEnderecos,
            selectEndereco: {
                text: '',
                index: 0
            },
            exibirPronto: true,
            podeEditar: this.podeEditarProp
        }
    },
    props: {
        dadosEnderecos: {
            type: Array
        },
        podeEditarProp: {
            type: Boolean,
            default: true
        }
    },
    components: {
        InputForm,
        BtnDefault
    },
    methods: {
        adicionarEndereco() {
            this.enderecos.push(this.endereco)
            this.selectEndereco.index = this.enderecos.length
        },
        removerEndereco() {
            this.enderecos.splice(this.selectEndereco.index, 1)
            this.selectEndereco.index = this.enderecos.length
        },
        editarEndereco() {
            this.enderecos.splice(this.selectEndereco.index, 1, this.endereco);
        },
        armazenarDadoInput(inputData) {
            let value = inputData.value
            let nomeAtributoProp = inputData.nomeAtributoProp
            this.endereco[`${nomeAtributoProp}`] = value
        },
        retornarDadosEnds() {
            this.$emit('retornarDadosEnds', this.enderecos)
        },
    },
    watch: {
        'endereco'() {
            this.exibirPronto = false
            setTimeout(() => this.exibirPronto = true, 10)
        }
    },
    computed: {
        endereco: function () {
            // Se endereco é undefined, retorna um endereço padrão vazio.
            return {
                ... this.enderecos[this.selectEndereco.index] || {
                    'logradouro': '',
                    'cep': '',
                    'bairro': '',
                    'cidade': '',
                    'estado': '',
                    'numero': '',
                    'complemento': '',
                    'apelido': '',
                    'pontoReferencia': '',
                    'coordenadas': ''
                }
            }
        },
        enderecoSelecionado() {
            return this.endereco != null ? true : false
        }
    }
}
</script>

<style scoped>
.dadosEndereco,
select {
    font-size: 0.6rem;
}

hr {
    border-color: rgba(243, 243, 243, 0.315);
    margin-bottom: 5%;
}

.tagsEspecificasEnderecos {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.tagsEspecificasEnderecos div {
    display: flex;
    gap: 15%;
    margin-right: 5%;
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