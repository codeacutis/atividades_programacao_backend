/* 
*Cotação usada: 
 
*Dólar : R$ 5,14
*Euro : R$ 6,01 

*/

function conversorUSD(a){
    let dolar = 5.14;
    let resultadoUSD = a / dolar; 
    
    return + resultadoUSD.toFixed(2); 
}

function conversorEUR(b) {
    let euro = 6.01;
    let resultadoEUR = b / euro;
    return + resultadoEUR.toFixed(2);
    
}
module.exports ={
    conversorEUR,
    conversorUSD
};