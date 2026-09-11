const url = require('url');

module.exports = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    res.writeHeader(200, {'Content-Type' : 'text/plain; charset=utf-8'});
    let responseText = '';

    if (queryParams.numero){
        responseText = `O dobro de ${queryParams.numero} é ${parseInt(queryParams.numero, 10)*2}`;
    } else {
        responseText = `Por favor, coloque um número na requisição!`
    }

    res.end(responseText);
}