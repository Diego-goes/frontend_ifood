<template>
    <div class="quadro-branco-principal">
        <p id="cadastrar" > Cadastre-se </p>
        <input id= "dados" class="nome-completo" type="text" placeholder="Nome completo">
        <input id= "dados" class="cpf" type="text" placeholder="CPF">
        <input id="dados" type="text" placeholder="(__) ____-____" maxlength="11">
        <p>Concordo com os <span class="destaque">Termos de uso</span> e a <span class="destaque">Politica de Privacidade</span></p>
        <button class="cadastrar">Cadastrar</button>
        <p>Já tem conta? <span class="destaque">Entrar</span></p>   


    </div>
</template>
<script>
export default{
    name:'CardFormCadastro'
}
</script>
<style scoped>
.quadro-branco-principal{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 40vw;
    height: 550px;
    float: right;
    margin-right: 3vw;
    margin-top: 40px;
    border-radius: 7px;
    box-shadow: 0 4px 8px rgba(7, 7, 7, 0.2);
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;

}

#cadastrar{
    font-size: 30px;

}

.cadastrar{
    display: flex;
    padding: 18px 90px;
    border: none;
    border-radius: 5px;
    background-color: #ea1d2c;
    color: white;
    
}

.cadastrar:hover{
    background-color: rgb(230, 73, 73);
    color: white
    
}

#dados{
    display: flex;
    padding: 15px 80px;
    padding-left: 10px;
    border: 1px solid #595756;
    color: #595756;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 18px; 
    
}

.destaque{
    color: red;
}

</style>