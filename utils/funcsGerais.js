// Função para remover atributos vazios de uma lista de objetos:
export function removerAtributosVazios(objeto) {
    // Função recursiva para percorrer todos os atributos do objeto
    function percorrerAtributos(obj) {
        for (const chave in obj) {
            if (typeof obj[chave] === 'object') {
                // Se o valor for um objeto, chama a função recursivamente
                percorrerAtributos(obj[chave]);
            } else if (obj[chave] === '') {
                // Se o valor for vazio, remove o atributo
                delete obj[chave];
            }
        }
    }

    // Chama a função para percorrer o objeto inicial
    percorrerAtributos(objeto);

    return objeto;
}