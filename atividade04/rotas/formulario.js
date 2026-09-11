const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filePath = path.join(__dirname, '../index.html');

    fs.readFile(filePath, (err, file) => {
        if(err){
            res.writeHead(500, {"Content-Type" : "text/plain; charset=utf-8"});
            res.end('Erro ao carregar formulário');
        } else {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(file)
    }
    });
}