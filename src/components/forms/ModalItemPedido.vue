<template>
    <!-- Aqui vai o HTML. Como se fosse o BODY -->
    <div class="fundo_modal">
        <div class="modal_selecionado">
            <div class="caixa_selecionado">
                <div class="fechar_modal">
                    <img src="@/assets/SetaVermelha.png" alt="imagem-close">
                </div>
                <div class="imagem_pedido">
                    <img src="@/assets/imagem_default.png" alt="imagem_produto">
                </div>
                <div class="textos">
                    <a>Nome do Produto</a>
                    <a>Descrição do Produto</a>
                    <a>Valor do Produto</a>
                    <div class="nome_nota">
                        <a>Nome do Restaurante</a>
                        <div class="nota">
                            <a>5.0</a>
                            <img src="@/assets/iconeEstrela.png" alt="icone-estrela" id="icone-estrela">
                        </div>
                    </div>
                    <hr>
                    <a>Algum comentário?</a>
                    <div class="caixa_comentario">
                        <input class="caixa_inserir" type="text" placeholder="Ex: tirar cebola, maionese à parte etc.">
                    </div>
                    <hr>
                    <div class="botao_adicao">
                        <div class="botao_quantidade">
                            <input class="adicao" type="button" value="-">
                            <input class="texto_quantidade" type="text" value="1">
                            <input class="adicao" type="button" value="+">
                        </div>
                        <input class="botao_adcvalor" type="button" value="Adicionar R$100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ModalItemPedido"
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
    z-index: 1;
}

.fechar_modal {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.modal_selecionado {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 800px;
    padding: 50px 7vh;
    padding-bottom: 5vh;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
}

.caixa_selecionado {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
}

.textos {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 18px;
}

.nome_nota {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
}

.caixa_comentario {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.caixa_inserir {
    display: flex;
    width: 100%;
    padding: 15px 170px 15px 15px;
    background-color: rgba(247, 247, 247, 1);
    border-radius: 0.3rem;
    border: none;
}

.nota {
    display: flex;
    align-items: flex-end;
}

#icone-estrela {
    width: 3vh;
}

.botao_adicao {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.botao_quantidade {
    display: flex;
    align-items: center;
    padding: 10px 4vh;
    border: none;
}

.botao_quantidade input {
    border: none;
    outline: none;
}

.texto_quantidade {
    width: 20%;
    text-align: center;
}

.adicao {
    padding: 7px 3vh;
    border-radius: 0.3rem;
    color: white;
    background-color: red;
    font-size: large;
}

.botao_adcvalor {
    padding: 9px 6vh;
    background-color: red;
    border: none;
    color: white;
    border-radius: 0.3rem;
}

hr {
    width: 100%;
    color: lightgray;
}

* {
    font-family: "iFood RC Titulos", iFood RC Textos, helvetica, sans-serif;
}
</style>