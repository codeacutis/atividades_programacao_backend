const queryString = require('querystring');

module.exports = (req, res) => {
    if (req.method === 'POST'){
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const dados = queryString.parse(body);
            res.writeHeader(200, {'Content-Type' : 'text/plain; charset=utf-8'});

            let textReturn = '';
            if(dados.moeda === "USD"){
                textReturn = `${parseFloat(dados.valor, 10).toFixed(2)} ${dados.moeda} equivalem a R$${parseFloat(dados.valor, 10).toFixed(2)*5}`;
                res.end(textReturn);
            } else {
                textReturn = `${parseFloat(dados.valor, 10).toFixed(2)} ${dados.moeda} equivalem a R$${parseFloat(dados.valor, 10).toFixed(2)*5.5}`;
                res.end(textReturn);
            }
        });
    } else {
        res.writeHeader(400, {'Content-Type' : 'text/plain; charset=utf-8'});
        res.end("Método não permitido. Por favor, use o método POST!");
    }
}