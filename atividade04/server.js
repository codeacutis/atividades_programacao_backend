const http = require('http');
const port = 3000;
const url = require('url');

const conversor = require('./rotas/conversor.js');
const dobro = require('./rotas/dobro.js')
const saudacao = require('./rotas/saudacao.js')
const soma = require('./rotas/soma.js');
const formulario = require('./rotas/formulario.js');

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  const parsedUrl = url.parse(req.url, true);
  
  switch(parsedUrl.pathname) {
    case "/":
        formulario(req, res);
        break;
    case "/conversor":
        conversor(req, res);
        break;
    case "/dobro":
        dobro(req, res);
        break;
    case "/saudacao":
        saudacao(req, res);
        break;
    case "/soma":
        soma(req, res);
        break;
    default:
      res.statusCode = 404;
      res.end('Página não encontrada');
  }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});