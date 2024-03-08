<template>
    <div class="cardUsu">
        <h2>Dados do Usuário</h2>
        <hr>
        <form @submit.prevent="enviarForm" method="post" class="formUsuario">
            <div id="camposForm">
                <div class="dadosGerais">
                    <div>
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" v-model="usuario.nome" placeholder="Digite seu nome">
                    </div>
                    <div>
                        <label for="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone" v-model="usuario.telefone"
                            placeholder="Digite seu telefone">
                    </div>
                    <div>
                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" v-model="usuario.cpf" placeholder="Digite seu CPF">
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" v-model="usuario.email"
                            placeholder="Digite seu email">
                    </div>
                    <div>
                        <label for="status">Status</label>
                        <input type="text" id="status" name="status" v-model="usuario.status"
                            placeholder="Digite seu status">
                    </div>
                    <div>
                        <label for="nome">Tipo Conta</label>
                        <input type="text" id="tipoConta" name="tipoConta" v-model="usuario.tipoConta"
                            placeholder="Digite seu nome">
                    </div>
                </div>
                <div class="dadosEndereco">
                    <div>
                        <label for="logradouro">Logradouro</label>
                        <input type="text" id="logradouro" name="logradouro" v-model="usuario.logradouro"
                            placeholder="Digite seu logradouro">
                    </div>
                    <div>
                        <label for="cep">CEP</label>
                        <input type="text" id="cep" name="cep" v-model="usuario.cep" placeholder="Digite seu CPF">
                    </div>
                    <div>
                        <label for="bairro">Bairro</label>
                        <input type="text" id="bairro" name="bairro" v-model="usuario.bairro"
                            placeholder="Digite seu bairro">
                    </div>
                    <div>
                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade" name="cidade" v-model="usuario.cidade"
                            placeholder="Digite sua cidade">
                    </div>
                    <div>
                        <label for="estado">Estado</label>
                        <input type="text" id="estado" name="estado" v-model="usuario.estado"
                            placeholder="Digite seu estado">
                    </div>
                    <div>
                        <label for="numero">Numero</label>
                        <input type="text" id="numero" name="numero" v-model="usuario.numero"
                            placeholder="Digite seu numero">
                    </div>
                    <div>
                        <label for="complemento">Complemento</label>
                        <input type="text" id="complemento" name="complemento" v-model="usuario.complemento"
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
                nome: '',
                telefone: '',
                cpf: '',
                email: '',
                status: '',
                tipoConta: '',
                logradouro: '',
                cep: '',
                bairro: '',
                cidade: '',
                estado: '',
                numero: '',
                complemento: ''
            }
        }
    },
    methods: {
        adaptObjQuote(obj) {
            const newObj = {};
            for (const key in obj) {
                newObj[`${key}`] = obj[key];
            }
            return newObj;
        },
        enviarForm() {
            // console.log('this.usuario:',this.usuario);
            // console.log('Dados do formulário:', JSON.stringify(this.Usuario));
            let body = this.adaptObjQuote(this.usuario);
            console.log('body',JSON.stringify(body))
            
            // let body = this.usuario;
            // let body = {
            //     "nomeUsu": "CCC",
            //     "telefoneUsu": "00000000000",
            //     "cpf": "99999999999",
            //     "emailUsu": "crud@example.com",
            //     "imagemPerfil": "base64_encoded_image_data_here",
            //     "senha": "senha_segura",
            //     "contaBancariaId": 0,
            //     "tipoUsuarioId": 0,
            //     "enderecoId": 0
            // }
            let headers = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            this.$emit('enviarForm', 'dados')
            axios
                .post("http://localhost:8000/usuarios/criar", body, headers)
                .then((response) => {
                    this.msg = response
                    setTimeout(() => {
                        // this.$router.push("/pagLabs");
                    }, 1500);

                    // this.$router.push('/cadastro');
                    // token = response.data.token_jwt
                })
                .catch((error) => (this.msg = error.response));
        },
        cancelar() {
            this.$emit('cancelar')
        }
    }
}
</script>

<style scoped>
.cardUsu {
    max-width: 40vw;
    max-height: 70vh;
    width: 40vw;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: white;
}

.cardUsu h2 {
    margin: 2% 0px;
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
    align-items: flex-start;
}

#camposForm label {
    margin-left: 8%;
    margin-bottom: -5px;
    z-index: 1;
    background-color: white;
    border-radius: 10px;
    color: gray;
    padding: 0px 3%;
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

/* .dadosGerais {}

.dadosEndereco {} */

input[type="text"],
input[type="email"],
input[type="text"] {
    padding: 3%;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 20px;
}

input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
}

input[type='button'] {
    background-color: #fff;
    color: #007bff;
    border: 1px solid #007bff;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;

}
</style>