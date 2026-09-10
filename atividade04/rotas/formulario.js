const fs = require('fs')

function formReturn(res){
    const filePath = path.join(__dirname, '../index.html')
    fs.readFile(filePath, (err, file) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erro interno do servidor');
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
    });
    res.sendFile(filePath);
}