<template>
    <div class="fundo_modal">
        <div class="modal_carrinho">
            <div class="caixa_carrinhocheio">
                <div class="fechar_carrinho">
                    <img src="../assets/close.png" alt="imagem-close">
                </div>
                <a>Seu pedido em</a>
                <div class="caixas">
                    <a href="">Nome do Restaurante</a>
                    <a href="" class="texto_vermelho">Ver cardápio</a>
                </div>
                <hr>
                <div class="caixas_produto">
                    <div>
                        <a>Nome do produto</a>
                        <a>Valor do produto</a>
                    </div>
                    <div class="botoes">
                        <input type="button" class="texto_vermelho" value="Editar"></input>
                        <input type="button" class="texto_vermelho" value="Remover"></input>
                    </div>
                </div>
                <hr>
                <div class="cupom">
                    <img src="../assets/Cupom.png" alt="imagem-cupom">
                    <a>Cupom</a>
                    <a><input type="button" class="texto_vermelho" value="Ver" id="ver"></input></a>
                </div>
                <hr>
                <div class="caixas">
                    <a>Total</a>
                    <a>R$Total dos itens</a>
                </div>
                <div class="botao-total">
                    <input type="button" value="Escolher forma de pagamento"></input>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalCarrinhoCheio',
    data() {
        return {

        }
    }
}
</script>
<style scoped></style>