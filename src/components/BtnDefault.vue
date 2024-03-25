<template>
    <input :type="type" :value="value" :class="classe">
</template>
<script>
export default {
    name: 'BtnDefault',
    data() {
        return {

        }
    },
    props: {
        preenchido: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: 'Clique aqui'
        },
        type: {
            type: String,
            default: 'button'
        }
    },
    computed: {
        classe() {
            if (this.preenchido == true) {
                return 'preenchido'
            } else {
                return 'naoPreenchido'

            }
        }
    }
}
</script>
<style scoped>
input[type='button'],
input[type="submit"] {
    width: 30%;
    min-width: fit-content;
    font-size: 0.7rem;
    border-radius: 10px;
}

.preenchido {
    background-color: #ce2020;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

.naoPreenchido {
    background-color: #fff;
    color: #ce2020;
    border: 1px solid #ce2020;
    padding: 10px 20px;
    cursor: pointer;
}
</style>