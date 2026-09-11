const url = require('url');

module.exports = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    res.writeHeader(200, {'Content-Type' : 'text/plain; charset=utf-8'});
    let responseText = '';

    if (queryParams.nome){
        responseText = `Olá ${queryParams.nome}! Seja bem-vindo!`;
    } else {
        responseText = `Por favor, coloque seu nome na requisição!`
    }

    res.end(responseText);
}