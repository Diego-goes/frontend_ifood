<template>
    <div class="sliderComp">
        <img class="btnSlider" src="@/assets/anterior.png" alt="">
        <div class="mainSlider">
            <slot>Nenhum dado registrado...</slot>
        </div>
        <img class="btnSlider" src="@/assets/proximo.png" alt="">
    </div>
</template>
<script>
export default {
    name: 'SliderComp',
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.sliderComp {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.mainSlider {
    display: flex;
    gap: 3vw;
    width: 80vw;
    padding: 1vw 0px;
}

.btnSlider {
    position: relative;
    width: 2rem;
    object-fit: contain;
    opacity: 50%;
}

.btnSlider:hover {
    opacity: 100%;
    cursor: pointer;
    transition:all 0.5s;
}
</style>