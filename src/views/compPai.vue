<template>
    <div>
        <compFilho :exibir="exibirFilho" />
        <input type="button" value="Exibir" @click="exibir">
    </div>
</template>

<script>
import CompFilho from '../components/CompFilho.vue';

export default {
    data() {
        return {
            exibirFilho: false,
        };
    },
    methods: {
        exibir() {
            this.exibirFilho = !this.exibirFilho;
            this.exibirFilho = !!this.exibirFilho;
            // this.exibirFilho = true;
            console.log(`exibirFilho : ${this.exibirFilho}`)
        },
    },
    components: {
        CompFilho,
    },
};
</script>