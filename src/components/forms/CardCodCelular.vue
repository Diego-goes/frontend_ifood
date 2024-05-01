<template>
    <div class="CardCodTelefone">
        <main class="informe-numero">
            <p>Informe o número do seu celular para continuar</p>
            <p class="como-receber-codigo">Como deseja receber seu código?</p>
        </main>

        <label for="BandeiraBrasil">
            <p class="ddd"> +55 </p>
            <img src="../../assets/BandeiraBrasil_2.png" alt="Imagem" class="bandeira">
        </label>
            
        <input class="informe-numero-celular" type="text" v-model="telefoneUsu"
            placeholder="Informe o seu número de celular" @keyup.enter="solicitarCodCelular" @input="bloquearCaracter">
        <input name="btnWhatsApp" @click="solicitarCodCelular" class="WhatsApp" type="button" value=" WhatsApp">
        <div class="cadastro-link">
            <p>Não Possui Cadastro? <router-link to="/paginaCadastro"><span class="destaque">Aqui</span></router-link></p>
            
        </div>
        <router-link to="/">
            <img src="../../assets/SetaVermelha.png" @click="irParaFormasLogin" alt="seta" class="SetaVermelha">
        </router-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "CardCodTelefone",
    data() {
        return {
            telefoneUsu: ""
        }
    },
    methods: {
        irParaCadastro() {
            this.$emit('irParaCadastro')
        },
        bloquearCaracter(event) {
            const inputValue = event.target.value;
            // Remove caracteres não numéricos
            const numericValue = inputValue.replace(/\D/g, '');
            // Limita o comprimento para 11 caracteres
            const limitedValue = numericValue.slice(0, 11);
            // Atualiza o valor do campo de entrada
            event.target.value = limitedValue;
        },
        irParaFormasLogin() {
            this.$emit('irParaFormasLogin')
        },
        irParaValidarCelular() {
            this.$emit('irParaValidarCelular', `${this.telefoneUsu}`)
        },
        solicitarCodCelular() {
            let body = {
                'telefoneUsu': `55${this.telefoneUsu}`
            }
            axios({
                method: "POST",
                url: "https://backendhifood-production.up.railway.app/codVerif",
                data: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                this.irParaValidarCelular()
            }).catch((error) => {
                alert(error.response.data.mensagem)
            });
        }
    }
}
</script>
<style scoped>
.CardCodTelefone {
    height: 100vh;
    box-sizing: border-box;
    background-color: white;
    color: black;
    background-image: url('../../assets/FundoTelap1.png');
}

#imagem-principal {
    width: 120px;
    height: auto;
    margin-left: 50px;
    position: fixed;
    top: 30px;

}

img {
    width: 540px;
    height: auto;
    top: 110px;
    position: fixed;
    margin-left: 80px;

}

#quadro-branco {
    width: 490px;
    top: 140px;
    right: 40px;
    transform: translate(0, 0);
    box-shadow: 0 4px 8px rgba(7, 7, 7, 0.2);

}

.informe-numero {
    position: fixed;
    top: 200px;
    right: 95px;
    transform: translate(0, 0);
    text-align: center;
    color: #717171;
    font-size: 18px;
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;

}

.bandeira {
    width: 25px;
    height: auto;
    vertical-align: middle;
    top: 277px;
    right: 458px;
}

.ddd {
    border: solid 1px;
    background-color: rgba(0, 0, 0, 0.05);
    text-align: right;
    font-size: 16px;
    border-radius: 3px;
    border: rgba(0, 0, 0, 0.05);
    width: 50px;
    padding: 15px 17px;
    position: fixed;
    top: 245px;
    right: 410px;

}

.informe-numero-celular {
    text-align: left;
    font-size: 16px;
    border-radius: 2.5px;
    width: 280px;
    padding: 15px 20px;
    position: fixed;
    top: 260px;
    right: 80px;
    border: solid 1.5px rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.4);

}

.como-receber-codigo {
    position: fixed;
    top: 120px;
    right: 70px;
    transform: translate(0, 0);
    text-align: center;
    color: #717171;
    font-size: 17px;
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;

}

.WhatsApp {
    background-color: #ea1d2c;
    color: white;
    padding: 15px 25px;
    text-align: center;
    font-size: 16px;
    border-radius: 3px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    width: 400px;
    position: fixed;
    top: 380px;
    right: 86px;
}

.WhatsApp:hover {
    background-color: rgb(230, 73, 73);
    color: white
}

.SetaVermelha {
    width: 15px;
    border-radius: 1px;
    right: 490px;
    top: 175px;
}

.cadastro-link{
    position: fixed;
    top: 440px;
    right: 90px;
    text-align: center;
    font-size: 15px;
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
    color: #717171;
}
.cadastro-link a{
    color:red;
    cursor: pointer;
}


</style>
