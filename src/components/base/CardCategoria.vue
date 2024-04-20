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
    padding: 0.8vw;
    border-radius: 1rem;
}

.cardCategoria:hover {
    transition: all 0.3s;
    box-shadow: 1px 1px 5px rgb(208, 208, 208);
    transform: scale(1.05);
}

.cardCategoria img {
    max-width: 100%;
}

.cardCategoria p {
    margin: 0;
}
</style>