<template>
    <div class="dadosEndereco">
        <div class="tagsEspecificasEnderecos">
            <select v-model="selectEndereco.value" name="selectEnderecos" id="selectEndereco">
                <option value="">Endereços</option>
                <!-- <option v-for="end, index in enderecos" :key="end.enderecoId" :value="index">{{ end.logradouro }}
                </option> -->
            </select>
        </div>
        <div class="camposEnderecos">
            <!-- <InputForm :type="'text'" :spanText="'Logradouro'" :value="endereco.logradouro"
                :placeholder="'Digite seu logradouro'" />
            <InputForm :type="'text'" :spanText="'CEP'" :value="endereco.cep" :placeholder="'Digite seu CEP'" />
            <InputForm :type="'text'" :spanText="'Bairro'" :value="endereco.bairro"
                :placeholder="'Digite seu bairro'" />
            <InputForm :type="'text'" :spanText="'Cidade'" :value="endereco.cidade"
                :placeholder="'Digite sua cidade'" />
            <InputForm :type="'text'" :spanText="'Estado'" :value="endereco.estado"
                :placeholder="'Digite seu estado'" />
            <InputForm :type="'number'" :spanText="'Numero'" :value="endereco.numero"
                :placeholder="'Digite seu numero'" />
            <InputForm :type="'text'" :spanText="'Complemento'" :value="endereco.complemento"
                :placeholder="'Digite seu complemento'" />
            <InputForm :type="'text'" :spanText="'Apelido'" :value="endereco.complemento"
                :placeholder="'Digite o apelido'" />
            <InputForm :type="'text'" :spanText="'Ponto de Referência'" :value="endereco.complemento"
                :placeholder="'Digite uma referência'" />
            <InputForm :type="'text'" :spanText="'Coordenadas'" :value="endereco.complemento"
                :placeholder="'Digite as coordenadas'" /> -->
        </div>
    </div>
</template>

<script>
// import InputForm from "./InputForm.vue";
export default {
    name: 'CardUsu',
    data() {
        return {
            enderecos: this.enderecos,
            endereco: this.enderecos[0],
            selectEndereco: {
                text: '',
                value: 2
            }
        }
    },
    props: {
        dadosEnderecos: Object
    },
    components: {
        // InputForm
    },
    methods: {
    },
    created(){
        console.log(`enderecos : ${this.enderecos}`)
    }
}
</script>

<style scoped>
.dadosEndereco,
select {
    font-size: 0.6rem;
}

.tagsEspecificasEnderecos {
    display: flex;
}

.camposEnderecos {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    justify-content: space-between;
}

#selectEndereco {
    padding: 2% 3%;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 20px;
}
</style>