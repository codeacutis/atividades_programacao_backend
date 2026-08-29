const readline = require('readline');
const conversor = require('./conversor');
const mensagens = require('./mensagens');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function iniciar() {

    rl.question(mensagens.pedirValor, (entradaValor) => {
        if (entradaValor.trim().toLowerCase() === 'sair'){
            console.log(mensagens.mensagemSair);
            rl.close();
            return;
        }

        const valor = parseFloat (entradaValor).toFixed(2);
        if(isNaN(valor)){
            console.log(mensagens.valorInvalido);
            return iniciar();
        } else if (valor < 0.0){
            console.log(mensagens.menorZero);
            return iniciar();
        }

        rl.question(mensagens.pedirConversao, (moedaInput) =>{
            const moeda = moedaInput.trim().toUpperCase();

            if (moeda === 'SAIR') {
                console.log(mensagens.mensagemSair);
                rl.close();
                return;
            }
            if (moeda === "USD") {
                const convertido = conversor.conversorUSD(valor);
                console.log(mensagens.mostrarResultado(valor, convertido, 'USD'));
            } else if (moeda === 'EUR'){
                const convertido = conversor.conversorEUR(valor);
                console.log(mensagens.mostrarResultado(valor, convertido, 'EUR'));
            }else {
                console.log(mensagens.opcaoInvalida);
            }
            iniciar();
        });
    });
    
}
iniciar();
