<template>
    <div class="fundo_modal">
            <div class="modal_perfil">
                    <div class="caixa_perfil">
                        <div class="nome_caixa">Olá, NOME PESSOA</div>
                        <div class="caixas"> 
                            <img src="@/assets/Imagemchat.png" alt="imagem-chat">
                            <a>Chats</a>
                        </div>
                        <div class="caixas">
                            <img src="@/assets/imagempedidos.png" alt="imagem-pedidos">
                            <a>Pedidos</a>
                        </div>
                        <div class="caixas">
                            <img src="@/assets/imagempagamento.png" alt="imagem-pagamento">
                            <a>Pagamento</a>
                        </div>
                        <div class="caixas">
                            <img src="@/assets/imagemcupom.png" alt="imagem-cupom">
                            <a>Meus cupons</a> 
                        </div>
                        <div class="caixas">
                            <img src="@/assets/imagemdados.png" alt="imagem-dados">
                            <a>Meus dados</a>
                        </div>
                    </div>
            </div>
        </div>
</template>
<script>
export default{
    name:'ModalPerfil',
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.fundo_modal {
    position: fixed;
    background-color: #3e3e3ea5;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal_perfil {
    background-color:  rgba(255, 255, 255, 1);;
    display        : flex;
    width          : 300px;
    padding: 15px 0px;
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
}

.caixa_perfil{
    background-color: rgba(255, 255, 255, 1);
    display        : flex;
    height         : 350px;
    width          : 250px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.caixa_perfil img {
    width: 30px;
}

.caixas{
    background-color:  rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}

.caixas a{
    width: 10vw;
}

.caixas a:hover{
    color: red;
}

.nome_caixa{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    font-weight: bold;
    font-size: 20px;
}

*{
    font-family     : "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
}
</style>