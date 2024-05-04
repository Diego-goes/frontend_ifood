<template>
    <!-- Lembrar de sempre considerar essa div como o body da página -->
    <div class="container">
        <div class="meio-pagamento">
            <p class="escolher-pagamento">Escolha um meio de pagamento</p>
                <div class="cartao">
                    <img src="../assets/cartaoCredito.png" alt="credito">
                    <p class="credito">Crédito</p>
                    <img src="../assets/cartaoDebito.png" alt="credito">
                    <p class="debito">Débito</p>

                </div>

        </div>

    </div>
</template>
<script>
export default {
    name: "FormasPagamento",
}
</script>
<style scoped>

.container{
    display: flex;
    width: 100%;
    flex-direction: column; 
    
}

.escolher-pagamento{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-top: 30vh;
    color: #3e3e3e;
}

.cartao{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

}

.credito{
    border: 1px solid #3e3e3e;
    padding: 20px 250px;

}


.debito{
    border: 1px solid #3e3e3e;
    padding: 20px 250px;

}

.cartao img{
    height: 50px;
}


</style>