<template>
    <!-- Aqui vai o HTML. Como se fosse o BODY -->
    <div class="fundo_modal">
        <div class="modal_selecionado">
            <div class="caixa_selecionado">
                <div class="fechar_modal">
                    <img src="@/assets/SetaVermelha.png" alt="imagem-close">
                </div>
                <div class="imagem_pedido">
                    <img src="@/assets/imagem_default.png" alt="imagem_produto">
                </div>
                <div class="textos">
                    <a>Nome do Produto</a>
                    <a>Descrição do Produto</a>
                    <a>Valor do Produto</a>
                    <div class="nome_nota">
                        <a>Nome do Restaurante</a>
                        <a>Nota do Restaurante</a>
                    </div>
                    <a>Algum comentário?</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ModalItemPedido"
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

.fechar_modal {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.modal_selecionado {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 800px;
    padding: 20px 5vh;
    padding-bottom: 5vh;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
}

.caixa_selecionado {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
}

.textos {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    gap: 15px;
}

.nome_nota {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
}

* {
    border: 1px dashed lightgray !important;
}
</style>