<template>
    <div class="dadosEndereco">
        <div class="tagsEspecificasEnderecos">
            <select v-model="selectEndereco.index" name="selectEnderecos" id="selectEndereco">
                <option v-for="end, index in enderecos" :key="end.enderecoId" :value="index">{{ index + 1 }} - {{
                end.logradouro }}
                </option>
                <option :value="enderecos.length" :selected="true">Novo Endereço</option>
            </select>
            <div>
                <BtnDefault :value="'Remover'" @click="removerEndereco"
                    v-if="typeof (enderecos[enderecos.length - 1]) === 'object'" :preenchido="false" />
                <BtnDefault v-if="selectEndereco.index == enderecos.length || enderecos.length == 0"
                    :value="'Adicionar'" @click="adicionarEndereco" :preenchido="true" />
                <BtnDefault v-if="selectEndereco.index !== enderecos.length" :value="'Editar'" @click="editarEndereco"
                    :preenchido="true" />
            </div>
        </div>
        <hr>
        {{ this.selectEndereco.index }}
        <div class="camposEnderecos" v-if="exibirPronto" @change="retornarDadosEnds">
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'logradouro'" :typeProp="'text'"
                :spanTextProp="'Logradouro'" :valueProp="`${endereco.logradouro}`"
                :placeholderProp="'Digite seu logradouro'" />
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'cep'" :typeProp="'text'"
                :spanTextProp="'CEP'" :valueProp="`${endereco.cep}`" :placeholderProp="'Digite seu CEP'" />
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'bairro'" :typeProp="'text'"
                :spanTextProp="'Bairro'" :valueProp="`${endereco.bairro}`" :placeholderProp="'Digite seu bairro'" />
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'cidade'" :typeProp="'text'"
                :spanTextProp="'Cidade'" :valueProp="`${endereco.cidade}`" :placeholderProp="'Digite sua cidade'" />
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'estado'" :typeProp="'text'"
                :spanTextProp="'Estado'" :valueProp="`${endereco.estado}`" :placeholderProp="'Digite seu estado'" />
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'numero'" :typeProp="'number'"
                :spanTextProp="'Numero'" :valueProp="`${endereco.numero}`" :placeholderProp="'Digite seu numero'" />
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'complemento'" :typeProp="'text'"
                :spanTextProp="'Complemento'" :valueProp="`${endereco.complemento}`"
                :placeholderProp="'Digite seu complemento'" />
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'apelido'" :typeProp="'text'"
                :spanTextProp="'Apelido'" :valueProp="`${endereco.apelido}`" :placeholderProp="'Digite o apelido'" />
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'pontoReferencia'" :typeProp="'text'"
                :spanTextProp="'Ponto de Referência'" :valueProp="`${endereco.pontoReferencia}`"
                :placeholderProp="'Digite uma referência'" />
            <InputForm @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'coordenadas'" :typeProp="'text'"
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
        }
    },
    props: {
        dadosEnderecos: {
            type: Array
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
            this.enderecos.splice(this.selectEndereco.index,1)
            this.selectEndereco.index = this.enderecos.length
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
            return { ... this.enderecos[this.selectEndereco.index] }
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