<template>
<div class="pagina-login1">
    
    <img src="../assets/HifoodPrincipal.png" id="imagem-principal">
    <img src="../assets/pessoas.png">
    <img src="../assets/QuadroBranco.png" id="quadro-branco">

    <main class="cadastro">
        <p>Falta pouco para <br> matar a sua fome!<br> </p>
        <p class="titulo-destaque">Como deseja continuar?</p>
        <label for="btnFacebook">
            <input name= "btnFacebook"class= "Facebook" type="button"value=" Continuar com Facebook"><br>
            <img src="../assets/logoface.png" alt="Imagem" class="logoF">   
        </label>

        <label for="btnGoogle">
            <input name= "btnGoogle"class="Google" type="button"value=" Fazer login com o Google"><br>
            <img src="../assets/logoGoogle.png" alt="Imagem" class="logoG">
        </label>
    
        <input class="Celular" type="button" value="Celular">
        <input class="E-mail" type="button" value="E-mail">
    
    </main>
</div>

</template>

<script>


</script>

<style scoped>
.pagina-login1{
      height: 100vh;
      box-sizing: border-box; 
      background-color: white;
      color: black;
      background-image: url('../assets/FundoTelap1.png'); 
    
  }
  
  .cadastro img{
      max-width: 500px;
      max-height: 550px;
      float: right; 
      margin-right: 120px;
  }
  
  .cadastro{
    vertical-align: top;
    position: fixed;
    top: 60px;
    right: 80px; 
    transform: translate(0, 0);
    text-align: center;
  }

.titulo-destaque{
    display: flex; 
    justify-content: center;
    color: grey;
    font-size: 25px;
    
 }

  p{
    color: #414143;
    font-size: 45px;
    font-family: iFood RC Titulos, iFood RC Textos, helvetica, sans-serif;
    font-weight: 500;
    letter-spacing: -1.5px;
    
  }

  #imagem-principal{  
    width: 120px;
    height: auto;
    margin-left: 50px;
    position: fixed;
    top: 30px;

  }

  img{
    width: 540px;
    height: auto;
    top: 110px;
    position: fixed;
    margin-left: 80px;
   
  }

  #quadro-branco{
    width: 490px;
    top: 50px;
    right: 40px; 
    transform: translate(0, 0);
    box-shadow: 0 4px 8px rgba(7, 7, 7, 0.2);

}

.Facebook{
    background-color: #4065b4;
    color: white; 
    padding: 15px 25px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block; 
    font-size: 16px; 
    border-radius: 3px; 
    border: none; 
    cursor: pointer;
    width: 400px;
    margin-bottom: 20px;
    
}
.logoF{
    width: 30px; 
    height: auto; 
    margin-left: 10px; 
    margin-top: 147px;
    vertical-align: middle;
}

.Google{
    display: flex; 
    justify-content: center;
    background-color: white;
    border: 1px solid lightgray;
    color: black; 
    padding: 15px 25px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block; 
    font-size: 16px; 
    border-radius: 3px; 
    cursor: pointer;
    width: 400px;
    margin-bottom: 20px;
    
}

.logoG{
    width: 30px; 
    height: auto; 
    margin-left: 10px; 
    margin-top: 217px;
    vertical-align: middle;
}

.Celular{
    display: flex; 
    justify-content: center;
    background-color: white;
    border: 1px solid lightgrey;
    color: lightslategray; 
    padding: 10px 20px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block;
    font-size: 16px; 
    border-radius: 3px; 
    cursor: pointer;
    width: 200px;
    margin-bottom: 20px;

}

.Celular:hover{
    background-color: #ea1d2c;
    color: white
}

.E-mail{
    display: flex; 
    justify-content: center;
    background-color: white;
    border: 1px solid lightgrey;
    color: lightslategray; 
    padding: 10px 20px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block;
    font-size: 16px; 
    border-radius: 3px; 
    cursor: pointer;
    width: 200px;
    margin-bottom: 20px;

}

.E-mail:hover{
    background-color: #ea1d2c;
    color: white
}


</style>