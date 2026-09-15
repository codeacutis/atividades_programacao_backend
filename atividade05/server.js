const express = require('express');
const url = require('url');
const path = require('path');
const fs = require('fs');

const courseValidate = require('./middlewares/validateCurso.js');

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

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});