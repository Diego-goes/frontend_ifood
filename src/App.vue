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
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;

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

*::-webkit-scrollbar {
  width: 0.9vw;
  /* width of the entire scrollbar */
}

*::-webkit-scrollbar-track {
  background: rgb(225, 225, 225);
  /* color of the tracking area */
  border-radius: 20px;
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(190, 190, 190);
  /* color of the scroll thumb */
  border-radius: 20px;
  /* roundness of the scroll thumb */
  /*border: 3px solid orange;*/
  /* creates padding around scroll thumb */
}

*::-webkit-scrollbar-thumb:hover {
  background-color: rgb(149, 149, 149);
  transition: all 1s;
}

#imagem-principal {
  width: 120px;
  height: auto;
  margin-left: 30px;
  top: 40px;

}
</style>
