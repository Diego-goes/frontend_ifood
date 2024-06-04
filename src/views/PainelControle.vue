<template>
  <section class="sectionPainelControle">
    <div id="painelControle">
      <CardFormCadastroCrud v-if="exibirCardFormCadastro" :acao="acaoCrud" :usuarioId="usuarioId"
        @enviarForm="atualizarLista" @ocultarForm="ocultarForm" />
      <CardConfirm style="display:none" />
      <div id="cabecalhoPainel">
        <div>
          <img src="../assets/HifoodPrincipal.png" class="logo_painel" alt="logo-hifood">
        </div>
        <div>
          <!-- <p>Painel Controle</p> -->
        </div>
      </div>
      <div id="centralPainel">
        <div id="mainPainel">
          <div class="containerAbasPainel">
            <div id="abaUsuario" class="abasInativas" @click="mudarVisualizacao('usuarios')">
              <img class="iconeAba" src="../assets/avatar_icon.png" alt="icone_aba">
              <p>Usuários</p>
            </div>
            <div id="abaRelatorio" @click="mudarVisualizacao('relatorio')">
              <img class="iconeAba" src="../assets/imagempedidos.png" alt="icone_aba">
              <p>Relatório</p>
            </div>
          </div>
          <div id="cabecalhoCrud" v-if="!exibirRelatorio">
            <div>
              <input type="text" name="" placeholder="Pesquisar..." id="">
            </div>
            <div class="areaBtns">
              <BtnDefault :type="'button'" :value="'Edit'" v-show="!(usuarioId == null)" v-on:click="editarSelecionado"
                :preenchido="false" />
              <BtnDefault :type="'button'" :value="'Detalhes'" v-show="!(usuarioId == null)"
                v-on:click="exibirDadosUsuario" :preenchido="true" />
              <BtnDefault :type="'button'" :value="'Criar'" v-show="usuarioId == null" v-on:click="criarUsuario"
                :preenchido="true" />
            </div>
          </div>
          <CardRelatorio v-if="exibirRelatorio" />
          <div id="tabelaCrud" v-if="!exibirRelatorio">
            <div id="tituloTabela">
              <input type="checkbox" name="" id="" style="visibility: hidden;">
              <p>ID</p>
              <p>Nome</p>
              <p>Status</p>
              <p>Tipo</p>
              <p>Criação</p>
            </div>
            <div id="linhasTabela">
              <LinhaCrudUsuario v-for="linha in linhas" :key="linha.usuarioId" @salvarId="pegarIdRadio"
                :linhaData="linha" />
            </div>
          </div>

        </div>
        <div id="barraEdicao" style="display: none;">
          <div>
            x
            <p>3</p>
            <p>Itens selcionados</p>
          </div>
          <div>
            <input type="button" value="Edit" v-on:click="editarSelecionado">
            <input type="button" value="Delete" v-on:click="inativarSelecionado">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import LinhaCrudUsuario from '@/components/base/LinhaCrudUsuario.vue'
import CardFormCadastroCrud from '@/components/forms/CardFormCadastroCrud.vue'
import CardConfirm from '@/components/forms/CardConfirm.vue'
import BtnDefault from "@/components/base/BtnDefault.vue";
import CardRelatorio from "@/components/forms/CardRelatorio.vue";
import { requisicao } from '../../utils/funcsGerais';
export default {
  name: "PainelControle",
  data() {
    return {
      linhas: [],
      token_jwt: '',
      exibirCardFormCadastro: false,
      acaoCrud: '',
      usuarioId: null,
      exibirRelatorio: false,
      linhaSelecionada: ''
    };
  },
  methods: {
    requisicao,
    mudarVisualizacao(nomeAba) {
      this.exibirRelatorio = nomeAba === 'relatorio' ? true : false;
    },
    criarUsuario() {
      this.acaoCrud = 'criar'
      this.exibirCardFormCadastro = true
    },
    exibirDadosUsuario() {
      this.acaoCrud = 'exibir'
      this.exibirCardFormCadastro = true
    },
    editarSelecionado() {
      this.acaoCrud = 'editar'
      this.exibirCardFormCadastro = true
    },
    inativarSelecionado() {
      axios
        .put(`https://backendhifood-production.up.railway.app/usuarios/inativar/${this.usuarioId}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => (this.msg = error.response));
    },
    ativarSelecionado() {
      axios
        .put(`https://backendhifood-production.up.railway.app/usuarios/ativar/${this.usuarioId}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => (this.msg = error.response));
    },
    async atualizarLista() {
      this.linhas = await this.requisicao("https://backendhifood-production.up.railway.app/usuarios","GET",this.token_jwt)
    },
    ocultarForm(data) {
      this.exibirCardFormCadastro = data
    },
    pegarIdRadio(id) {
      this.usuarioId = id
    }
  },
  async created() {
    this.token_jwt = localStorage.getItem('tokenJWT')
    this.linhas = await this.requisicao(`https://backendhifood-production.up.railway.app/usuarios`, "GET", this.token_jwt)

  },
  components: {
    LinhaCrudUsuario,
    CardFormCadastroCrud,
    CardConfirm,
    BtnDefault,
    CardRelatorio
  }
};
</script>

<style scoped>
.sectionPainelControle {
  width: 100vw;
  display: flex;
  justify-content: center;
}

input[type='button'] {
  padding: 2% 10%;
  border-radius: 3px;
  cursor: pointer;
}

.btnClaro {
  background-color: #ffffff;
  color: #ce2020;
  border: 1px solid #ce2020;
}

.btnEscuro {
  background-color: #ce2020;
  color: #ffffff;
  border: 1px solid transparent;
}

#painelControle {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh; 
  border-radius: 10px;
  padding: 1vw;
  background-color: white;
  box-shadow: 5px 5px 3px #c7c7c7,
    -5px -5px 3px #f9f9f9;
}

.logo_painel {
  height: 2rem;
}

#centralPainel {
  background-color: rgb(242, 242, 242);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: inset 5px 5px 3px #c7c7c7,
    inset -5px -5px 3px #f9f9f9;
  height: 90%;
}

#cabecalhoPainel {
  display: flex;
  align-items: center;
  margin-inline: 1%;
  gap: 1%;
  font-weight: bold;
}

#mainPainel {
  width: 90%;
  min-height: min-content;
  border-radius: 20px;
  padding: 2% 0;
}

.abasInativas {
  opacity: 50% !important;
}

.containerAbasPainel {
  display: flex;
  width: fit-content;
  gap: 1%;
  cursor: pointer;
}

.containerAbasPainel>div {
  padding: 0.8vw;
  padding-bottom: 0.3vw;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: min-content;
}

.containerAbasPainel div p {
  margin: 0;
}

.iconeAba {
  aspect-ratio: 1/1;
  width: 1rem;
  height: 1rem;
}

#cabecalhoCrud {
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  padding: 2vh 0px;
  border-top-right-radius: 20px;
}

#cabecalhoCrud div {
  margin-inline: 2%;
}

.areaBtns {
  display: flex;
  flex-wrap: wrap;
  min-width: 30%;
  justify-content: flex-end;
  gap: 5%;
}

#tituloTabela {
  background-color: #f2f2f7;
  display: grid;
  align-items: center;
  gap: 2%;
  grid-template-columns: 0.2fr 1fr 2fr 1fr 1fr 2fr;
  /*0.2fr 0.4fr 1.8fr 1fr 1.3fr 2fr*/
  font-weight: bold;
  color: #9290a8;
  font-size: 0.6rem;
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