<!-- Outro componente onde você exibe a lista de endereços e deseja abrir o modal -->
<template>
  <div>
    <!-- Botão para abrir o modal -->
    <input type="button" value="Voltar" @click="closeModal" >
    <input type="text" placeholder="Seu Endereço">
  </div>
</template>

<script>

export default {
  name:'CardFormEndereco',
  data() {
    return {
      rua: '',
      numero: '',

      // Outros dados da lista de endereços
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
};
</script>

<style>
/* Estilos para o componente */
</style>