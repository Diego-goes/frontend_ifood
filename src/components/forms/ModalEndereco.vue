<!-- Outro testest asda componente onde você exibe a lista de endereços e deseja abrir o modal -->
<template>
  <div class="fundo-modal">
    <div class="address-card">
      <!--<input type="button" value="Voltar" @click="closeModal" class="botao">-->
      <div v-if="campo1Visivel" class="criar-endereco">
        <div class="btn-fechar">
          <img @click="alterarVisibilidade" src="../../assets/SetaVermelha.png" alt="">
        </div>
        <form @submit.prevent="submitForm">
          <!-- Botão para abrir o modal -->
          <div class="inserir-cep">
            <input v-model.lazy="endereco.cep" @input="bloquearCaracter" @change="autoPreencherPorCep" placeholder="CEP"
              required maxlength="8" class="cep" />
            <input v-model="endereco.bairro" placeholder="Bairro" value="" />
          </div>
            <input v-model="endereco.logradouro" placeholder="logradouro" value="" required />
          <div class="enderecos">
            <input v-model="endereco.numero" placeholder="Número" value="" required />
            <input v-model="endereco.cidade" placeholder="Cidade" value="" />
            <input v-model="endereco.estado" placeholder="Estado" value="" />
          </div>
          <div>
            <input v-model="endereco.complemento" placeholder="Complemento" />
            <input v-model="endereco.pontoReferencia" placeholder="Ponto de referência" />
          </div>
          <a>Favoritar como</a>
          <div class="botoes-favoritar">
            <button type="button" @click="selecionarBotao('Casa')" :style="botaoSelecionado === 'Casa' ? {'background-color': '#ff0000'} : {}" class="botao-favoritar">Casa</button>
            <button type="button" @click="selecionarBotao('Trabalho')" :style="botaoSelecionado === 'Trabalho' ? {'background-color': '#ff0000'} : {}" class="botao-favoritar">Trabalho</button>
          </div>
          <!-- <div class="botoes-favoritar">
            <button type="button" class="botao-favoritar">Casa</button>
            <button type="button" class="botao-favoritar">Trabalho</button>
          </div> -->
          <div class="botoes-enviar">
            <!-- <button type="button" @click="alterarVisibilidade" class="botao-enviar">Voltar</button> -->
            <button type="submit" class="botao-enviar">Salvar endereço</button>
          </div>
        </form>
      </div>
      <div v-if="!campo1Visivel">
        <div class="btn-fechar">
          <img @click="closeModal" src="../../assets/SetaVermelha.png" alt="">
        </div>
      <img src="opcao" alt="imageOpcao"> -->
        <div class="imagem-local">
          <img src="../../assets/icone-local.png" alt="imagemLocal">
          <a>Onde você quer receber seu pedido?</a>
        </div>
        <div class="listar-enderecos">
          <div v-for="endereco in enderecos" :key="endereco.enderecoId" class="endereco">
            <div>
              <!-- <img src="../../assets/iconeCasa.png" alt="icone-endereco"> -->
              <img :src="formatarEndereco(endereco).src" :alt="formatarEndereco(endereco).alt">
              <div>
                <p>{{ this.formatarEndereco(endereco).titulo }}</p>
                <p>{{ this.formatarEndereco(endereco).descricao }}</p>
              </div>
            </div>
              <img src="../../assets/pencil.png" alt="icone-opcao-editar" @click="editarEndereco(endereco)">
              <img src="../../assets/lixoVermelho.png" alt="icone-opcao-excluir" @click="excluirEndereco(endereco)">
            </div>
        </div>
        <div class="botoes">
          <button type="button" @click="closeModal" class="botao">Fechar modal</button>
          <button type="button" @click='alterarVisibilidade' class="botao">Alterar campos</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { requisicao } from '../../../utils/funcsGerais'
