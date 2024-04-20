<template>
    <div class="cardEstabelecimentos">
        <!-- CARD ESTABELECIMENTOS -->
        <img class="mainImage" src="@/assets/mcdonalds_logo.png" alt="">
        <div class="mainCard">
            <p>Mcdonald's</p>
            <small>{{this.nome}}</small>
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

        }
    },
    props:{
        nome: String
    }
}
</script>
<style scoped>
img {
    height: auto;
    object-fit: contain;
}

.mainImage {
    width: 50%;
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
}

.cardEstabelecimentos:hover {
    box-shadow: 1px 1px 5px rgb(208, 208, 208);
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