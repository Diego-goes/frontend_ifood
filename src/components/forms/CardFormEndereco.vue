<!-- Outro componente onde você exibe a lista de endereços e deseja abrir o modal -->
<template>
  <div class="address-card">
    <form @submit.prevent = "submitForm">
      <!-- Botão para abrir o modal -->
      <input type="button" value="Voltar" @click="closeModal" >
      <input v-model="endereco.logradouro" placeholder="logradouro" required @change="autoPreencherPorCep" />
      <input v-model="endereco.numero" placeholder="Número" value="" required />
      <input v-model="endereco.complemento" placeholder="Complemento" />
      <input v-model.lazy="endereco.cep" @input="bloquearCaracter" placeholder="CEP" required maxlength="8" />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { requisicao } from '../../../utils/funcsGerais'
export default {
  name:'CardFormEndereco',
  data() {
    return {
      endereco: {
        "logradouro": "",
        "numero": "",
        "complemento": "",
        "cep": "",
      }
    };
  },
  methods: {
    requisicao,
    bloquearCaracter(event) {
    let inputValue = event.target.value;
    // Remove caracteres não numéricos
    let numericValue = inputValue.replace(/\D/g, '');
    // Limita o comprimento para 8 caracteres
    let limitedValue = numericValue.slice(0, 8);
    // Atualiza o valor do campo de entrada
    event.target.value = limitedValue;
    // console.log(this.endereco.cep);
    },
    closeModal() {
      this.$emit('closeModal')
    },
    async submitForm() {
      //Não está funcionando o Método POST (Verificar ROTA)
      try {
        let idUsu = localStorage.getItem('usuarioId');
        let token = localStorage.getItem('tokenJWT');
        console.log("ID Usuário", idUsu)
        // console.log("Token Usuário", token):
        const responseEndereco = await this.requisicao('https://backendhifood-production.up.railway.app/enderecos/criar', 'POST', token, this.endereco);
        const enderecoId = responseEndereco["enderecoId"]
        let data = {
          'enderecoId':enderecoId,
          'usuarioId': idUsu,
        }
        console.log("data ende", enderecoId)
        console.log("data usu", idUsu)
        const responseEnderecoEntrega = await this.requisicao('https://backendhifood-production.up.railway.app/enderecosEntrega/criar', 'POST', token, data);
        if (responseEnderecoEntrega.status === 201) {
          alert('Usuário criado com sucesso!');
        }
      } catch (error) {
        console.error(error);
      }
    },
    // puxarDadosPorCEP(cep) {
    //         let headers = {
    //             'Content-Type': 'application/json'
    //         }
    //         axios({
    //             method: `GET`,
    //             url: `https://viacep.com.br/ws/${cep}/json/`,
    //             headers
    //         }).then((response) => {
    //             for (let [attKey, attValue] of Object.entries(response.data)) {
    //                 attValue = attKey == 'cep' ? attValue.replace('-','') : attValue
    //                 attKey = attKey == 'uf' ? 'estado' : attKey
    //                 attKey = attKey == 'localidade' ? 'cidade' : attKey
    //                 if (this.endereco[attKey] != undefined && attValue != '') {
    //                     this.endereco[attKey] = attValue
    //                 }

    //             }
    //         }).catch((error) => {
    //             console.log('error', error)
    //         });
    //     },
    //     autoPreencherPorCep() {
    //         this.exibirPronto = false
    //         setTimeout(() => (this.exibirPronto = true), 10)
    //     },
    //     armazenarDadoInput(inputData) {
    //         let value = inputData.value
    //         let nomeAtributoProp = inputData.nomeAtributoProp
    //         if (nomeAtributoProp == 'cep') {
    //             this.puxarDadosPorCEP(value)
    //         }
    //         this.endereco[`${nomeAtributoProp}`] = value
    //     },

  },
};
</script>

<style>
.address-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
}

.address-card input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.address-card button {
  background-color: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>