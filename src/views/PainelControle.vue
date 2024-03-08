<!-- src/views/Login.vue -->

<template>
  <div id="painelControle">
    <CardUsu v-if="exibirCardUsu" @enviarForm="salvarDados" @cancelar="ocultarCard" @atualizarLista="atualizarLista" />
    <div id="cabecalhoPainel">
      <div>
        <div style="border-radius: 100%;border: 1px solid black;max-width: min-content; aspect-ratio: 1/1;">ifood
        </div>
      </div>
      <div>
        Painel Controle
      </div>
    </div>
    <div id="centralPainel">
      <div id="crudUsuario">
        <div id="abasCrud">
          <div id="abaUsuario">M Usuários</div>
        </div>
        <div id="cabecalhoCrud">
          <div>
            <input type="text" name="" placeholder="Pesquisar..." id="">
          </div>
          <div>
            <input type="button" value="Criar Usuario" v-on:click="criarUsuario">
          </div>
        </div>
        <div id="tabelaCrud">
          <div id="tituloTabela">
            <input type="checkbox" name="" id="">
            <p>ID</p>
            <p>Nome</p>
            <p>Status</p>
            <p>Tipo</p>
            <p>Criação</p>
          </div>
          <div id="linhasTabela">
            <LinhaCrudUsuario v-for="linha in linhas" :key="linha.id" :linhaData="linha" />
          </div>
        </div>
      </div>
      <div id="barraEdicao">
        <div>
          x
          <p>3</p>
          <p>Itens selcionados</p>
        </div>
        <div>
          <input type="button" value="Edit">
          <input type="button" value="Delete">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LinhaCrudUsuario from '@/components/LinhaCrudUsuario.vue'
import CardUsu from '@/components/CardUsu.vue'
export default {
  data() {
    return {
      linhas: [],
      exibirCardUsu: false
    };
  },
  methods: {
    criarUsuario() {
      // document.querySelector('#linhasTabela').appendChild(this.LinhaCrudUsuario)
      this.exibirCardUsu = true
    },
    salvarDados() {
      axios
        .get("http://localhost:8000/usuarios")
        .then((response) => {
          console.log(response.data)
          this.linhas = response.data
          this.ocultarCard()
        })
        .catch((error) => (this.msg = error.response));
    },
    ocultarCard() {
      this.exibirCardUsu = false
    }
  },
  created() {
    axios
      .get("http://localhost:8000/usuarios")
      .then((response) => {
        console.log(response.data)
        this.linhas = response.data
      })
      .catch((error) => (this.msg = error.response));
  },
  components: {
    LinhaCrudUsuario,
    CardUsu
  }
};
</script>

<style scoped>
#painelControle {
  width: 80vw;
  min-height: 70vh;
  border-radius: 10px;
  margin-top: 10vh;
  padding: 1vw;
  background-color: rgb(255, 255, 255);
}

#centralPainel {
  min-height: 70vh;
  background-color: rgb(240, 241, 246);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
}

#cabecalhoPainel {
  display: flex;
}

#crudUsuario {
  width: 90%;
  border-radius: 20px;
}

#abasCrud {
  display: flex;
  background-color: white;
  width: fit-content;
  padding-inline: 2vw;
  padding-top: 1vw;
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  margin-top: 3vh;
}

#cabecalhoCrud {
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  padding: 5vh 0px;
  border-top-right-radius: 20px;
}

#cabecalhoCrud div {
  margin-inline: 1vw;
}

/* #tabelaCrud {
} */

#tituloTabela {
  background-color: rgb(236, 234, 234);
  display: grid;
  gap: 2%;
  grid-template-columns: 0.2fr 1fr 2fr 1fr 1fr 2fr;
  padding: 5px;
}

#tituloTabela p {
  margin: 0px 0px;
  width: 17%;
  text-align: left;
}

#linhasTabela {
  overflow-y: scroll;
  background-color: white;
  height: 40vh;
}

#barraEdicao {
  display: flex;
  justify-content: space-between;
  width: 50vw;
  align-items: center;
  /* margin-top: -2vh; */
}

#barraEdicao div {
  margin-inline: 2vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#barraEdicao div:nth-child(1) {
  width: 30%;
}

#barraEdicao div:nth-child(2) {
  width: 20%;
}
</style>