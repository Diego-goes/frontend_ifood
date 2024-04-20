<template>
    <div class="body-pagina-logada">
        <label class="filter" for="inputFilter">
            <img src="@/assets/lupa.png" alt="icon_filter">
            <input type="text" id="inputFilter" placeholder="Busque por item ou loja">
        </label>
        <CardEstabelecimento style="display: none" />
        <section class="section-categorias">
            <h4>Categorias</h4>
            <SliderComp>
                <CardCategoria v-for="i in 300" :key="i" :nome="'Categoria '+i" />
            </SliderComp>
        </section>
        <section class="section-estabelecimentos">
            <h4>Estabelecimentos Parceiros</h4>
            <SliderComp>
                <CardEstabelecimento v-for="i in 300" :key="i" :nome="'Estabelecimento '+i" />
            </SliderComp>
        </section>
    </div>
</template>

<script>
import CardCategoria from '@/components/base/CardCategoria.vue'
import CardEstabelecimento from '@/components/base/CardEstabelecimento.vue'
import SliderComp from '@/components/base/SliderComp.vue'
export default {
    name: "PaginaLogada",
    components: {
        CardCategoria,
        CardEstabelecimento,
        SliderComp
    }
}
</script>

<style scoped>
.body-pagina-logada {
    display: flex;
    flex-direction: column;
    align-items: left;
}

.filter {
    display: flex;
    align-items: center;
    background-color: rgb(219, 232, 255);
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;
    width: 20vw;
    min-width: fit-content;
    margin-bottom: 4vw;
}

input:focus {
    outline: none;
}

.filter img {
    width: 1.5rem;
}

.filter input {
    border: 0;
    background-color: transparent;
    padding: 0.3rem 4rem 0.3rem 1rem;
}

h4 {
    text-align: left;
    margin-left: 2vw;
}


/*
* {
    border: 1px solid red !important;
}
*/
</style>