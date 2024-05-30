<template>
    <div class="pagina-relatorio">
        <div class="header">
            <img src="../../assets/HifoodPrincipal.png" alt="logo-hifood">
            <div class="seletores">
                <label for="lang">Restaurante <select name="" id="oi">
                        <option value="select">Select</option>
                        <option value="coco bambu">Coco Bambu</option>
                        <option value="lig lig">Lig Lig</option>
                        <option value="burger king">Burger King</option>
                        <option value="taco bell">Taco Bell</option>
                        <option value="pecorino">Pecorino</option>
                        <option value="nanica">Nanica</option>
                        <option value="audi">Mc Donalds</option>
                    </select></label>
                <label for="lang">Local <select name="local" id="local">
                        <option value="select">Select</option>
                        <option value="casa">Casa</option>
                        <option value="trabalho">Trabalho</option>
                        <option value="outros">Outros</option>
                    </select></label>
                <div class="date-container">
                    <label for="date" class="date-label">Data Inicial</label>
                    <input type="date" id="date" class="date-input">
                </div>
                <div class="date-container">
                    <label for="date" class="date-label">Data Final</label>
                    <input type="date" id="date" class="date-input">
                </div>
            </div>
        </div>
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalRelatorio',
}
</script>

<style scoped>
.header {
    display: flex;
    width: 95vw;
    height: 15vh;
    justify-content: space-between;
    align-items: center;
}

.header img {
    width: 120px;
}

.seletores {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 35px;
}

.btn-select {
    display: flex;
    text-align: center;
}

select {
    background: rgb(218, 10, 10);
    color: #fff;
    border-color: rgb(218, 10, 10);
    width: 8vw;
    height: 5vh;
    padding: 4px 4px;
    border-radius: 0.3rem;
}

select content {
    background-color: white
}

label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.8rem;
    color: rgb(155, 152, 152);
}

.date-container {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    margin: 20px;
    width: 9vw;
}

.date-input {
    padding: 10px;
    font-size: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: rgb(218, 10, 10);
    border: none;
    color: white;
}
</style>