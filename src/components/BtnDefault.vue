<template>
    <input :type="type" v-bind:value="value">
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
            default: true
        },
        value: {
            type: String,
            default: 'Clique aqui'
        },
        type: {
            type: String,
            default: 'button'
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

input[type="submit"] {
    background-color: #ce2020;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

input[type='button'] {
    background-color: #fff;
    color: #ce2020;
    border: 1px solid #ce2020;
    padding: 10px 20px;
    cursor: pointer;
}
</style>