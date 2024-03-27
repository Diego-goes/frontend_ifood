<template>
    <MensagemAviso @click.stop v-if="exibirAviso" :avisosProp="aviso.msgs" />
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
                    :value="'Adicionar Endereço'" @click="adicionarEndereco" :preenchido="true" />
                <BtnDefault v-show="podeEditar" v-if="selectEndereco.index !== enderecos.length"
                    :value="'Salvar Endereço'" @click="editarEndereco" :preenchido="true" />
            </div>
        </div>
        <hr>
        <div class="camposEnderecos" v-if="exibirPronto" @change="retornarDadosEnds">
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'logradouro'" :typeProp="'text'"
                :spanTextProp="'Logradouro'" :valueProp="`${endereco.logradouro}`"
                :placeholderProp="'Digite seu logradouro'" />
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" @change="autoPreencherPorCep" :nomeAtributoProp="'cep'"
                :typeProp="'text'" :spanTextProp="'CEP'" :valueProp="`${endereco.cep}`"
                :placeholderProp="'Digite seu CEP'" :patternProp="'[0-9]{5}[0-9]{3}'" />
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'bairro'" :typeProp="'text'"
                :spanTextProp="'Bairro'" :valueProp="`${endereco.bairro}`" :placeholderProp="'Digite seu bairro'" />
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'cidade'" :typeProp="'text'"
                :spanTextProp="'Cidade'" :valueProp="`${endereco.cidade}`" :placeholderProp="'Digite sua cidade'" />
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'estado'" :typeProp="'text'"
                :spanTextProp="'Estado'" :valueProp="`${endereco.estado}`" :placeholderProp="'Digite seu estado'" />
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'numero'" :typeProp="'number'"
                :spanTextProp="'Numero'" :valueProp="`${endereco.numero}`" :placeholderProp="'Digite seu numero'" />
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'complemento'" :typeProp="'text'"
                :spanTextProp="'Complemento'" :valueProp="`${endereco.complemento}`"
                :placeholderProp="'Digite seu complemento'" />
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'apelido'" :typeProp="'text'"
                :spanTextProp="'Apelido'" :valueProp="`${endereco.apelido}`" :placeholderProp="'Digite o apelido'" />
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'pontoReferencia'" :typeProp="'text'"
                :spanTextProp="'Ponto de Referência'" :valueProp="`${endereco.pontoReferencia}`"
                :placeholderProp="'Digite uma referência'" />
            <InputForm :requeridoProp="camposSaoRequeridos" :podeEditarProp="podeEditar"
                @retornarDadoInput="armazenarDadoInput" :nomeAtributoProp="'coordenadas'" :typeProp="'text'"
                :spanTextProp="'Coordenadas'" :valueProp="`${endereco.coordenadas}`"
                :placeholderProp="'Digite as coordenadas'" />

        </div>
    </div>
</template>

<script>
import InputForm from "./InputForm.vue";
import BtnDefault from "./BtnDefault.vue";
import MensagemAviso from './MensagemAviso.vue'
import axios from "axios";
export default {
    emits: ['retornarDadosEnds'],
    name: 'CardUsu',
    data() {
        return {
            camposSaoRequeridos: false,
            enderecos: this.dadosEnderecos,
            camposObrigatorios: ['logradouro', 'cep', 'numero'],
            selectEndereco: {
                text: '',
                index: 0
            },
            exibirPronto: true,
            podeEditar: this.podeEditarProp,
            aviso: {
                titulo: '',
                msgs: []
            },
            enderecoPorCep: {

            }
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
        BtnDefault,
        MensagemAviso
    },
    methods: {
        limparCampoEndereco() {
            for (let campo of Object.keys(this.endereco)) {
                this.endereco[campo] = ''
            }
        },
        adicionarEndereco() {
            if (this.enderecosValidos()) {
                this.enderecos.push(this.endereco)
                this.limparCampoEndereco()
                this.selectEndereco.index = this.enderecos.length
            } else {
                this.aviso.msgs = ["Campos 'Logradouro', 'CEP' e 'Número' são obrigatórios."]
            }
        },
        enderecosValidos() {
            for (let campo of this.camposObrigatorios) {
                if (this.endereco[campo] == '') {
                    return false
                }
            }
            return true
        },
        removerEndereco() {
            this.enderecos.splice(this.selectEndereco.index, 1)
            this.selectEndereco.index = this.enderecos.length
        },
        editarEndereco() {
            this.enderecos.splice(this.selectEndereco.index, 1, this.endereco);
        },
        puxarDadosPorCEP(cep) {
            let headers = {
                'Content-Type': 'application/json'
            }
            axios({
                method: `GET`,
                url: `https://viacep.com.br/ws/${cep}/json/`,
                headers
            }).then((response) => {
                for (let [attKey, attValue] of Object.entries(response.data)) {
                    attValue = attKey == 'cep' ? attValue.replace('-','') : attValue
                    attKey = attKey == 'uf' ? 'estado' : attKey
                    attKey = attKey == 'localidade' ? 'cidade' : attKey
                    if (this.endereco[attKey] != undefined && attValue != '') {
                        this.endereco[attKey] = attValue
                        // console.log(this.endereco)
                    }

                }
            }).catch((error) => {
                console.log('error', error)
            });
        },
        autoPreencherPorCep() {
            this.exibirPronto = false
            setTimeout(() => (this.exibirPronto = true), 10)
        },
        armazenarDadoInput(inputData) {
            let value = inputData.value
            let nomeAtributoProp = inputData.nomeAtributoProp
            if (nomeAtributoProp == 'cep') {
                this.puxarDadosPorCEP(value)
            }
            this.endereco[`${nomeAtributoProp}`] = value
        },
        retornarDadosEnds() {
            this.$emit('retornarDadosEnds', this.enderecos)
        },
    },
    watch: {
        'endereco': {
            handler() {
                // newEndereco, oldEndereco
                // if (newEndereco.cep !== oldEndereco.cep) {
                //     alert('enderecoMudou');
                //     this.exibirPronto = false;
                //     setTimeout(() => (this.exibirPronto = true), 10);
                // }
                this.exibirPronto = false;
                setTimeout(() => (this.exibirPronto = true), 10);

            },
            deep: true
        },
        'exibirAviso'() {
            setTimeout(() => {
                this.aviso = {
                    titulo: '',
                    msgs: []
                }
            }, 4000)
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
        },
        exibirAviso() {
            return this.aviso.msgs.length > 0
        },
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