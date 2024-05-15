<template>
    <div class="viewAcompanharPedido">
        
        <div class="cardPrincipal">
            <h3>O pedido está sendo preparado...</h3>
            <p class="status">Previsão de entrega</p>
            <p class="previsao">Hoje, 19:45 - 20:10 </p>
                <div class="hr-container">
                    <hr>
                    <hr>
                    <hr>
                </div>
                <div class="codigo-pedido">
                    <p class="ponto-verde">.</p>
                    <p>Use o código <u>0000</u> para receber seu pedido.</p>
                </div>
            
                <div class="confirmar-pedido">
                    <p class="seu-pedido-chegou">Seu pedido chegou?</p>
                    <p class="frase-confirmacao">Confirme assim que receber o pedido e nos ajude a saber se deu tudo certo! </p>
                    <input type="button" value="Confirmar entrega" class="btn-confirmar">

                </div>

            <div class="endereco-entrega">
                <p><b>Endereço de entrega</b></p>
                <div class="img-endereco">
                    <img src="../assets/google-maps.png" alt="imagem maps">
                    <div class="dados-endereco">
                        <p>Endereço <br>Bairro - São Paulo, SP</p>
                    </div>
                </div>   
                    <p><b>Detalhes do pedido</b></p>
                <div class="restaurante">
                    <img src="../assets/imagem_default.png" alt="imagem restaurante">
                    <p>Nome restaurante</p>
                </div>   
            

                <div class="total-entrega">
                    <p><b>Total com entrega</b></p>
                    <p>R$ 45,00</p>  
                
                </div>

             </div>
            
            
            


        </div>    


    </div>
</template>
<script>
export default {
    name: "AcompanharPedido",
}
</script>
<style scoped>

.viewAcompanharPedido{
    background-image: url(../assets/fundoMaps.jpg);
    width: 100vw;
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.cardPrincipal{
    display: flex;
    flex-direction: column;
    border: 5px solid white;
    width: 35vw;
    height: 95vh;
    background-color: white;
    
 
}

.status{
    display: flex;
    align-items: flex-start; 
    font-size: 15px;
    color: #3e3e3e;
    
    
}

.previsao{
    display: flex;
    align-items: flex-start;
    font-size: 20px;
    margin-top: 0.2px;
    
    
} 

.hr-container{
    display: flex;
    justify-content: space-between;    
    
}

hr{
    flex: 0.3;
    height: 4px; 
    background-color: rgb(34, 180, 34); 
    border: none;
    border-radius: 2px;
}


.codigo-pedido{
    font-size: 14px;
    display: flex;
    align-items: flex-start;
    margin-left: 10px;
}

.ponto-verde{
    border-radius: 100%;
    background-color: green;
    width: 20px;
    color: green;
    margin-top: 15px;
    margin-right: 15px;
    
}

.confirmar-pedido{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e2dfdf;
    margin-top: 20px;    
}

.seu-pedido-chegou{
    font-size: 15px;
    margin-bottom: 1px;
    color: #EA1D2C;
}

.frase-confirmacao{
    font-size: 12px;
    color: #3e3e3e;        
}

.btn-confirmar{
    border: none;
    background-color: #EA1D2C;
    height: 5vh;
    width: 20vw;
    margin-bottom: 10px;
    border-radius: 3px;
    color: white;  
    
}

.btn-confirmar:hover{
    background-color: rgb(230, 73, 73);
    cursor: pointer;  

}

.endereco-entrega{
    display: flex;
    text-align: left;
    flex-direction: column;
    font-size: 14px;
    
}

.img-endereco{
    display: flex;
    align-items: center;
}

.img-endereco img{
    display: flex;
    align-items: flex-start;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    
}

.dados-endereco{
    display: flex;
    text-align: left;
    flex-direction: column;   
    
}

.restaurante{
    display: flex;
    align-items: center;
    
}

.restaurante img{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 10px;
    
}

.total-entrega{
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    
}



</style> 