<template>
    <div class="CardConfirmRecebimento">
        <div class="fundo_modal">
            <div class="modal_confirmar">
                <div class="caixa_confirmar">
                    <div class="fechar_aba">
                        <img src="../assets/close.png" alt="imagem-close"> 
                    </div>
                    <div>
                        <img src="../assets/sacola.png" alt="imagem-sacola"> 
                    </div>
                    <div>
                        <a>Confirme se recebeu o seu pedido</a>
                    </div>
                <div class="botao-confirmar">
                    <input type="button" value="Recebi meu pedido"></input>
                </div>
                <div class="botao-cancelar">
                    <input type="button" value="Cancelar"></input>
                </div>
                </div>
            <div>
            </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'CardConfirmRecebimento',
    data(){
        return {
            resposta: null
        }
    },
    props: {
        pergunta: String
    },
    methods: {
        retornarResposta(event){
            // this.$emit('retornarResposta', value)
            alert(event.target.value)
        }
    }
}
</script>
<style scoped>
.fundo_modal {
    position: fixed;
    background-color: #3e3e3ea5;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.fechar_aba{
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
}

.modal_confirmar {
    background-color: rgba(255, 255, 255, 1);
    display        : flex;
    width          : 350px;
    padding: 15px 10px;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.caixa_confirmar{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.botao-confirmar {
    display: flex;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    margin-top: 1vw;
}

.botao-confirmar input[type='button']{
    background-color: red;
    padding: 1rem 3rem;
    border-radius: 0.3rem;
    color: white;
    border: none;
}

.botao-cancelar {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
}

.botao-cancelar input[type='button']{
    background-color: transparent;
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    color: red;
    border: none;
}

*{
    font-family     : "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
}
</style>