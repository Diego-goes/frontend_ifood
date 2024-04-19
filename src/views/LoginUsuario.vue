<!-- src/views/Login.vue -->
<template>
  <section class="sectionPagLogin">
    <section>
      <img id="imgPessoas" src="../assets/bg_login-removebg-preview.png" alt="">
    </section>
    <section v-if="!exibirCampoTelefone" class="formulario">
      <section>
        <h2>Falta pouco para <br>matar sua fome!</h2>
        <p>Como deseja continuar?</p>
      </section>
      <!-- <section class="btnsIntegracao1">
        <label class="btns" id="btnFacebook" for="btnFacebook">
          <img src="../assets/icon_facebook-removebg-preview.png" alt="">
          <input name="btnFacebook" type="button" value="Continuar com Facebook">
        </label>
        <label class="btns" id="btnGoogle" for="btnGoogle">
          <img src="../assets/google_93818.png" alt="">
          <input name="btnGoogle" type="button" value="Fazer login com o Google">
        </label>
      </section> -->
      <section class="btnsIntegracao2">
        <input @click="alterarVisibilidadeCampoTelefone" class="btns" type="button" value="Celular">
        <input class="btns" type="button" value="E-mail">
      </section>
      <hr>
    </section>

    <section v-if="exibirCampoTelefone" class="formulario">
      <h2>INSERIR ENDEREÇO</h2>
      <input @click="alterarVisibilidadeCampoTelefone" class="btns" type="button" value="Enviar">
    </section>

    

  </section>
</template>

<script>
export default {
  name: "LoginUsuario",
  data() {
    return {
      exibirCampoTelefone: false,
    }
  },
  methods: {
    alterarVisibilidadeCampoTelefone(){
      if (this.exibirCampoTelefone == false){
        this.exibirCampoTelefone = true
      } else {
        this.exibirCampoTelefone = false
      }
    }
  }
}
</script>

<style scoped>
.sectionPagLogin {
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  background-image: url('../assets/Ellipse\ 10.png');
  background-size: 70vw;
  background-position: left;
  background-repeat: no-repeat;
}

main {
  display: flex;
  justify-content: space-evenly;
  width: 85vw;
  align-items: center;
  height: 80vh;
}

#imgPessoas {
  width: 80%;
}


.btnsIntegracao1 {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1vh;
}

.btnsIntegracao1 img {
  width: 20px;
}

#btnFacebook {
  background-color: rgb(92, 137, 210);
}

#btnFacebook input {
  color: white;
}

#btnGoogle {
  background-color: rgb(255, 255, 255);
}

.btnsIntegracao1 label {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10%;
  padding: 3% 5%;
  width: 80%;
}


.formulario {
  background-color: white;
  padding: 3%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: min-content;
  justify-content: center;
  align-items: center;
  width: 30%;
  gap: 3vh;
  box-shadow: 5px 5px 5px rgb(245, 245, 245);
}

h2 {
  margin: 0;
  color: rgb(90, 90, 90);
}

p {
  color: gray;
}

hr {
  width: 100%;
  border-color: rgba(255, 248, 248, 0.302);
}

.btnsIntegracao2 {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2vh;
}

.btnsIntegracao1 input[type="button"] {
  border-color: transparent;
}

.btnsIntegracao2 input[type="button"] {
  width: 43%;
  padding: 3% 0%;
  color: gray;
}

.btnsIntegracao2 input[type="button"]:hover {
  background-color: rgb(213, 89, 89);
  color: white;
  transition: all 0.5s;
}

.btns {
  border-radius: 5px;
  border: solid 1px lightgray;
}

input[type="button"] {
  background-color: transparent;
}
</style>
