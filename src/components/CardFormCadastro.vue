<template>
    <div class="cardUsu">
        <h2>Dados do Usuário</h2>
        <hr>
        <form @submit.prevent="salvarDados" method="post" class="formUsuario">
            <div id="camposForm">

                <CamposUsu v-show="!exibirEnderecos" />
                <CamposEnderecos v-show="exibirEnderecos" />
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
import CamposEnderecos from "./CamposEnderecos.vue";
import BtnDefault from "./BtnDefault.vue"
export default {
    name: 'CardUsu',
    data() {
        return {
            usuario: {
                nomeUsu: null,
                telefoneUsu: null,
                cpf: '',
                emailUsu: '',
                statusAtivo: true,
                tipoUsuarioId: 0
            },
            endereco: {
                logradouro: '',
                cep: '',
                bairro: null,
                cidade: null,
                estado: null,
                numero: null,
                complemento: null
            },
            enderecoEntrega: {
                enderecoId: '',
                usuarioId: ''
            },
            exibirEnderecos: false
        }
    },
    components: {
        CamposUsu,
        CamposEnderecos,
        BtnDefault
    },
    props: {
        acao: String,
        usuarioId: Number,
        enderecoId: Number,
        enderecoEntregaId: Number
    },
    methods: {
        salvarDados() {
            switch (this.acao) {
                case 'editar':
                    this.editarUsuario()
                    break;
                case 'criar':
                    this.criarUsuario()
                    break;
                case 'inativar':
                    this.invativarUsuario()
                    break;

                default:
                    break;
            }
        },
        criarUsuario() {
            // if "-" in this.usuario.cep:
            //     this.usuario.cep = this.usuario.cep.replace("-", "")
            let body = {
                'usuario': this.usuario,
                'endereco': this.endereco
            }

            let headers = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios
                .post("http://localhost:8000/usuarios/criar/completo", body, headers)
                .then((response) => {
                    this.msg = response
                    this.$emit('enviarForm')
                })
                .catch((error) => (this.msg = error.response));
        },
        editarUsuario() {
            // this.usuarioId ? this.usuario.usuarioId = this.usuarioId : () => { }
            let usuario = this.usuario;
            let endereco = this.endereco
            let body = {
                'usuario': usuario,
                'endereco': endereco
            }
            console.log('usuario', JSON.stringify(body))
            let headers = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios
                .put(`http://localhost:8000/usuarios/editar/${this.usuarioId}`, body, headers)
                .then((response) => {
                    this.msg = response
                    this.$emit('enviarForm', 'dados')
                })
                .catch((error) => (this.msg = error.response));
        },
        invativarUsuario() {

        },
        autoPreencher() {
            alert(this.usuarioId)
            axios
                .get(`http://localhost:8000/usuarios/ler/${this.usuarioId}`)
                .then((response) => {
                    this.endereco = response.data.endereco
                    this.usuario = response.data.usuario
                    alert(this.usuario, this.endereco);
                })
                .catch((error) => (this.msg = error.response));
        },
        mudouStatus(option) {
            this.usuario.statusAtivo = option
        },
        mudouTipoUsuario(option) {
            this.usuario.tipoUsuarioId = option
        },
        cancelar() {
            this.$emit('cancelar')
        },
        trocarCampos() {
            this.exibirEnderecos = this.exibirEnderecos == true ? false : true
            this.corrigirJustifySubmitForm()
        },
        corrigirJustifySubmitForm() {
            document.querySelector('.opcoesCard div').style.justifyContent = 'flex-end'
        }
    },
    created() {
        this.acao == 'editar' ? this.autoPreencher() : () => { }
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