const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const filePath =  path.join(__dirname, './index.html' );
const content = fs.readFileSync(filePath, 'utf8');

app.get('/', (req, res) => {
    res.send(content);
    res.status(200);
});

const courseRoute = require('./routes/curso.js');
const profileRoute = require('./routes/perfil.js');
const assessmentRoute = require('./routes/avaliacao.js');

app.use('/curso', courseRoute);
app.use('/perfil', profileRoute);
app.use('/avaliar', assessmentRoute);

app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});