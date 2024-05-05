<!-- Outro componente onde você exibe a lista de endereços e deseja abrir o modal -->
<template>
  <div class="address-card">
    <form @submit.prevent = "submitForm">
      <!-- Botão para abrir o modal -->
      <input type="button" value="Voltar" @click="closeModal" >
      <input v-model="endereco.rua" placeholder="Rua" required />
      <input v-model="endereco.numero" placeholder="Número" required />
      <input v-model="endereco.complemento" placeholder="Complemento" />
      <input v-model="endereco.cep" @input= "bloquearCaracter" placeholder="CEP" required />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name:'CardFormEndereco',
  data() {
    return {
      endereco: {
        rua: "",
        numero: "",
        complemento: "",
        cep: "",
      }
    };
  },
  methods: {
    bloquearCaracter(event) {
      const inputValue = event.target.value;
      // Remove caracteres não numéricos
      const numericValue = inputValue.replace(/\D/g, '');
      // Limita o comprimento para 8 caracteres
      const limitedValue = numericValue.slice(0, 8);
      // Atualiza o valor do campo de entrada
      event.target.value = limitedValue;
    },
    closeModal() {
      this.$emit('closeModal')
    },
    async submitForm() {
      //Não está funcionando o Método POST (Verificar ROTA)
      try {
        const response = await axios.post('https://backendhifood-production.up.railway.app/enderecos/criar');
        if (response.status === 201) {
          alert('Usuário criado com sucesso!');
        }
      } catch (error) {
        console.error(error);
      }
    },
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