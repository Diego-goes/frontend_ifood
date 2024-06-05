<template>
  <div class="CardValidarCelular">
    <main class="informe-numero">
      <p class="confirmar-pedido">Informe o código enviado:</p>
    </main>

    <div class="inputsCod">
      <label for="primeiroInputCod">
        <input v-for="i in codVerifArr.length" :key="i - 1" v-model="codVerifArr[i - 1]"
          @input="() => { formatarCod(i - 1); autoTab(i - 1); }" placeholder="0" type="number" min="0" max="9"
          :id="`input_${i}`">
      </label>
    </div>
    <div>
      <input type="button" @click="() => { juntarCodVerif(); enviarCodVerif(); }" value=" Continuar" class="btns">
      <input type="button" @click="irParaEnvioCelular" value=" Não recebi meu código" class="btns">
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { requisicao } from '../../../utils/funcsGerais'
export default {
  name: "CardValidarCelular",
  data() {
    return {
      usuarioDados: {},
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
    requisicao: requisicao,
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
        this.armazenarTelefoneUsu(`55${this.telefoneUsu}`)
        this.armazenarTokenJWT(response.data.token_jwt)
        this.irParaTelaInicial()
      }).catch((error) => {
        alert(error.response.data.mensagem)
      });
    },
    armazenarTelefoneUsu(telefoneUsu) {
      localStorage.setItem('telefoneUsu', telefoneUsu)
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
    }
  },
  computed: {
    allInputs() {
      return document.querySelectorAll("input[type='number']")
    }
  },
  created() {
    this.$nextTick(() => {
      try {
        document.querySelector(`#input_${1}`).focus()
      } catch (error) {
        console.log(error)
      }
    })
  }
}
</script>
<style scoped>
.CardValidarCelular {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30vw;
  height: 30vh;
}

.confirmar-pedido {
  font-size: 18px;
  color: #EA1D2C;
}

.inputsCod label input {
  width: 10%;
  height: 5vh;
  margin-right: 10px;
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

.btns {
  background-color: #EA1D2C;
  color: white;
  border: none;
  margin-top: 20px;
  margin-right: 10px;
  border-radius: 3px;
  height: 5vh;

}
</style>
