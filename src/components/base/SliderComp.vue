<template>
    <div class="sliderComp">
        <div class="divOverflow">
            <div class="mainSlider" :style="`margin-left: ${marginLeft}`">
                <slot>Nenhum dado registrado...</slot>
            </div>
        </div>
        <div class="btns">
            <img class="btnSlider" src="@/assets/anterior.png" alt="" @click="exibirAnterior">
            <img class="btnSlider" src="@/assets/proximo.png" alt="" @click="exibirProximo">
        </div>
    </div>
</template>
<script>
export default {
    name: 'SliderComp',
    data() {
        return {
            distancia: 0,
            intervalo: 100
        }
    },
    methods: {
        exibirAnterior() {
            this.distancia += this.intervalo
            // let primeiroCard = document.querySelector('.mainSlider> :first-child')
            // primeiroCard.style.marginLeft = this.marginLeft;
        },
        exibirProximo() {
            this.distancia -= this.intervalo
            // let primeiroCard = document.querySelector('.mainSlider> :first-child')
            // primeiroCard.style.marginLeft = this.marginLeft
        }
    },
    computed: {
        marginLeft() {
            console.log(this.distancia)
            return `${this.distancia}vw`
        }
    }
}
</script>
<style scoped>
.sliderComp {
    display: flex;
    flex-direction: column;
    width: 60vw;
    align-items: center;
    justify-content: space-between;
}

.divOverflow {
    display: flex;
    overflow-x: hidden;
    width: 100vw;
    justify-content: flex-start;
}

.mainSlider {
    display: flex;
    gap: 3vw;
    padding: 1vw 0px;
    transition: all 0.5s;
}

/*
.mainSlider> :first-child {
    background-color: rgb(55, 0, 255);
}
*/
.btns {
    transform: translateY(-15vh);
    width: 85vw;
    display: flex;
    justify-content: space-between;
}

.btnSlider {
    width: 2rem;
    object-fit: contain;
    opacity: 50%;
    z-index: 1;
}

.btnSlider:hover {
    opacity: 100%;
    cursor: pointer;
    transition: all 0.5s;
}
</style>