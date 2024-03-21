<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">login</router-link> -->
  </nav>
  <router-view />
</template>

<script>
// import LoginUsuario from '@/views/LoginUsuario.vue'; // Importe o componente de login

export default {
  components: {
    // LoginUsuario // Adicione o componente de login como um componente filho
  }
};
</script>

<style>
*{
  font-family: Montserrat,Avenir, Helvetica, Arial, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgb(255, 255, 255), rgb(226, 219, 219));
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
