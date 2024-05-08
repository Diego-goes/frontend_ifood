<template>
    <div class="fundo_modal" :style="`transform: translateX(${distanciaModalPedido}vw)`">
        <div class="modal_carrinho">
            <div class="caixa_carrinhocheio">
                <div class="fechar_carrinho">
                    <img src="@/assets/close.png" alt="imagem-close" @click="fecharModalCarrinho">
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
                        <input type="button" class="texto_vermelho" value="Editar">
                        <input type="button" class="texto_vermelho" value="Remover">
                    </div>
                </div>
                <hr>
                <div class="cupom">
                    <img src="@/assets/Cupom.png" alt="imagem-cupom">
                    <a>Cupom</a>
                    <a><input type="button" class="texto_vermelho" value="Ver" id="ver"></a>
                </div>
                <hr>
                <div class="caixas">
                    <a>Total</a>
                    <a>R$Total dos itens</a>
                </div>
                <div class="botao-total">
                    <input type="button" value="Escolher forma de pagamento">
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
            distanciaModalPedido: 50
        }
    },
    methods: {
        fecharModalCarrinho() {
            this.distanciaModalPedido = 50
            setTimeout(() => {
                this.$emit('fecharModalCarrinho')
            }, 300)
        }
    },
    created() {
        setTimeout(() => {
            this.distanciaModalPedido = 0
        }, 300)
    }
}
</script>
<style scoped>
.fundo_modal {
    transition: all 0.3s;
    right: 0;
    top: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    /*background-color: #3e3e3ea5;
    width: 100vw;
    */
    z-index: 1;
}

.fechar_carrinho {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
}
.fechar_carrinho img{
    cursor: pointer;
}

.modal_carrinho {
    height: 100vh;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 350px;
    padding: 20px 5vh;
    padding-bottom: 5vh;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
    box-shadow: -2px 1px 10px lightgray;
}

.caixa_carrinhocheio {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
}

.caixas {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.caixas a:nth-child(1) {
    color: black;
}

.caixas_produto {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.caixas_produto div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.botoes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
}

.texto_vermelho {
    display: flex;
    border: none;
    background-color: rgba(255, 255, 255, 1);
    color: red;
    padding: 10px 10px;
    font-size: 12px;
    cursor: pointer;
}

.cupom {
    display: flex;
    align-items: center;

}

.botao-total {
    display: flex;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    margin-top: 2vw;

}

.botao-total input[type='button'] {
    background-color: red;
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    color: white;
    border: none;
}

* {
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
}

hr {
    width: 100%;
    color: lightgray;
}

a {
    text-decoration: none;
}
</style>
