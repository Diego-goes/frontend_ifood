<template>
    <div class="pagina-relatorio">
        <div class="header">
            <div class="seletores">
                <label for="lang">Restaurante <select name="" id="oi">
                        <option value="select">Select</option>
                        <option value="coco bambu">Coco Bambu</option>
                        <option value="lig lig">Lig Lig</option>
                        <option value="burger king">Burger King</option>
                        <option value="taco bell">Taco Bell</option>
                        <option value="pecorino">Pecorino</option>
                        <option value="nanica">Nanica</option>
                        <option value="mc donalds">Mc Donalds</option>
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
            <div class="summary-relatorio">
                <div class="cards">
                    <div>
                        <img src="../../assets/cifrao.png" alt="cifrao">
                    </div>
                    <div>
                        <h2>2.3M</h2>
                        <p>Faturamento Total</p>
                    </div>
                </div>
                <div class="cards">
                    <div>
                        <img src="../../assets/pedidos.png" alt="pedidos">
                    </div>
                    <div>
                        <h2>502K</h2>
                        <p>Total de Pedidos</p>
                    </div>
                </div>
                <div class="cards">
                    <div>
                        <img src="../../assets/local.png" alt="local">
                    </div>
                    <div>
                        <h2>Casa</h2>
                        <p>Local mais pedido</p>
                    </div>
                </div>
                <div class="cards">
                    <div>
                        <img src="../../assets/restaurante.png" alt="restaurante">
                    </div>
                    <div>
                        <h2>Mc Donalds</h2>
                        <p>Restaurante mais pedido</p>
                    </div>
                </div>
                <div class="cards">
                    <div>
                        <img src="../../assets/categoria.png" alt="categoria">
                    </div>
                    <div>
                        <h2>Lanches</h2>
                        <p>Categoria mais pedida</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardRelatorio',
}
</script>

<style scoped>
.pagina-relatorio {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 1rem;
    border-top-left-radius: 0;
    padding: 1rem 1rem;
    box-shadow: 5px 5px 3px #c7c7c7,
        0px -5px 3px #f9f9f9;
    gap: 1.5rem;
}

.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.header input,
.header select {
    box-shadow: 0px 6px 0px #bf0808;
    height: 2rem;
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
}

.date-input {
    padding-inline: 0.5rem;
    font-size: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: rgb(218, 10, 10);
    border: none;
    color: white;
}

.info-relatorio {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 4%;
}

.tabela-relatorio {
    width: 100%;
    background-color: rgb(242, 242, 242);
    box-shadow: inset 5px 5px 3px #e1e1e1,
        inset -5px -5px 0px #f9f9f9;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    
}

table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 5px 5px 3px #dcdcdc;
}

th,
td {
    padding: 0.3rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
}

th {
    cursor: pointer;
    font-size: 0.7rem;
    background-color: rgb(218, 10, 10);
    color: white;
}

td {
    font-size: 0.8rem;
    background-color: white;
}

caption {
    caption-side: top;
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: bold;
}

.summary-relatorio {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    gap: 20px;
    width: 15%;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    background-color: rgb(242, 242, 242);
    box-shadow: inset 5px 5px 3px #e1e1e1,
        inset -5px -5px 3px #f9f9f9;
    padding: 1rem 2rem;
}

.cards {
    width: 100%;
    gap: 5%;
    display: flex;
    align-items: center;
    border: 1px solid rgb(218, 10, 10);
    background-color: #da0a0a;
    color: white;
    border-radius: 0.3rem;
    justify-content: flex-start;
    font-size: 0.6rem;
    padding: 2% 0.5rem;
    box-shadow: 0px 6px 0px #bf0808;
}

.cards h2,
.cards p {
    min-width: max-content;
    margin: 0
}

.cards img {
    width: 1rem;
}
</style>