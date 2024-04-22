<template>
    <div class="sliderComp">
        <div class="divOverflow">
            <div class="mainSlider" :style="`margin-left: ${marginLeft}`" ref="mainSlider">
                <slot>Nenhum dado registrado...</slot>
            </div>
        </div>
        <div class="btns">
            <img :class="`btnSlider`" src="@/assets/anterior.png" alt="" @click="exibirAnterior" ref="btnAnterior">
            <img :class="`btnSlider`" src="@/assets/proximo.png" alt="" @click="exibirProximo" ref="btnProximo">
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
        // distancia > 0     Esquerda -> Direita
        // distancia < 0     Esquerda <- Direita
        exibirAnterior() {
            if (this.distancia < 0) {
                this.distancia += this.intervalo
            }
        },
        exibirProximo() {
            this.distancia -= this.intervalo
        },
        desabilitarBtn(btnHtml) {
            btnHtml.style.opacity = "20%"
            btnHtml.style.cursor = "default"

        },
        habilitarBtn(btnHtml) {
            btnHtml.style.opacity = "50%"
            btnHtml.style.cursor = "pointer"
        },
        widthMainSlider() {
            let mainSlider = this.$refs.mainSlider
            let width = this.pegarCss(mainSlider).width
            width = Number(width.replace('px', ''))
            return width
        },
        pegarCss(el){
            return window.getComputedStyle(el)
        },
        pegarCoordenadas(el){
            return el.getBoundingClientRect();
        }
    },
    computed: {
        marginLeft() {
            return `${this.distancia}vw`
        },
        btnAnterior() {
            return this.$refs.btnAnterior
        },
        btnProximo() {
            return this.$refs.btnProximo
        },
        ultimoChildMainSlider(){
            return this.$refs.mainSlider.lastElementChild
        }
    },
    watch: {
        'distancia'() {
            if (this.distancia >= 0) {
                this.desabilitarBtn(this.btnAnterior)
            } else {
                this.habilitarBtn(this.btnAnterior)
            }
            // BTN_PROXIMO
            // Se ultimo elemento dentro da area visivel, desabilitar btn
            // area visiveil == top> 0, left > 0
            let leftEl = this.pegarCoordenadas(this.ultimoChildMainSlider).left
            let larguraTela = window.innerWidth 
            console.log(this.pegarCss(this.ultimoChildMainSlider).left);
            console.log(`\n\n left: ${leftEl}\n\n`);
            console.log(`\n\n larguraTela: ${larguraTela}\n\n`);
            if (leftEl > larguraTela) {
                this.desabilitarBtn(this.btnProximo)
            } else {
                this.habilitarBtn(this.btnProximo)
            }

        }
    },
    mounted() {
        this.desabilitarBtn(this.btnAnterior)
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

.disabled {
    opacity: 20% !important;
    cursor: default !important;
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