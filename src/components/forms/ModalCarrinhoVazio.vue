<template>
    <div class="fundo_modal">
        <div class="modal_carrinho">
            <div class="caixa_carrinhovazio">
                <div class="fechar_carrinho">
                    <img src="../../assets/close.png" alt="imagem-close">
                </div>
                <div>
                    <img src="../../assets/icone_carrinhovazio.png" alt="imagem-carrinhovazio">
                </div>
                <div>
                    <a>Sua sacola está vazia</a>
                </div>
                <div>
                    <a>Adicione itens</a>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalCarrinhoVazio',
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.fundo_modal {
    display: flex;
    position: fixed;
    background-color: #3e3e3ea5;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.fechar_carrinho {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
}

.modal_carrinho {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 350px;
    padding: 15px 10px;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
}

.caixa_carrinhovazio {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

* {
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
}
</style>