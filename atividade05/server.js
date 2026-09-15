const express = require('express');
const url = require('url');
const path = require('path');
const fs = require('fs');

const course = require('./routes/curso.js');
const profile = require('./routes/perfil.js');
const assessment = require('./routes/avaliacao.js');

const courseValidate = require('./middlewares/validateCurso.js');
const profileValidate = require('./middlewares/validatePerfil.js');

const app = express();
const PORT = 3000;

const filePath =  path.join(__dirname, './index.html' );
const content = fs.readFileSync(filePath, 'utf8');

app.get('/', (req, res) => {
    res.send(content);
    res.status(200);
});

app.get('/curso', courseValidate, (req, res) => {
    const name = req.query.nome;
    const period = req.query.periodo;
    res.send(`Curso: ${name}, Período: ${period}`);
});

app.post('/perfil', profileValidate, (req, res) => {
    res.status(200);
res.send(`Perfil Criado:
    Nome: ${req.body.name}
    Email: ${req.body.email}
    Idade: ${req.body.age}`);
});

app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});