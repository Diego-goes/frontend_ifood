<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/PaginaLogin1">login</router-link>
  </nav> -->
  <router-view />
</template>

<script>
// import PaginaLogin from '@/views/PaginaLogin.vue'; // Importe o componente de login

export default {
  components: {
    // PaginaLogin // Adicione o componente de login como um componente filho
  }
};
</script>

<style>
* {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  background-color: white;
  /*background-image: linear-gradient(rgb(255, 255, 255), rgb(226, 219, 219));*/
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
}

#imagem-principal {
  width: 120px;
  height: auto;
  margin-left: 30px;
  top: 40px;

}
</style>
