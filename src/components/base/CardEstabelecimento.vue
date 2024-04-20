<template>
    <div class="cardEstabelecimentos">
        <!-- CARD ESTABELECIMENTOS -->
        <img class="mainImage" src="@/assets/mcdonalds_logo.png" alt="">
        <div class="mainCard">
            <p>Mcdonald's</p>
            <small>Lanches</small>
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
    box-shadow: 1px 1px 5px rgb(174, 174, 174);
    border-radius: 0.4rem;
    min-width: fit-content;
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