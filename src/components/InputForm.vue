<template>
    <div>
        <span>{{ spanTextProp }}</span>
        <input @change="retornarDadoInput" :type="typeProp" v-model="value" :placeholder="placeholderProp"
            :disabled="!podeEditar" :required="requeridoProp" :pattern="patternProp">

    </div>
</template>
<script>
export default {
    name: 'InputForm',
    data() {
        return {
            value: this.valueProp,
            nomeAtributo: this.nomeAtributoProp,
            podeEditar: this.podeEditarProp
        }
    },
    methods: {
        validateValue(value) {
            return value !== undefined && value !== 'undefined'; // Simplified validation
        },
        retornarDadoInput() {
            let inputData = {
                'value': this.formatarInput,
                'nomeAtributoProp': this.nomeAtributo
            }
            this.$emit('retornarDadoInput', inputData)
        }
    },
    props: {
        spanTextProp: {
            type: String,
            default: ''
        },
        placeholderProp: {
            type: String,
            default: ''
        },
        valueProp: {
            type: [String, Number],
            default: ''
        },
        typeProp: {
            type: String,
            default: 'text'
        },
        nomeAtributoProp: {
            type: String,
            default: ''
        },
        podeEditarProp: {
            type: Boolean,
            default: true
        },
        requeridoProp: {
            type: Boolean,
            default: false
        },
        patternProp: {
            type: String,
            default: '.*'
        },
    },
    computed: {
        formatarInput() {
            if (this.value == undefined || this.value == 'undefined') {
                return ''
            } else if (this.nomeAtributo == 'cep' && this.value.includes('-')) {
                return this.value.replace('-', '')
            } else {
                return this.value
            }
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
    color: rgb(152, 152, 152);
    padding: 0px 3%;
    width: 5%;
    min-width: fit-content;
    font-size: 0.6rem;
}

input::placeholder {
    color: lightgray;
    font-size: 0.8rem;
}

input {
    padding: 2% 3%;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 20px;
    font-size: 0.8rem
}
</style>