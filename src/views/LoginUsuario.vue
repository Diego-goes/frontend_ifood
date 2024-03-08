<!-- src/views/Login.vue -->
<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="fazerLogin">
        <label for="usuario">Usuário:</label>
        <input type="text" id="usuario" v-model="usuario" />
  
        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" />
  
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usuario: '',
        senha: ''
      };
    },
    methods: {
      fazerLogin() {
        // Adicione aqui a lógica para autenticar o usuário
        console.log('Usuário:', this.usuario);
        console.log('Senha:', this.senha);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Adicione estilos específicos para o componente Login, se necessário */
  </style>
  