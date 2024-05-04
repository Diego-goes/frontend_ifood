<template>
  <div class="CardValidarCelular">
    <main class="informe-numero">
      <p>Informe o número do seu celular para continuar</p>
      <p class="como-receber-codigo">Como deseja receber seu código?</p>
    </main>

    <div class="inputsCod">
      <label for="primeiroInputCod">
        <input v-for="i in codVerifArr.length" :key="i - 1" v-model="codVerifArr[i - 1]"
          @input="() => { formatarCod(i - 1); autoTab(i - 1); }" placeholder="0" type="number" min="0" max="9">
      </label>

      <input type="button" @click="()=>{juntarCodVerif();enviarCodVerif();}" value=" Continuar">
      <input type="button" @click="irParaEnvioCelular" value=" Não recebi meu código">
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import {puxarDados} from '../../../utils/funcsGerais'
export default {
  name: "CardValidarCelular",
  data() {
    return {
      token_jwt: '',
      codVerifArr: [null, null, null, null, null, null],
      codVerif: "",
      telefoneUsu: this.telefoneUsuProps
    }
  },
  props: {
    telefoneUsuProps: {
      default: '',
      type: String
    }
  },
  methods: {
    puxarDados,
    juntarCodVerif() {
      this.codVerif = this.codVerifArr.join('')
    },
    enviarCodVerif() {
      let body = {
        'telefoneUsu': `55${this.telefoneUsu}`,
        'codVerif': `${this.codVerif}`
      }
      axios({
        method: "POST",
        url: "https://backendhifood-production.up.railway.app/login",
        data: body,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.token_jwt = response.data.token_jwt
        this.armazenarTokenJWT(response.data.token_jwt)
        this.irParaTelaInicial()
        // this.armazenarDadosUsu()
      }).catch((error) => {
        alert(error.response.data.mensagem)
      });
    },
    armazenarTokenJWT(token) {
      localStorage.setItem('tokenJWT', token)
    },
    irParaTelaInicial() {
      this.$emit('irParaTelaInicial')
    },
    irParaEnvioCelular() {
      this.$emit('irParaEnvioCelular')
    },
    autoTab(i) {

      // Auto dar tab
      if (i + 1 < this.allInputs.length) {
        this.allInputs[i + 1].focus()
      } else {
        this.enviarCodVerif()
      }
    },
    formatarCod(i) {
      let input = this.allInputs[i]
      // Permitir apenas um digito
      this.codVerifArr[i] = input.value[0]
      // Juntar código em string
      this.codVerif = this.codVerifArr.join('')
    },
    
  //   async armazenarDadosUsu() {
  //   // console.log("Tokem:", this.token_jwt)
  //   // const IdUsu = 5511954487458
  //   // await this.puxarDados("https://backendhifood-production.up.railway.app/usuarios/ler/telefone/" +IdUsu, 'GET' ,this.token_jwt)
  //   // console.log("Tokem:", this.token_jwt)
  //   // if (this.token_jwt == "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI0IiwidGVsZWZvbmVVc3UiOiI1NTExOTU0NDg3NDU4Iiwibm9tZVVzdSI6IkpvXHUwMGUzb0NpbmNvIiwidGlwb1VzdWFyaW9JZCI6IjIiLCJleHAiOjE3MTUzODYzNzF9.CMedjCSEJDz16DUFsYj4rCO8tkN9desi53dnZTsxhgk") {
  //   //   console.log("Deu certo")
  //   // } else {
  //   //   console.log("Deu ruim")
  //   // }
    
  // }
  },
  computed: {
    allInputs() {
      return document.querySelectorAll("input[type='number']")
    }
  }
}
</script>
<style scoped>
.inputsCod label input {
  width: 3%;
  text-align: center;
  max-width: fit-content;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
