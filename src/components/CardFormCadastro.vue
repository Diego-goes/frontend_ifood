<template>
    <div :class="foraCardForm" @click="ocultarForm">
        <MensagemAviso @click.stop v-if="exibirAviso" :avisosProp="aviso.msgs" />
        <div class="CardFormCadastro" @click.stop>
            <h2>Dados do Usuário</h2>
            <form @submit.prevent="enviarForm" method="post" class="formUsuario">
                <div id="camposForm">
                    <CamposUsu v-if="prontoParaExibir && !exibirEnderecos" :dadosUsu="dadosCadastrais.usuario"
                        :usuarioId="usuarioId" @retornarDadosUsu="armazenarDadosUsu" :podeEditarProp="podeEditar" />

                    <CamposEnderecos v-if="prontoParaExibir && exibirEnderecos" :dadosEnderecos="dadosEnderecos"
                        @retornarDadosEnds="armazenarDadosEnds" :podeEditarProp="podeEditar" />
                    <div class="tagsEspecificasEnderecos">
                        <BtnDefault :value="'Ver endereços ->'" v-show="!exibirEnderecos" @click="trocarCampos" />
                    </div>
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
import axios from "axios";
import CamposUsu from "./CamposUsu.vue";
import CamposEnderecos from "./CamposEnderecos.vue";
import BtnDefault from "./BtnDefault.vue"
import { removerAtributosVazios } from '../../utils/funcsGerais.js'
import MensagemAviso from './MensagemAviso.vue'
export default {
    name: 'CardFormCadastro',
    data() {
        return {
            exibirEnderecos: false,
            aviso: {
                titulo: '',
                msgs: []
            },
            dadosRecebidos: false,
            dadosCadastrais: {},
            foraCardForm: 'foraCardForm',
            podeEditar: true,
            valueBtnCancelar: 'Cancelar'
        }
    },
    components: {
        CamposUsu,
        CamposEnderecos,
        BtnDefault,
        MensagemAviso
    },
    props: {
        acao: String,
        usuarioId: Number
    },
    methods: {
        removerAtributosVazios,
        enviarForm() {
            let body = this.removerAtributosVazios({
                'usuario': this.dadosCadastrais.usuario,
                'enderecos': this.dadosCadastrais.enderecos
            })
            let headers = {
                'Content-Type': 'application/json'
            }
            let acoes = {
                'criar': {
                    'url': 'http://localhost:8000/usuarios/criar/completo',
                    'method': 'POST'
                },
                'editar': {
                    'url': `http://localhost:8000/usuarios/editar/${this.usuarioId}`,
                    'method': 'PUT'
                }
            }
            axios({
                method: acoes[this.acao][`method`],
                url: acoes[this.acao][`url`],
                data: body,
                headers
            }).then((response) => {
                this.msg = response
                this.$emit('enviarForm')
                this.ocultarForm()
            }).catch((error) => {
                this.aviso.titulo = error.response.data.message
                this.aviso.msgs = error.response.data.errors
                console.log(this.aviso)
            });
        },
        puxarDados() {
            axios
                .get(`http://localhost:8000/usuarios/ler/${this.usuarioId}`)
                .then((response) => {
                    this.dadosCadastrais = response.data
                    this.dadosRecebidos = Object.keys(this.dadosCadastrais).length > 0 ? true : false

                })
                .catch((error) => (this.msg = error.response));
        },
        armazenarDadosUsu(dados) {
            this.dadosCadastrais.usuario = dados
        },
        armazenarDadosEnds(dados) {
            this.dadosCadastrais.enderecos = dados
        },
        ocultarForm() {
            this.$emit('ocultarForm', false)
        },
        trocarCampos() {
            this.exibirEnderecos = this.exibirEnderecos == true ? false : true
            this.corrigirJustifySubmitForm(this.exibirEnderecos)
        },
        corrigirJustifySubmitForm(booleano) {
            if (booleano){
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
    mounted() {
        if (this.acao == 'editar') {
            this.puxarDados()
        } else if (this.acao == 'exibir') {
            this.puxarDados()
            this.podeEditar = false
            this.valueBtnCancelar = 'Voltar'
        }
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
        prontoParaExibir() {
            return this.acao == 'editar' || this.acao == 'exibir' ?
                this.dadosRecebidos && this.dadosCadastrais.usuario :
                true
        },
        exibirAviso() {
            return this.aviso.msgs.length > 0
        },
        dadosEnderecos() {
            return 'enderecos' in this.dadosCadastrais ?
                this.dadosCadastrais.enderecos : []
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