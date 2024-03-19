<template>
    <div class="cardUsu">
        <h2>Dados do Usuário</h2>
        <hr>
        <form @submit.prevent="salvarDados" method="post" class="formUsuario">
            <div id="camposForm">
                <div class="dadosGerais">
                    <div>
                        <label for="nomeUsu">Nome</label>
                        <input type="text" id="nomeUsu" name="nomeUsu" v-model="usuario.nomeUsu"
                            placeholder="Digite seu nome">
                    </div>
                    <div>
                        <label for="telefoneUsu">Telefone</label>
                        <input type="text" id="telefoneUsu" name="telefoneUsu" v-model="usuario.telefoneUsu"
                            placeholder="Digite seu telefone" maxlength="14">
                    </div>
                    <div>
                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" v-model="usuario.cpf" placeholder="Digite seu CPF"
                            maxlength="11" required>
                    </div>
                    <div>
                        <label for="emailUsu">Email</label>
                        <input type="email" id="emailUsu" name="emailUsu" v-model="usuario.emailUsu"
                            placeholder="Digite seu email" required>
                    </div>
                    <div>
                        <label for="statusAtivo">Status Ativo</label>
                        <select v-model="usuario.statusAtivo" name="statusAtivo" id="statusAtivo"
                            @click="mudouStatus($event.target.value)">
                            <option value="true">Selecione</option>
                            <option value="true">Ativo</option>
                            <option value="false">Inativo</option>
                        </select>
                    </div>
                    <div>
                        <label for="tipoContaId">Tipo Conta</label>
                        <select v-model="usuario.tipoUsuarioId" name="tipoContaId" id="tipoContaId"
                            @click="mudouTipoUsuario($event.target.value)">
                            <option value="0">Selecione</option>
                            <option value="0">Comprador</option>
                            <option value="1">Entregador</option>
                        </select>
                    </div>
                </div>
                <div class="dadosEndereco">
                    <div>
                        <label for="logradouro">Logradouro</label>
                        <input type="text" id="logradouro" name="logradouro" v-model="endereco.logradouro"
                            placeholder="Digite seu logradouro" required>
                    </div>
                    <div>
                        <label for="cep">CEP</label>
                        <input type="text" id="cep" name="cep" v-model="endereco.cep" placeholder="Digite seu CEP"
                            required>
                    </div>
                    <div>
                        <label for="bairro">Bairro</label>
                        <input type="text" id="bairro" name="bairro" v-model="endereco.bairro"
                            placeholder="Digite seu bairro">
                    </div>
                    <div>
                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade" name="cidade" v-model="endereco.cidade"
                            placeholder="Digite sua cidade">
                    </div>
                    <div>
                        <label for="estado">Estado</label>
                        <input type="text" id="estado" name="estado" v-model="endereco.estado"
                            placeholder="Digite seu estado">
                    </div>
                    <div>
                        <label for="numero">Numero</label>
                        <input type="number" id="numero" name="numero" v-model="endereco.numero"
                            placeholder="Digite seu numero" required>
                    </div>
                    <div>
                        <label for="complemento">Complemento</label>
                        <input type="text" id="complemento" name="complemento" v-model="endereco.complemento"
                            placeholder="Digite seu complemento">
                    </div>
                </div>
            </div>
            <div class="opcoesCard">
                <input type="button" @click="cancelar" value="Cancelar">
                <input type="submit" value="Registrar">
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
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
.cardUsu {
    max-width: 40vw;
    max-height: 70vh;
    width: 40vw;
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

}

#camposForm {
    display: flex;
    gap: 5%;
    justify-content: center;
    font-size: 70%;
}

#camposForm div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

#camposForm label {
    margin-left: 8%;
    margin-bottom: -5px;
    z-index: 1;
    background-color: white;
    border-radius: 10px;
    color: gray;
    padding: 0px 3%;
    width: fit-content;
}

#camposForm input::placeholder {
    color: lightgray;
    font-size: 80%;
}

.opcoesCard {
    display: flex;
    gap: 15%;
    justify-content: center;
}

input[type="text"],
input[type="email"],
input[type="number"],
select {
    padding: 3%;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 20px;
    width: 100%;
}

input[type="submit"] {
    background-color: #ce2020;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
}

input[type='button'] {
    background-color: #fff;
    color: #ce2020;
    border: 1px solid #ce2020;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
}
</style>