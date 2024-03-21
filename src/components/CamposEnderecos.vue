<template>
    <div class="dadosEndereco">
        <div class="tagsEspecificasEnderecos">
            <select name="selectEnderecos" id="selectEndereco">
                <option value="">Endereços</option>
                <option value="">Apelido1</option>
                <option value="">Apelido2</option>
            </select>
        </div>
        <div class="camposEnderecos">
            <InputForm :type="'text'" :spanText="'Logradouro'" :value="endereco.logradouro"
                :placeholder="'Digite seu logradouro'" />
            <InputForm :type="'text'" :spanText="'CEP'" :value="endereco.cep" :placeholder="'Digite seu CEP'" />
            <InputForm :type="'text'" :spanText="'Bairro'" :value="endereco.bairro"
                :placeholder="'Digite seu bairro'" />
            <InputForm :type="'text'" :spanText="'Cidade'" :value="endereco.cidade"
                :placeholder="'Digite sua cidade'" />
            <InputForm :type="'text'" :spanText="'Estado'" :value="endereco.estado"
                :placeholder="'Digite seu estado'" />
            <InputForm :type="'number'" :spanText="'Numero'" :value="endereco.numero"
                :placeholder="'Digite seu numero'" />
            <InputForm :type="'text'" :spanText="'Complemento'" :value="endereco.complemento"
                :placeholder="'Digite seu complemento'" />
            <InputForm :type="'text'" :spanText="'Apelido'" :value="endereco.complemento"
                :placeholder="'Digite o apelido'" />
            <InputForm :type="'text'" :spanText="'Ponto de Referência'" :value="endereco.complemento"
                :placeholder="'Digite uma referência'" />
            <InputForm :type="'text'" :spanText="'Coordenadas'" :value="endereco.complemento"
                :placeholder="'Digite as coordenadas'" />
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