const mensagemInicial = `Bem-vindo ao conversor de moedas!
        Aqui, você consegue converter seu dinheiro de real em USD ou EUR!`;

const mensagemSair = `Encerrando...`

const valorInvalido = 'Valor inválido! Por favor, digite outro valor.'

const pedirValor = `Digite o valor em reais: `;

const pedirConversao = `Converter para USD/EUR (digite 'sair' para deixar o sistema): `

const opcaoInvalida = 'Opção inválida! Por favor, digite outra opção.'

const menorZero = 'O valor digitado é menor que 0. Digite outro valor!'

function mostrarResultado(valorReal, resultado, moeda){
    let simbolo = (moeda.toLowerCase() === "usd") ? "$" : "£";
    return `Resultado: RS${valorReal} = ${simbolo}${resultado} ${moeda.toUpperCase()} `;
}

module.exports = {
    mensagemInicial,
    mensagemSair,
    valorInvalido,
    pedirValor,
    pedirConversao,
    opcaoInvalida,
    menorZero,
    mostrarResultado
}