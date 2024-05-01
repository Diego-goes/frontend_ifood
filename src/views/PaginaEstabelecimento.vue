<template>
    <div class="viewPaginaEstabelecimento">
        <div class="imagem-inicial">
            <img src="../assets/imagem_alteravel.avif" alt="imagem inicial" >
        </div>
        
        <div class="estabelecimento">
            <img id="foto_do_estabelecimento" src="../assets/imagem_default.png" alt="imagem do estabelecimento" >
                <div class="nome-restaurante">
                    <p>Nome do Estabelecimento</p>
                </div>   
            <img id="estrela" src="../assets/estrela.png" alt="estrela avaliação">
            <p id="avaliacao">4.7</p>
            <p id="sifrao">$</p>
            <p id="pedido-minimo">Pedido mínimo R$ 30,00</p>
                    
        </div> 
        
        <div class="destaque">
            <h3>Pratos</h3>
            
                <div class="card-destaque">
                    <img class="imagem-produto" src="../assets/imagem_default.png" alt="">
                    <p class="nome-prato">Nome do prato</p>
                    <p class="descricao-prato">Descrição do prato</p>
                    <p class="valor-prato">R$ 29,90</p> 

                </div>

        </div>

    </div>
</template>
<script>
export default{
    name: "PaginaEstabelecimento"
}
</script>
<style scoped>

.viewPaginaEstabelecimento{
    display: flex;
    flex-direction: column; 
    width: 97vw;
    
    
}

.imagem-inicial{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%; 
    filter: brightness(0.7);  
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    height: 35vh;

}

.estabelecimento{
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1vh;
    
}

#foto_do_estabelecimento{
    display: flex;
    width: 80px;
    height: auto;
    border-radius: 100%;
    margin-right: 10px;
    
}

.nome-restaurante{
    display: flex;
    font-size: 1.625rem;
    font-weight: 500;
    letter-spacing: -1px;
    color: #3e3e3e;
    margin-right: 20px
}

#estrela{
    display: flex;
    width: 20px;
    height: auto;
    margin-right: 5px;
}

#avaliacao{
    color: #fcbb00;
    font-size: 14px;
    margin-right: 47vw;
    
}

#sifrao{
    border: 4px solid #a6a6a5 ;
    border-radius: 100%;
    text-align: center;
    color: #fff;
    background-color: #a6a6a5;
    margin-right: 5px;
    
}
 #pedido-minimo{
    color: #a6a6a5
}

.destaque{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 4vh;
    font-size: 25px;
}

.card-destaque{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    box-shadow: 3px 3px 3px 3px  rgba(0, 0, 0, 0.3);
}

.imagem-produto{
    
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    height: 25vh;
    width: 30vw;
}

.nome-prato{
    font-size: 20px;
    color: #3e3e3e;
    
}

.descricao-prato{
    font-size: 14px;
    color: #717171;

}

.valor-prato{
    font-size: 17px;
    color: #50a773;

}



</style>