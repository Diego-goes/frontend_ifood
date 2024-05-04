<template>
    <div class="card-destaque" @click="abriItemPedido">
        <img class="imagem-produto" :src="imagemPathProps" alt="">
        <div>
            <p class="nome-prato">{{ this.nomeProps }}</p>
            <p class="descricao-prato">Descrição do prato</p>
            <p class="valor-prato">R${{ this.precoProps }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardProdutoEstab',
    props: {
        nomeProps: String,
        imagemPathProps: String,
        precoProps: Number,
        produtoIdProps: Number
    },
    methods:{
        abriItemPedido(){
            this.$emit('abriItemPedido',this.produtoIdProps)
        }
    }
}
</script>
<style scoped>
p{
    width: fit-content;
}
.card-destaque {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
    padding: 1vw 3vw;
    border-radius: 1rem;
}

.card-destaque:hover {
    transform: scale(1.1);
    transition: all 0.3s;
}

.imagem-produto {
    height: auto;
    object-fit: contain;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    height: 25vh;
}

.nome-prato {
    font-size: 20px;
    color: #3e3e3e;

}

.descricao-prato {
    font-size: 14px;
    color: #717171;

}

.valor-prato {
    font-size: 17px;
    color: #50a773;

}
</style>