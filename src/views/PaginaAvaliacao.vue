<template>
    <div class="viewPaginaAvaliacao">
        <div class="container">
            <p class="fraseprincipal">Avalie seu pedido e sua entrega.</p>
            <div class="nome-restaurante">
                <p><b>Nome do restaurante</b></p>
            </div>

            <div class="avaliacao">
                <img src="../assets/imagem_default.png" alt="img restaurante" class="img">
                <div class="card">
                    <img src="../assets/emojimuitoinsatisfeito.png" alt="emoji" class="img">
                    <p>Muito Insatisfeito</p>
                </div>
                <div class="card">
                    <img src="../assets/emojiinsatisfeito.png" alt="emoji" class="img">
                    <p>Insatisfeito</p>
                </div>
                <div class="card">
                    <img src="../assets/emojineutro.png" alt="emoji" class="img">
                    <p>Neutro</p>
                </div>
                <div class="card">
                    <img src="../assets/emojisatisfeito.png" alt="emoji" class="img">
                    <p>Satisfeito</p>
                </div>
                <div class="card">
                    <img src="../assets/emojimuitosatisfeito.png" alt="emoji" class="img">
                    <p>Muito satisfeito</p>
                </div>
            </div>



            <div class="entrega">
                <p><b>Entrega</b></p>
            </div>

            <div class="avaliacao">
                <img src="../assets/iconeEntrega.png" alt="img entrega" class="img">
                <div class="card">
                    <img src="../assets/emojimuitoinsatisfeito.png" alt="emoji" class="img">
                    <p>Muito Insatisfeito</p>
                </div>
                <div class="card">
                    <img src="../assets/emojiinsatisfeito.png" alt="emoji" class="img">
                    <p>Insatisfeito</p>
                </div>
                <div class="card">
                    <img src="../assets/emojineutro.png" alt="emoji" class="img">
                    <p>Neutro</p>
                </div>
                <div class="card">
                    <img src="../assets/emojisatisfeito.png" alt="emoji" class="img">
                    <p>Satisfeito</p>
                </div>
                <div class="card">
                    <img src="../assets/emojimuitosatisfeito.png" alt="emoji" class="img">
                    <p>Muito satisfeito</p>
                </div>
            </div>

        </div>





    </div>

</template>
<script>
export default {
    name: "PaginaAvaliacao",
}
</script>
<style scoped>
.viewPaginaAvaliacao {
    background-image: url(../assets/fundoTelaAvaliacao.jpg);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

}

.container {
    display: flex;
    flex-direction: column;
    width: 38vw;
    height: 70vh;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 15px;

}

.fraseprincipal {
    font-size: 25px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    color: #EA1D2C;

}

.nome-restaurante {
    display: flex;
    flex-direction: column;
    text-align: left;
}


.avaliacao {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30px;
    gap: 20px;
    
}

.img {
   width: 60px;
   height: auto;
   border-radius: 100px;
    
}

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20vh;
    padding: 2px;
    border-radius: 5px;
    background-color: #eeecec;
    cursor: pointer;
    font-size: 12px;
    transition-duration: 0.6s;
}

.card:hover{
    background-color: #dfd9e2;
    
}

.entrega{
    display: flex;
    flex-direction: column;
    text-align: left;

}


</style>