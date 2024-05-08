<template>
    <div class="caixa_produto">
        <div>
            <a>
                <small>{{ this.itemPedido.qtdItens }}x</small>
                {{ this.itemPedido.nomeProd }}
            </a>
            <a>R$ {{ this.itemPedido.preco * this.itemPedido.qtdItens }}</a>
        </div>
        <div class="botoes">
            <input @click="editarItemPedido" type="button" class="texto_vermelho" value="Editar">
            <input @click="removerItemPedido" type="button" class="texto_vermelho" value="Remover">
        </div>
        <hr>
    </div>
</template>
<script>
export default {
    name: "CardCrudItemCarrinho",
    data() {
        return {
            itemPedido: this.itemPedidoProps
        }
    },
    props: {
        itemPedidoProps: Object
    },
    methods: {
        editarItemPedido() {
            this.$emit('editarItemPedido', this.itemPedido)
        },
        removerItemPedido() {
            this.$emit('removerItemPedido', this.itemPedido)
        },
    }
}
</script>
<style scoped>
hr {
    width: 100%;
    background-color: rgb(190, 190, 190);
    border: 1px solid rgb(245, 245, 245);
}

.caixa_produto {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 95%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.caixa_produto div:nth-child(1) {
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
</style>