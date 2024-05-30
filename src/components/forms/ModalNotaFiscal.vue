<template>
    <div class="fundo-modal">
        <div class="modal-perfil">
            <div class="container">
                <h2> NF-E Hifood</h2>
                <div class="dados-restaurante">
                    <p><b>Nome do restaurante</b></p>
                    <p>Date: 30/05/2024</p>
                </div>
                <div class="pedido-tempo">
                    <p>Time: 17:45</p>
                </div>
                <hr>
                <div class="produto">
                    <p>1- Nome do produto</p>
                    <div class="valor-prato">
                        <p>39,90$</p>
                    </div>
                </div>
                <div class="produto">
                    <p>2- Nome do produto</p>
                    <div class="valor-prato">
                        <p>49,90$</p>
                    </div>
                </div>
                <div class="produto">
                    <p>3- Nome do produto</p>
                    <div class="valor-prato">
                        <p>69,90$</p>
                    </div>
                </div>
                <hr>
                <div class="total">
                    <p><b>TOTAL PAID:</b></p>
                    <div>
                        <p>159,70$</p>
                    </div>
                </div>
                <div class="total">
                    <p><b>Tax</b></p>
                    <div class="elemento-verde">
                        <p>Grátis</p>
                    </div>
                </div>
                <hr>
                <div>
                    <p><b>THANK YOU!</b></p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "ModalNotaFiscal",
}
</script>
<style scoped>
.fundo-modal {
    position: fixed;
    background-color: #3e3e3ea5;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-perfil {
    display: flex;
    width: 30vw;
    min-height: 40vh;
    flex-direction: column;
    background-color: #f7f7be;
    border-radius: 0.3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    padding: 35px;
}

.dados-restaurante{
    display: flex;
    justify-content: space-between;
    margin-bottom: -30px;

}

.pedido-tempo{
    display: flex;
    justify-content: flex-end;
   
}

hr{
    border: none; 
    border-top: 3px dotted rgb(207, 203, 203);
}

.produto{
    display: flex;
    justify-content:space-between;
}

.total{
    display: flex;
    justify-content: space-between;
    margin-bottom: -20px;


}

.elemento-verde{
    color: rgb(62, 177, 62);
}

</style>