export default {
  name: 'ModalEndereco',
  data() {
    return {
      exibirOpcoes : false,
      botaoFavoritar: null,
      botaoSelecionado: "",    
      editando: false,
      excluindo: false,
      enderecos: [],
      endereco: {
        "logradouro": "",
        "numero": "",
        "complemento": "",
        "cep": "",
        "bairro": "",
        "cidade": "",
        "estado": "",
        "pontoReferencia": "",
        "apelido": "",
      },
      campo1Visivel: false
    };
  },
  methods: {
    exibirOpcoesEndereco() {
      this.exibirOpcoes = true;
    },
    selecionarBotao(botao) {
      if (this.botaoSelecionado === botao) {
        this.botaoSelecionado = null;
        this.endereco.apelido = null;
      } else {
        this.botaoSelecionado = botao;
        this.endereco.apelido = botao;
      }
    },
    excluirEndereco(endereco)  {
      let token = localStorage.getItem('tokenJWT');
      let enderecoEnvio = JSON.parse(JSON.stringify(this.endereco))
      for (let [chave, valor] of Object.entries(enderecoEnvio)) {
        enderecoEnvio[chave] = valor == '' ? null : valor
        console.table([chave, valor])
      }
      this.endereco = { ...endereco };
      let idEndereco = this.endereco.enderecoId;
      this.requisicao(`https://backendhifood-production.up.railway.app/enderecos/deletar/${idEndereco}`, 'DELETE', token);
    },
    editarEndereco(endereco) {
      this.endereco = { ...endereco };
      this.campo1Visivel = true;
      this.editando = true;
    },
    async puxarEnderecos() {
      let token = localStorage.getItem('tokenJWT')
      let idUsu = localStorage.getItem('usuarioId');
      this.enderecos = await this.requisicao(`https://backendhifood-production.up.railway.app/enderecos/usuario/${idUsu}`, 'GET', token)
      console.log(this.enderecos)
    },
    formatarEndereco(endereco) {
      let paragrafos = {
        "src": '',
        "alt": "",
        "titulo": '',
        "descricao": '',
      }
      if (endereco.apelido == null) {
        paragrafos.src = require('../../assets/sem-favorito.png')
        paragrafos.alt = 'sem-favorito'
        paragrafos.titulo = `${endereco.logradouro}, ${endereco.numero}`
        paragrafos.descricao = `${endereco.bairro} - ${endereco.cidade} - ${endereco.estado}`
      } else {
        if (endereco.apelido.toLowerCase() == 'casa') {
          paragrafos.src = require('../../assets/iconCasa.png')
          paragrafos.alt = 'iconeCasa'
        } else {
          paragrafos.src = require('../../assets/iconeTrabalho.png')
          paragrafos.alt = 'iconeTrabalho'
        }
        paragrafos.titulo = `${endereco.apelido}`
        paragrafos.descricao = `${endereco.logradouro}, ${endereco.numero}`
      }
      return paragrafos
    },
    requisicao,
    alterarVisibilidade() {
      this.campo1Visivel = !this.campo1Visivel
    },
    bloquearCaracter(event) {
      let inputValue = event.target.value;
      // Remove caracteres não numéricos
      let numericValue = inputValue.replace(/\D/g, '');
      // Limita o comprimento para 8 caracteres
      let limitedValue = numericValue.slice(0, 8);
      // Atualiza o valor do campo de entrada
      event.target.value = limitedValue;
      // console.log(this.endereco.cep);
    },
    closeModal() {
      this.$emit('closeModal')
    },
    async autoPreencherPorCep() {
      if (this.endereco.cep.length < 8) {
        return;
      }

      try {
        const response = await fetch(`https://viacep.com.br/ws/${this.endereco.cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          alert('CEP não encontrado.');
          return;
        }
        this.endereco.logradouro = data.logradouro;
        this.endereco.bairro = data.bairro;
        this.endereco.cidade = data.localidade;
        this.endereco.estado = data.uf;
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    },
    async submitForm() {
      let idUsu = localStorage.getItem('usuarioId');
      let token = localStorage.getItem('tokenJWT');
      let enderecoEnvio = JSON.parse(JSON.stringify(this.endereco))
      for (let [chave, valor] of Object.entries(enderecoEnvio)) {
        enderecoEnvio[chave] = valor == '' ? null : valor
        console.table([chave, valor])
      }
      try {
        let responseEndereco;
        if (this.editando == true) {
          // Atualize o endereço com uma requisição PUT
          let idEndereco = this.endereco.enderecoId;
          responseEndereco = await this.requisicao(`https://backendhifood-production.up.railway.app/enderecos/editar/${idEndereco}`, 'PUT', token, this.endereco);
          console.log(responseEndereco.mensagem)
          if (responseEndereco.mensagem.includes("sucesso")) {
            alert('Endereço atualizado com sucesso!');
          } else {
            alert('Falha ao atualizar o endereço.');
          }
        } else {
          // Crie um novo endereço com uma requisição POST
          responseEndereco = await this.requisicao('https://backendhifood-production.up.railway.app/enderecos/criar', 'POST', token, enderecoEnvio);
          const enderecoId = responseEndereco["enderecoId"]
          let data = {
            'enderecoId': enderecoId,
            'usuarioId': idUsu,
          }
          const responseEnderecoEntrega = await this.requisicao('https://backendhifood-production.up.railway.app/enderecosEntrega/criar', 'POST', token, data);
          if (responseEnderecoEntrega.mensagem.includes("sucesso")) {
            alert('Endereço criado com sucesso!');
            return;
          }
          alert('Falha ao criar o endereço.');
        }
        this.editando = false;
        this.closeModal()
      } catch (error) {
        alert(error);
      }
    },

  },
  created() {
    this.puxarEnderecos()
  }
};

</script>


<style scoped>
.fundo-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.185);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}

.address-card {
  display: flex;
  width: 40vw;
  min-height: 40vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  padding: 2rem 0px;
}
.address-card>div:nth-child(1){
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.btn-fechar {
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

}

.address-card input {
  display: flex;
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}

.criar-endereco {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.inserir-cep {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.enderecos {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.botao-enviar {
  display: flex;
  background-color: rgb(209, 14, 14);
  color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 10px 20px;
  cursor: pointer;
}

.botoes-enviar {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 5%;
}

.botao-favoritar {
  display: flex;
  background-color: #e7e2e2;
  color: black;
  border: 1px solid #c5c5c5;
  border-radius: 0.5rem;
  padding: 10px 20px;
  cursor: pointer;
}

.botoes-favoritar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 7%;
}

.listar-enderecos {
  display: flex;
  width: 100%;
  height: 10rem;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 0.3rem;
  gap: 1rem;
  overflow: scroll;
  overflow-x: hidden;
}

.imagem-local {
  display: flex;
  flex-direction: column;
}

.botoes {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 5%;
}

.botao {
  display: flex;
  align-items: center;
  font-size: 13px;
  width: 10vw;
  height: 7vh;
  border-radius: 0.3rem;
  justify-content: center;
  color: white;
  background-color: rgb(209, 14, 14);
  border: none;
  gap: 3px;
}

.endereco {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  border: 1px solid rgba(211, 211, 211, 0.348);
  border-radius: 0.3rem;
  padding: 1rem 1rem;
}

.endereco p {
  margin: 0
}

.endereco>div:nth-child(1) {
  display: flex;
  align-items: center;
  gap: 2rem;
  text-align: left;
}

</style>