<template>
    <div class="viewPedidoEntregue">
        <div class="container">
            <img src="../assets/greenCheck.png" alt="Check">
            <h2>Pedido Entregue <br>com sucesso! </h2>

        <div class="endereco">
            <p>Entrega em:</p>
            <p>Endereço selecionado</p>

        </div>  
        
        <div class="detalhe-pedido">
            <p> <b>Detalhe do pedido</b></p>
            <div class="dados-restaurante">
                <img src="../assets/imagem_default.png" alt="Img restaurante">
                <p>Nome do restaurante</p>
            </div>
            <div class="total">
                <p>Total:</p>
                <p>R$ 45,00</p>
            </div>

        </div>

    <div>
        <input type="button" value="Deixe sua avaliação" class="btn-avaliacao">

    </div>


        </div>

    </div>

</template>
<script>
export default {
    name: "PedidoEntegue",
}

</script>
<style scoped>
.viewPedidoEntregue{
    background-image: url(../assets/fundoMaps.jpg);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;  
    background-color: hsla(0, 0%, 100%, 0.7);
    padding: 10px;
    border-radius: 4px;
    width: 35vw;
    height: 75vh;
}

.container img{
    width: 60px;
}

.container h2{
    color: rgb(25, 165, 20);
}

.endereco{
    display: flex;
    text-align: left;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
       
}

.endereco p:nth-child(1){
    font-weight: bolder;
    margin-bottom: -2px;

}

.detalhe-pedido{
    display: flex;
    text-align: left;
    flex-direction: column;
    width: 100%;
    
}

.dados-restaurante{
    display: flex;
    width: 100%;

}

.dados-restaurante img{
    border-radius: 100%;
    margin-right: 10px;

}

.total{
    display: flex;
    justify-content: space-between;
}

.btn-avaliacao{
    border: none;
    border-radius: 3px;
    padding: 10px;
    height: 40px;
    color: white;
    background-color: #EA1D2C;
   
    
}



</style>