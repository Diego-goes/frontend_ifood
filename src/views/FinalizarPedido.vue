<template>
    <div class="viewFinalizarPedido">  
        <div class="container-esquerdo">
            <h2>Finalize seu pedido</h2>
            <div class="subtitulo">
                <p>Entrega</p>
                <hr>
            </div>
            <div class="endereco">
                <img src="../assets/google-maps.png" alt="Maps" height="100px">
                <div class="dados-endereco">
                    <p>Endereço</p>
                    <p class="texto-cinza">São Paulo, SP</p>
                </div>
                <input class="btn-opcao texto-vermelho" type="button" value="Trocar">
                
            </div>
            
            <hr class="linha-divisão">
            <p class="pague-pelo-site">Pague pelo site</p>

                <div class="btn-pix">
                    <img class="img-pix" src="../assets/logoPix.png" alt="imagem pix">
                    <div class="dados-pix">
                        <p>Pague com Pix</p>
                        <p> Use o QR Code ou copie e cole o código</p>

                    </div>
                </div>
           
            <p class="add-cartao">Adicione um cartão no Hifood</p>
            <div class="addcartao">
                <div>
                    <input type="button" value="Crédito" class="btn-cartao">
                    <input type="button" value="Débito" class="btn-cartao">
                    <p class="frase-pix">É prático, seguro e você não perde nenhum minuto a mais quando seu pedido chegar.</p>    
                </div>
                <img src="../assets/formaPagamento.png" alt="Forma de pagamento">
            </div>
            <hr>
            <input type="button" value="Fazer pedido" class="btn-fazer-pedido">

        </div>
        <div class="container-direito">
            <p class="texto-cinza">Seu pedido em...</p>
            <p class="nome-restaurante">Nome do restaurante</p>
            <small>Categoria</small>
            <hr>
            <div class="card-itemPedido">
                <div class="dados-pedido">
                    <p>Nome do prato</p>
                    <p>R$ 00,00</p>
        
                </div>
                <div class="opcoes-itemPedido">
                    <input  class="btn-opcao texto-vermelho"  type="button" value="Editar">
                    <input  class="btn-opcao texto-cinza" type="button" value="Remover">
                </div>
                <hr>
            </div> 
            <div class="valores-pedido">
                <div  class="texto-cinza">
                    <p>Subtotal</p>
                    <p>R$ 00,00</p>
                </div>

                <div  class="texto-cinza">
                    <p>Taxa de entrega</p>
                    <p id="gratis">Grátis</p>
                </div>

                <div>
                    <p>Total</p>
                    <p>R$ 00,00</p>
                </div>
            </div>    
        </div>    
    </div>
    
</template>
<script>
export default {
    name: "FinalizarPedido",
}
</script>
<style scoped>

.viewFinalizarPedido{
    display: flex;
    width: 90vw;

}

.container-esquerdo{
    display: flex;
    text-align: left;
    flex-direction: column;
    
}

.container-esquerdo h2{
    font-size: 2.5rem;
    color: #3e3e3e;
}

.subtitulo{
    width: fit-content;
    margin-bottom: 10px;
}

.subtitulo p{
    color:#EA1D2C;
    font-weight: 550;
    margin-bottom: 0;
   
}
.subtitulo hr{
    width: 100%;
    border: 0.15rem solid #EA1D2C;

}

.endereco{
    display: flex;
    
}

.endereco img{
    width: 5vw;
    object-fit: contain;
    margin-right: 15px;
}

.endereco p{
    margin: 0;
    margin-right: 35vh;
    margin-top: 18px;
    
}

.dados-endereco p:nth-child(1){
    font-weight: 550;
    
}

.btn-opcao{
    height: min-content;
    background-color: transparent; 
    border: none;
    margin-top: 3vw;
    font-size: 15px;

}

hr{
    width: 100%;
    border: 1px solid #f5f5f9;
}

.pague-pelo-site{

    font-weight: 550;
    color: #EA1D2C;
    margin-top: 5vh;

}

.img-pix{
    height: 50px; 
    width: auto;
    margin-top: 3vh;
    margin-right: 2vw;
}

.btn-pix{
    display: flex;   
    border: 1px solid #f5f5f9;    
    margin-top: 2vh;

}

.add-cartao{
    font-weight: 550;
    color: #EA1D2C;
    margin-top: 7vh;  
}

.btn-cartao{
    width: 100px; 
    height: 30px;
    border: none;
    margin-right: 10px;
    color: #3e3e3e;
    margin-top: 20px;
    border-radius: 2px;
    cursor: pointer;
}

.frase-pix{
    margin-top: 50px;
    font-style: italic
}

.btn-fazer-pedido{
    width: 300px; 
    height: 50px;
    border: none;
    background-color: #EA1D2C;
    color: white;
    align-items: center;
    margin-left: 25vh;
    cursor: pointer;
}

/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */


.container-direito{
    display: flex;
    flex-direction: column;
    width: 40vw;
    margin-top: 5%;
    border: 20px solid white;
    background-color: white;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2); 
    
}

.nome-restaurante{
    font-size: 20px;
}

.addcartao{
    display: flex;
}

.dados-pedido{
    display: flex;
    justify-content: space-between;

}

.valores-pedido div{
    display: flex;
    justify-content: space-between;
}

#gratis{
    color: green;
}

.texto-cinza{
    color: #717171;

}

.texto-vermelho{
    color: #EA1D2C;
}
 

</style>