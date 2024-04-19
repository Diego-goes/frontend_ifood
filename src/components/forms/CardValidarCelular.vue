<template>
  <div class="CardValidarCelular">
    <main class="informe-numero">
      <p>Informe o número do seu celular para continuar</p>
      <p class="como-receber-codigo">Como deseja receber seu código?</p>
    </main>

    <div class="inputsCod">
      <label for="primeiroInputCod">
        <input name="primeiroInputCod" class="" type="text" placeholder="0">
        <input class="" type="text" placeholder="0">
        <input class="" type="text" placeholder="0">
        <input class="" type="text" placeholder="0">
        <input class="" type="text" placeholder="0">
        <input class="" type="text" placeholder="0">
      </label>

      <input type="button" value=" Continuar">
      <input type="button" value=" Não recebi meu código">
    </div>
  </div>
</template>
<script>
export default {
  name: "CardValidarCelular"
}
</script>
<style scoped>
* {
  border: 1px red solid;
}

.inputsCod label input {
  width: 3%;
  text-align: center;
  max-width: fit-content;
}
</style>
