<template>
    <div>
        <span>{{ spanText }}</span>
        <input :type="type" :value="value" :placeholder="placeholder">
    </div>
</template>
<script>
export default {
    name: 'InputForm',
    data() {
        return {
        }
    },
    props: {
        spanText: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
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