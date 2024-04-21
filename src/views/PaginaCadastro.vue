<template>
    <router-link to="/">
        <img src="../assets/HifoodPrincipal.png" id="imagem-principal">
    </router-link>
    <div class= "botao" >
    <router-link to ="LoginUsuario" class="btn-menu" id="btn-entrar"> Entrar </router-link>     
    </div>
    <CardFormCadastro />
</template>
<script>
import CardFormCadastro from "@/components/forms/CardFormCadastro"
export default {
    name: 'PaginaCadastro',
    components: {
        CardFormCadastro
    }
}
</script>
<style scoped>
#imagem-principal{  
  width: 120px;
  height: auto;
  margin-left: 0; /* Remova o valor negativo de margin-left */
  position: absolute; /* Ou use 'relative' se desejar que ela fique relativa ao fluxo do documento */
  top: 30px;
  left: 30px; /* Posiciona a imagem 30px da borda esquerda */

  }
</style>