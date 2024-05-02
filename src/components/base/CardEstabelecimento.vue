<template>
    <div class="cardEstabelecimentos" @click="irPararEstab">
        <!-- CARD ESTABELECIMENTOS -->
        <img class="mainImage" :src="this.imagemPathProps" alt="">
        <div class="mainCard">
            <p>{{ this.nomeEstabProps }}</p>
            <small>{{ this.nomeCategoriaProps }}</small>
        </div>
        <div>
            <img class="pin_verificado" src="@/assets/pin_verificado.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardEstabelecimento',
    data() {
        return {
            imagemBase64: null
        }
    },
    props: {
        nomeEstabProps: String,
        nomeCategoriaProps: String,
        imagemPathProps: {
            type: String,
            default: '@/assets/imagem_default.png'
        },
        estabelecimentoIdProps: Number
    },
    methods: {
        irPararEstab() {
            localStorage.setItem('estabSelecionado',`${this.estabelecimentoIdProps}`);
            this.$router.push('/paginaEstabelecimento')
        }
    }
}
</script>
<style scoped>
img {
    height: auto;
    object-fit: contain;
    border-radius: 1rem;
}

.mainImage {
    width: 10vw;
}

p {
    margin: 0;
}

.cardEstabelecimentos {
    display: flex;
    padding: 1.5vw 1vw;
    gap: 0.6vw;
    box-shadow: 1px 1px 5px rgb(219, 219, 219);
    border-radius: 0.8rem;
    min-width: fit-content;
    transition: all 0.3s;
    background-color: rgb(248, 248, 248);
    gap: 1vw;
}

.cardEstabelecimentos:hover {
    box-shadow: 1px 1px 10px rgb(181, 181, 181);
    transform: scale(1.05);
}

.mainCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
}

.pin_verificado {
    width: 1.2rem;
}
</style>