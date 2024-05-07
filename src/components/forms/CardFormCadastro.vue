<template>
    <MensagemAviso @click.stop v-if="exibirAviso" :avisosProp="aviso.msgs" />
    <div class="quadro-branco-principal">
        <p id="cadastrar"> Cadastre-se </p>
        <input v-model="nomeUsu" id="dados" class="nome-completo" type="text" placeholder="Nome completo">
        <input v-model="cpf" id="dados" class="cpf" type="text" placeholder="CPF" maxlength="11">
        <input v-model="telefoneUsu" id="dados" type="text" placeholder="(__) ____-____" maxlength="11">
        <p>Concordo com os <span class="destaque">Termos de uso</span> e a <span class="destaque">Politica de
                Privacidade</span></p>
        <button class="cadastrar" @click="criarUsuario">Cadastrar</button>
        <p>Já tem conta? <router-link to="/paginaLogin"><span class="destaque">Entrar</span></router-link></p>


    </div>
</template>
<script>
import axios from 'axios';
// import PaginaLogin from '@/views/PaginaLogin.vue';
import MensagemAviso from '@/components/base/MensagemAviso.vue';
export default {
    name: 'CardFormCadastro',
    data() {
        return {
            nomeUsu: "",
            cpf: "",
            telefoneUsu: "",
            aviso: {
                titulo: '',
                msgs: []
            },
        }
    },
    components: {
        MensagemAviso
    },
    methods: {
        criarUsuario() {
            let data = {
                'nomeUsu': this.nomeUsu,
                'cpf': this.cpf,
                'telefoneUsu': '55'+this.telefoneUsu,
            }
            axios.post("https://backendhifood-production.up.railway.app/usuarios/criar", data)
                .then(response => {
                    this.msgs = response.data.mensagem
                    this.titulo = response.data.titulo
                    this.$router.push('/PaginaLogin')
                })
                .catch(error => {
                    this.aviso.titulo = error.response.data.message
                    this.aviso.msgs = error.response.data.errors
                });
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
        exibirAviso() {
            return this.aviso.msgs.length > 0
        }
    }
}
</script>
<style scoped>
.quadro-branco-principal {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 500px;
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;

}

#cadastrar {
    font-size: 30px;
    margin: 0;

}

.cadastrar {
    display: flex;
    padding: 18px 90px;
    border: none;
    border-radius: 5px;
    background-color: #ea1d2c;
    color: white;

}

.cadastrar:hover {
    background-color: rgb(230, 73, 73);
    color: white
}

#dados {
    display: flex;
    padding: 15px 80px;
    padding-left: 10px;
    border: 1px solid #595756;
    color: #595756;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 18px;

}

.destaque {
    color: red;
}
</style>