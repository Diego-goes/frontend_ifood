<template>
    <div :class="foraCardForm" @click="ocultarForm">
        <MensagemAviso @click.stop v-if="exibirAviso" :avisosProp="aviso.msgs" />
        <div class="CardFormCadastro" @click.stop>
            <h2>Dados do Usuário</h2>
            <form @submit.prevent="enviarForm" method="post" class="formUsuario">
                <div id="camposForm">
                    <div v-for="(item, index) in Object.entries(usuario)" :key="`campo_${index}`">
                        <div class="inputs_card" v-if="item[0] in inputs_data">
                            <span>{{ inputs_data[item[0]].spanText || '' }}</span>
                            <input v-if="inputs_data[item[0]].elemento != 'select'"
                                :type="inputs_data[item[0]].type || 'text'" :value="inputs_data[item[0]].value || ''"
                                :placeholder="inputs_data[item[0]].placeholder || ''"
                                :disabled="'disabled' in inputs_data[item[0]] ? 'false' : inputs_data[item[0]].disabled"
                                :required="'requerido' in inputs_data[item[0]] ? 'false' : inputs_data[item[0]].requerido"
                                :pattern="inputs_data[item[0]].pattern || '.*'">
                            <select v-if="inputs_data[item[0]].elemento == 'select'"
                                :disabled="'disabled' in inputs_data[item[0]] ? 'false' : inputs_data[item[0]].disabled">
                                >
                                <option v-for="(option, index) in inputs_data[item[0]].options" :key="`option_${index}`"
                                    :value="option.value">{{ option.text }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <CamposUsu v-if="false" v-model:dadosUsu="dadosCadastrais" :usuarioId="usuarioId"
                        @retornarDadosUsu="armazenarDadosUsu" :podeEditarProp="podeEditar" />
                    <ModalEndereco v-if="false" />
                    <!-- <div class="tagsEspecificasEnderecos">
                        <BtnDefault :value="'Ver endereços ->'" v-show="!exibirEnderecos" @click="trocarCampos" />
                    </div> -->
                </div>
                <div class="opcoesCard">
                    <BtnDefault :value="'<- Dados Cadastrais'" v-show="exibirEnderecos" @click="trocarCampos" />
                    <div>
                        <BtnDefault :value="valueBtnCancelar" @click="ocultarForm" />
                        <BtnDefault :type="'submit'" v-show="podeEditar" :value="'Registrar'" :preenchido="true" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import CamposUsu from "../base/CamposUsu.vue";
import BtnDefault from "../base/BtnDefault.vue"
import { removerAtributosVazios } from '../../../utils/funcsGerais'
import MensagemAviso from '../base/MensagemAviso.vue';
import ModalEndereco from "./ModalEndereco.vue";
import { requisicao } from "../../../utils/funcsGerais";
export default {
    name: 'CardFormCadastroCrud',
    data() {
        return {
            token_jwt: "",
            usuario: {
                nomeUsu: "Nome do Usuário",
                telefoneUsu: "11",
                cpf: "11",
                statusAtivo: true,
                tipoUsuarioId: 2
            },

            inputs_data: {
                nomeUsu: {
                    spanText: 'nome',
                    placeholder: 'Digite seu nome',
                    value: '',
                },
                telefoneUsu: {
                    spanText: 'telefone',
                    placeholder: 'Digite seu telefone',
                    value: '',
                    type: 'number',
                    requerido: true,
                    pattern: '.*',
                },
                cpf: {
                    spanText: 'CPF',
                    placeholder: 'Digite seu CPF',
                    value: '',
                    type: 'text',
                    requerido: true,
                },
                statusAtivo: {
                    spanText: 'Status',
                    options: [
                        {
                            value: '',
                            text: 'Selecione'
                        },
                        {
                            value: true,
                            text: 'Ativo'
                        },
                        {
                            value: false,
                            text: 'Inativo'
                        },
                    ],
                    elemento: 'select'
                },
                tipoUsuarioId: {
                    spanText: 'Tipo Usuario',
                    options: [
                        {
                            value: '',
                            text: 'Selecione'
                        },
                        {
                            value: 1,
                            text: 'Admin'
                        },
                        {
                            value: 2,
                            text: 'Comprador'
                        },
                        {
                            value: 3,
                            text: 'Entregador'
                        },
                    ],
                    elemento: 'select'
                },
            },
            exibirEnderecos: false,
            aviso: {
                titulo: '',
                msgs: []
            },
            dadosRecebidos: false,
            dadosCadastrais: null,
            foraCardForm: 'foraCardForm',
            podeEditar: true,
            valueBtnCancelar: 'Cancelar'
        }
    },
    components: {
        CamposUsu,
        BtnDefault,
        MensagemAviso,
        ModalEndereco
    },
    props: {
        acao: String,
        usuarioId: Number
    },
    methods: {
        requisicao,
        removerAtributosVazios,
        async enviarForm() {
            let body = this.dadosCadastrais
            let acoes = {
                'criar': {
                    'url': 'https://backendhifood-production.up.railway.app/usuarios/criar',
                    'method': 'POST'
                },
                'editar': {
                    'url': `https://backendhifood-production.up.railway.app/usuarios/editar/${this.usuarioId}`,
                    'method': 'PUT'
                }
            }
            this.dadosCadastrais = await this.requisicao(acoes[this.acao][`url`], acoes[this.acao][`method`], this.token_jwt, body)
            this.$emit('enviarForm')
            this.ocultarForm()

            // this.msg = response
            // this.aviso.titulo = error.response.data.message
            // this.aviso.msgs = error.response.data.errors
        },
        async puxarDadosUsuario() {
            this.dadosCadastrais = await this.requisicao(`https://backendhifood-production.up.railway.app/usuarios/ler/${this.usuarioId}`, "GET", this.token_jwt)
        },
        armazenarDadosUsu(dados) {
            this.dadosCadastrais = dados
        },
        ocultarForm() {
            this.$emit('ocultarForm', false)
        },
        trocarCampos() {
            this.exibirEnderecos = this.exibirEnderecos == true ? false : true
            this.corrigirJustifySubmitForm(this.exibirEnderecos)
        },
        corrigirJustifySubmitForm(booleano) {
            if (booleano) {
                document.querySelector('.opcoesCard div').style.justifyContent = 'flex-end'
            } else {
                document.querySelector('.opcoesCard div').style.justifyContent = 'space-between'
            }
        },
        limparAviso() {
            this.aviso = {

            }
        }
    },
    async mounted() {
        this.token_jwt = localStorage.getItem('tokenJWT')
        if (this.acao == 'exibir') {
            this.podeEditar = false
            this.valueBtnCancelar = 'Voltar'
        }
        await this.puxarDadosUsuario()
    },
    created() {
        // console.table(this.inputs_data[0])
    },
    watch: {
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
        exibirAviso() {
            return this.aviso.msgs.length > 0
        }
    }
}
</script>

<style scoped>
.foraCardForm {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.509);
    width: 100vw;
    height: 100vh;
    z-index: 1
}

