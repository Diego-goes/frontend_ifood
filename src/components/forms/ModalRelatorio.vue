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
        <div class="info-relatorio">
            <div class="tabela-relatorio">
                <table border="1">
                    <tr>
                        <th>Restaurante</th>
                        <th>Trabalho</th>
                        <th>Casa</th>
                        <th>Outros</th>
                        <th>Período Inicial</th>
                        <th>Período Final</th>
                        <th>N° de Pedidos</th>
                        <th>Faturamento</th>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>890</td>
                        <td>1.000</td>
                        <td>30</td>
                        <td>10/03/2024</td>
                        <td>30/05/2024</td>
                        <td>1.920</td>
                        <td>R$140.000</td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>890</td>
                        <td>1.000</td>
                        <td>30</td>
                        <td>10/03/2024</td>
                        <td>30/05/2024</td>
                        <td>1.920</td>
                        <td>R$140.000</td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>890</td>
                        <td>1.000</td>
                        <td>30</td>
                        <td>10/03/2024</td>
                        <td>30/05/2024</td>
                        <td>1.920</td>
                        <td>R$140.000</td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>890</td>
                        <td>1.000</td>
                        <td>30</td>
                        <td>10/03/2024</td>
                        <td>30/05/2024</td>
                        <td>1.920</td>
                        <td>R$140.000</td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>890</td>
                        <td>1.000</td>
                        <td>30</td>
                        <td>10/03/2024</td>
                        <td>30/05/2024</td>
                        <td>1.920</td>
                        <td>R$140.000</td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>890</td>
                        <td>1.000</td>
                        <td>30</td>
                        <td>10/03/2024</td>
                        <td>30/05/2024</td>
                        <td>1.920</td>
                        <td>R$140.000</td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>890</td>
                        <td>1.000</td>
                        <td>30</td>
                        <td>10/03/2024</td>
                        <td>30/05/2024</td>
                        <td>1.920</td>
                        <td>R$140.000</td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>890</td>
                        <td>1.000</td>
                        <td>30</td>
                        <td>10/03/2024</td>
                        <td>30/05/2024</td>
                        <td>1.920</td>
                        <td>R$140.000</td>
                    </tr>
                    <tr>
                        <td>Mc Donalds</td>
                        <td>890</td>
                        <td>1.000</td>
                        <td>30</td>
                        <td>10/03/2024</td>
                        <td>30/05/2024</td>
                        <td>1.920</td>
                        <td>R$140.000</td>
                    </tr>
                </table>
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

.tabela-relatorio {
    width: 80%;
    max-width: 750px;
    margin: 20px;
    background: #fcfcfc;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
}

th {
    cursor: pointer;
    font-size: 14px;
    background-color:  rgb(218, 10, 10);
    color: white;
}

td {
    font-size: 13px;
    background-color: white;
}

caption {
    caption-side: top;
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: bold;
}
</style>