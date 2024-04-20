<template>
    <div class="cardCategoria">
        <img src="@/assets/image 16.png" alt="">
        <p>Lanches</p>
    </div>
</template>
<script>
export default {
    name: 'CardCategoria',
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.cardCategoria {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 8rem;
    min-width: 10vw;
}

.cardCategoria img {
    max-width: 100%;
}
.cardCategoria p {
    margin: 0;
}
</style>