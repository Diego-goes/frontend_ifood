<template>
    <div class="dadosGerais">
        <InputForm :type="'text'" :spanText="'Nome'" :value="usuario.nomeUsu" :placeholder="'Digite seu nome'"/>
        <InputForm :type="'text'" :spanText="'Telefone'" :value="usuario.telefoneUsu" :placeholder="'Digite seu telefone'"/>
        <InputForm :type="'text'" :spanText="'CPF'" :value="usuario.cpf" :placeholder="'Digite seu CPF'"/>
        <InputForm :type="'email'" :spanText="'Email'" :value="usuario.emailUsu" :placeholder="'Digite seu email'"/>
        <div class="divsSelectsForm">
            <span for="statusAtivo">Status Ativo</span>
            <select v-model="usuario.statusAtivo" class="selectCamposForm" name="statusAtivo" id="statusAtivo"
                @click="mudouStatus($event.target.value)">
                <option value="true">Selecione</option>
                <option value="true">Ativo</option>
                <option value="false">Inativo</option>
            </select>
        </div>
        <div class="divsSelectsForm">
            <span for="tipoContaId">Tipo Conta</span>
            <select v-model="usuario.tipoUsuarioId" class="selectCamposForm" name="tipoContaId" id="tipoContaId"
                @click="mudouTipoUsuario($event.target.value)">
                <option value="0">Selecione</option>
                <option value="0">Comprador</option>
                <option value="1">Entregador</option>
            </select>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import InputForm from "./InputForm.vue";
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
            }
        }
    },
    props: {
        acao: String,
        usuarioId: Number,
        enderecoId: Number,
        enderecoEntregaId: Number
    },
    components: {
        InputForm
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
            // let body = {
            //     "usuario": {
            //         "nomeUsu": "Afonso",
            //         "telefoneUsu": "",
            //         "cpf": "5",
            //         "emailUsu": "afonso.silva49@gmail.com",
            //         "statusAtivo": "true",
            //         "tipoUsuarioId": "0"
            //     },
            //     "endereco": {
            //         "logradouro": "JAGUARE",
            //         "cep": "0",
            //         "bairro": "JAGUARE",
            //         "cidade": "São Paulo",
            //         "estado": "SP",
            //         "numero": "325",
            //         "complemento": "B5 Ap141"
            //     }
            // }
            // console.log(body1)
            // console.log(body)
            console.log('body', JSON.stringify(body))

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
            axios
                .get(`http://localhost:8000/usuarios/ler/${this.usuarioId}`)
                .then((response) => {
                    this.endereco = response.data.endereco
                    this.usuario = response.data.usuario
                    console.log(this.usuario, this.endereco);
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
    },
    created() {
        this.acao == 'editar' ? this.autoPreencher() : () => { }
    }
}
</script>

<style scoped>
.divsSelectsForm{
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