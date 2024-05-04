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
            
            <hr>
            <p>Pague pelo Site</p>
                <div class="btn-pix">
                    <img src="../assets/logoPix.png" alt="imagem pix">
                    <div class="dados-pix">
                        <p>Pague com Pix</p>
                        <p> Use o QR Code ou copie e cole o código</p>

                    </div>
                </div>
           
            <p>Adicione um cartão no Hifood</p>
            <div class="addcartao">
                <div>
                    <p>É prático, seguro e você não perde nenhum minuto a mais quando seu pedido chegar.</p>
                    <input type="button"  value="Adicionar novo cartão">
                </div>
                <img src="../assets/formaPagamento.png" alt="Forma de pagamento">
            </div>
            <hr>
            <input type="button" value="Fazer pedido">

        </div>
        <div class="container-direito">
            <p class="texto-cinza">Seu pedido em</p>
            <p>Nome do restaurante</p>
            <small>categoria</small>
            <hr>
            <div class="card-itemPedido">
                <div class="dados-pedido">
                    <p>nome do prato</p>
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
                    <p>Grátis</p>
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

}

.container-esquerdo{
    display: flex;
    text-align: left;
    flex-direction: column;
    
}

.container-esquerdo h2{
    font-size: 2.5rem;
}

.subtitulo{
    width: fit-content;
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
}

.endereco p{
    margin: 0;
}

.dados-endereco p:nth-child(1){
    font-weight: 550;
}

.btn-opcao{
    height: min-content;
    background-color: transparent; 
    border: none;

}










.container-direito{
    display: flex;
    flex-direction: column;
    
}



.btn-pix{
    display: flex;
}

.dados-pix{
    
}

.addcartao{
    display: flex;
}

.dados-pedido{
    display: flex;
}

.valores-pedido div{
    display: flex;
    justify-content: space-between;
}


.texto-cinza{
    color: #717171;

}

.texto-vermelho{
    color: #EA1D2C;
}


*{
    border: 1px solid red;
}
    

</style>