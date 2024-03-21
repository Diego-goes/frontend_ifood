<template>
    <span for="statusAtivo">Status Ativo</span>
    <select v-model="value" class="selectCamposForm" name="statusAtivo" id="statusAtivo"
        @click="mudouStatus($event.target.value)">
        <option value="true">Selecione</option>
        <option value="true">Ativo</option>
        <option value="false">Inativo</option>
    </select>
</template>
<script>
export default {
    name: 'SelectForm',
    data() {
        return {
        }
    },
    props: {
        value: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>
div {
    display: flex;
    flex-direction: column;
    width: 18vw;
}

span {
    margin-left: 8%;
    margin-bottom: -5px;
    z-index: 1;
    background-color: white;
    border-radius: 10px;
    color: gray;
    padding: 0px 3%;
    width: 5%;
    min-width: fit-content;
    font-size: 0.8rem;
}

input::placeholder {
    color: lightgray;
    font-size: 0.9rem;
}

input {
    padding: 2% 3%;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 20px;
    font-size: 1rem
}
</style>