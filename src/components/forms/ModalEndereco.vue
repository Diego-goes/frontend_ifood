<!-- Outro testest asda componente onde você exibe a lista de endereços e deseja abrir o modal -->
<template>
  <div class="address-card">
    <div v-if="campo1Visivel" class="criar-endereco">
      <form @submit.prevent="submitForm">
        <!-- Botão para abrir o modal -->
        <input type="button" value="Voltar" @click="closeModal">
        <input v-model.lazy="endereco.cep" @input="bloquearCaracter" @change="autoPreencherPorCep" placeholder="CEP"
          required maxlength="8" />
        <input v-model="endereco.apelido" placeholder="Apelido" />
        <input v-model="endereco.logradouro" placeholder="logradouro" required />
        <input v-model="endereco.numero" placeholder="Número" value="" required />
        <input v-model="endereco.complemento" placeholder="Complemento*" />
        <input v-model="endereco.pontoReferencia" placeholder="Ponto de referência (opcional)" />
        <input v-model="endereco.bairro" placeholder="bairro" value="" />
        <input v-model="endereco.cidade" placeholder="Cidade" value="" />
        <input v-model="endereco.estado" placeholder="estado" value="" />
        <button type="submit">Enviar</button>
      </form>
    </div>
    <!-- <div v-for="endereco in enderecos" :key="endereco.enderecoId" class="endereco">
    <img :src="formatarEndereco(endereco).src" :alt="formatarEndereco(endereco).alt">
    <p>{{this.formatarEndereco(endereco).titulo}}</p>
    <p>{{this.formatarEndereco(endereco).descricao}}</p>
    <img src="opcao" alt="imageOpcao">
    </div> -->
    
    <div v-if="!campo1Visivel" class="listar-enderecos">
      <!-- Aqui vão aparecer todos os endereços cadastrados pelo usuario -->
    </div>
    <input type="button" @click='alterarVisibilidade' value="Alterar campos">
  </div>
</template>
<script>
import { requisicao } from '../../../utils/funcsGerais'
export default {
  name: 'ModalEndereco',
  data() {
    return {
      enderecos: [],
      endereco: {
        "logradouro": "",
        "numero": "",
        "complemento": "",
        "cep": "",
        "bairro": "",
        "cidade": "",
        "estado": "",
        "pontoReferencia": "",
        "apelido": "",
      },
      campo1Visivel: false
    };
  },
  methods: {
    async puxarEnderecos () {
        let token = localStorage.getItem('tokenJWT')
        let idUsu = localStorage.getItem('usuarioId');
        this.enderecos = await this.requisicao(`https://backendhifood-production.up.railway.app/enderecos/usuario/${idUsu}`, 'GET', token)
        console.log(this.enderecos)
    },
    formatarEndereco(endereco) {
      let paragrafos = {
        "src": '',
        "alt": "",
        "titulo": '',
        "descricao": '',
      }
      if (endereco.apelido == null) {
        paragrafos.src = './image'
        paragrafos.alt = 'image'
        paragrafos.titulo = `${endereco.logradouro}, ${endereco.numero}`
        paragrafos.descricao = `${endereco.bairro} - ${endereco.cidade} - ${endereco.estado}`
      } else {
        if (endereco.apelido.toLowerCase() == 'casa') {
          paragrafos.src = './imageCasa'
          paragrafos.alt = 'imageCasa'
        } else {
          paragrafos.src = './imageTrabalho'
          paragrafos.alt = 'imageTrabalho'
        }
        paragrafos.titulo = `${endereco.apelido}`
        paragrafos.descricao = `${endereco.logradouro}, ${endereco.numero}`
      }
      return paragrafos
    },
    requisicao,
    alterarVisibilidade() {
      this.campo1Visivel = !this.campo1Visivel
    },
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
    async autoPreencherPorCep() {
      if (this.endereco.cep.length < 8) {
        return;
      }

      try {
        const response = await fetch(`https://viacep.com.br/ws/${this.endereco.cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          alert('CEP não encontrado.');
          return;
        }
        this.endereco.logradouro = data.logradouro;
        this.endereco.bairro = data.bairro;
        this.endereco.cidade = data.localidade;
        this.endereco.estado = data.uf;
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    },
    async submitForm() {
      let idUsu = localStorage.getItem('usuarioId');
      let token = localStorage.getItem('tokenJWT');
      let enderecoEnvio = JSON.parse(JSON.stringify(this.endereco))
      for (let [chave, valor] of Object.entries(enderecoEnvio)) {
        enderecoEnvio[chave] = valor == '' ? null : valor
        console.table([chave, valor])
      }
      try {
        const responseEndereco = await this.requisicao('https://backendhifood-production.up.railway.app/enderecos/criar', 'POST', token, enderecoEnvio);
        const enderecoId = responseEndereco["enderecoId"]
        let data = {
          'enderecoId': enderecoId,
          'usuarioId': idUsu,
        }
        // Testes:
        // console.log("ID Usuário", idUsu)
        // console.log("Token Usuário", token):
        // console.log("data ende", enderecoId)
        // console.log("data usu", idUsu)
        const responseEnderecoEntrega = await this.requisicao('https://backendhifood-production.up.railway.app/enderecosEntrega/criar', 'POST', token, data);

        if (responseEnderecoEntrega.status === 201) {
          alert('Falha ao criar o endereço.');
        } else {
          this.closeModal()
          alert('Endereço criado com sucesso!');
        }
      } catch (error) {
        alert(error);
      }
    },

  },
  created(){
    this.puxarEnderecos()
  }
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
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 50px;
}

.address-card button {
  background-color: #ff6f61;
  color: #fff;
  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>