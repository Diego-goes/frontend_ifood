<template>
    <div class="cardUsu" v-if="exibirCardFormCadastro">
        <h2>Dados do Usuário</h2>
        <hr>
        <form @submit.prevent="enviarForm" method="post" class="formUsuario">
            <div id="camposForm">

                <CamposUsu v-if="dadosRecebidos && dadosCadastrais.usuario" v-show="!exibirEnderecos"
                    :dadosCadastrais="dadosCadastrais" :usuarioId="usuarioId" />
                <!-- <CamposEnderecos v-show="exibirEnderecos" :dadosEnderecos="dadosCadastrais.enderecos" /> -->
                <div class="tagsEspecificasEnderecos">
                    <BtnDefault :value="'Ver endereços ->'" v-show="!exibirEnderecos" @click="trocarCampos" />
                </div>
            </div>
            <div class="opcoesCard">
                <BtnDefault :value="'<- Meus dados'" v-show="exibirEnderecos" @click="trocarCampos" />
                <div>
                    <BtnDefault :value="'Cancelar'" @click="cancelar" />
                    <BtnDefault :type="'submit'" :value="'Registrar'" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import CamposUsu from "./CamposUsu.vue";
// import CamposEnderecos from "./CamposEnderecos.vue";
import BtnDefault from "./BtnDefault.vue"
export default {
    name: 'CardUsu',
    data() {
        return {
            exibirEnderecos: false,
            msg: '',
            dadosRecebidos: false,
            dadosCadastrais: {},
            exibirCardFormCadastro: true
        }
    },
    components: {
        CamposUsu,
        // CamposEnderecos,
        BtnDefault
    },
    props: {
        acao: String,
        usuarioId: Number
    },
    methods: {
        enviarForm() {
            let body = {
                'usuario': this.dadosCadastrais.usuario,
                'enderecos': this.dadosCadastrais.enderecos
            }

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
                // alert(Object.values(response))
            }).catch((error) => (this.msg = error.response));
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
        cancelar() {
            this.exibirCardFormCadastro = false

        },
        trocarCampos() {
            this.exibirEnderecos = this.exibirEnderecos == true ? false : true
            this.corrigirJustifySubmitForm()
        },
        corrigirJustifySubmitForm() {
            document.querySelector('.opcoesCard div').style.justifyContent = 'flex-end'
        },
    },
    created() {
        this.puxarDados()
    }
}
</script>

<style scoped>
.cardUsu {
    max-width: 40vw;
    max-height: 70vh;
    min-width: min-content;
    min-height: min-content;
    height: 80vh;
    padding: 3% 5%;
    border: 1px solid #ccc;
    border-radius: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: white;
}

.cardUsu h2 {
    margin: 2% 0px;
    color: #3c3b4c;
}

.cardUsu hr {
    border: 1px solid rgb(225, 225, 225);
    width: 50%;
}

.formUsuario {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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