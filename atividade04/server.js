const http = require('http');
const port = 3000;

const formulario = require('./rotas/formulario.js');
const dobro = require('./rotas/dobro.js')
const saudacao = require('./rotas/saudacao.js')
const soma = require('./rotas/soma.js')

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  
  switch(req.url) {
    case '/':
        formulario(res);
        break;
    case '/dobro':
        dobro(res);
        break;
    case '/saudacao':
        saudacao(res);
        break;
    case '/soma':
        soma(res);
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