.CardFormCadastro {
    max-width: 40vw;
    max-height: 70vh;
    min-width: fit-content;
    min-height: fit-content;
    height: 80vh;
    padding: 3% 5%;
    border: 1px solid #ccc;
    border-radius: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
}

.CardFormCadastro h2 {
    margin: 0px 0px 5% 0px;
    color: #3c3b4c;
}

.CardFormCadastro hr {
    border: 1px solid rgb(225, 225, 225);
    width: 50%;
}

.formUsuario {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 65vh;
}

.inputs_card {
    display: flex;
    flex-direction: column;
    width: 18vw;
}

.inputs_card select {
    padding: 3%;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 20px;
    width: 100%;
    font-size: 0.8rem;
}

.inputs_card select[disabled] {
    color: #000000;
}

.inputs_card span {
    margin-left: 8%;
    margin-bottom: -5px;
    z-index: 1;
    background-color: white;
    border-radius: 10px;
    color: rgb(152, 152, 152);
    padding: 0px 3%;
    width: 5%;
    min-width: fit-content;
    font-size: 0.6rem;
}

.inputs_card input::placeholder {
    color: lightgray;
    font-size: 0.8rem;
}

.inputs_card input {
    padding: 2% 3%;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 20px;
    font-size: 0.8rem
}

#camposForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
    justify-content: center;
}

.tagsEspecificasEnderecos {
    display: flex;
    justify-content: left;
    width: 100%;
}

.opcoesCard {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.opcoesCard div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 5%
}
</style>