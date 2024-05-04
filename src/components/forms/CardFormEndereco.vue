<!-- Outro componente onde você exibe a lista de endereços e deseja abrir o modal -->
<template>
  <div>
    <!-- Botão para abrir o modal -->
    <button @click="openModal">Ver Endereço</button>

    <!-- Componente Modal -->
    <address-modal :show-modal="modalOpen" :address="selectedAddress" @close="closeModal" />
  </div>
</template>

<script>
import AddressModal from './AddressModal.vue';

export default {
  components: {
    AddressModal
  },
  data() {
    return {
      modalOpen: false,
      selectedAddress: ''
      // Outros dados da lista de endereços
    };
  },
  methods: {
    openModal() {
      // Define o endereço selecionado
      this.selectedAddress = 'Endereço aqui'; // Aqui você define o endereço a ser exibido
      // Abre o modal
      this.modalOpen = true;
    },
    closeModal() {
      // Fecha o modal
      this.modalOpen = false;
    }
  }
};
</script>

<style>
/* Estilos para o componente */
</style>