<template>
  <div class="body-pagina-deslogada">
    <header>

    <router-link to="/">
        <img src="../assets/HifoodPrincipal.png" id="imagem-principal">
    </router-link>
    <div class="palavra">Entregador</div>
    <div class="palavra">Restaurante e Mercado</div>
    <div class="palavra">Carreiras</div>
    <div class="palavra">Hifood Card</div>
    

<div class= "botao" >
    
    <router-link to ="PaginaLogin1" class="btn-menu" id="btn-criar">Criar Conta </router-link> 
    <router-link to ="PaginaLogin1" class="btn-menu" id="btn-entrar"> Entrar </router-link>     

</div>

</header>

<div class="conteudo-principal">
    <h1>Faça mercado no Hifood</h1>  
    <p>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza.</p>
    
</div>        

<div class="campo-botao">
    <label for="lupa">
        <input class="em-qual-endereco-esta" type="text" placeholder="Digite seu endereço:">
        <img src="..//assets/lupa.png" alt="imagem" class="lupa-endereco">

    </label>

</div>

<div class="ja-tem-endereco">
    <p>Já tem endereço salvo?</p>
    <p id="frase2">Entre na sua conta para selecionar seu endereço.</p>
</div>

<div class="container2">
    <p>Frios</p>
    <p>Latinícios</p>
    <p>Feira</p>
    <p>Bebidas</p>
    <p>Doces</p>
    <p>Massas Frescas</p>
    <p>Limpeza</p>
    <p>Padaria</p>
    <p>Higiene</p>
    <p>Congelados</p>
    <p>Carnes</p>
    <p>Cervejas</p>
    
                    
</div>

  </div>
</template>

<script>


</script>

<style scoped>
.body-pagina-deslogada{
    background-image: url('../assets/fundoteladeslogada1.png'); 
    width: 100vw; 
    height: 100vh; 
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

}

header{
    display: flex;
    width: 100vw;
    height: 20vh;
    justify-content: space-between;
    align-items: center;
}

#imagem-principal{  
    width: 120px;
    height: auto;
    margin-left: 30px;
    top: 40px;

}

.container {
    display: flex;
    align-items: center;
    gap: 20px;
    
}

.palavra {
    background: transparent;
    color: #3e3e3e;
    font-size: 1rem;
    line-height: 1.25em;
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
    font-weight: bold;
    
}



.botao{ 
    font-family: inherit;
    margin-right: 80px;

}

.campo-botao{
    display: flex;
    justify-content: center;
}  

.btn-menu{
    height: 45px;
    width: 100px;
    font-size: 17px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    padding: 15px 25px;
    text-decoration: none;

}


#btn-criar{
    background-color: white;
    color: #EA1D2C;
    
}

#btn-entrar{
    background-color: #EA1D2C;
    color: white;

}

#btn-entrar:hover{
    background-color: rgb(230, 73, 73);
    color: white
    
}

.conteudo-principal{
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center; 
    margin-top: 5vw;
    color: #3e3e3e;
    line-height: 0.2em;
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
    font-size: 20px;
}

.em-qual-endereco-esta {
    background-color: #f2f2f2;
    color: #3e3e3e;
    padding: 15px 75px;
    border: none;
    margin-right: 10px;
    margin-top: 40px;
    border-radius: 5px;
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
    text-align: left;
    font-size: 18px;
    
}

.lupa-endereco{
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin-top: -3.5vw;
    width: 40px;
    height: auto; 
    margin-left: 10px;
}

.container2{
    display: flex;
    justify-content: center;
    top:70%;
    width: 45vw;
    margin-top: 5vh;
    flex-wrap: wrap;
    gap: 5px;

}

.container2 p{
    border: 2px solid #f2f2f2;
    border-radius: 15px;
    padding: 5px 10px;
    background-color: white;
    color: #717171;
    
}

.ja-tem-endereco{
    display: flex;
    justify-content: center;
    width: 30vw;
    flex-wrap: wrap;
    line-height: 0.02;
    color: #595756;
    font-size: 16px;
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
    margin-top: 5vh;
}

#frase2{
    color: #a6a5a5;
    font-size: 14px;
}


</style>
