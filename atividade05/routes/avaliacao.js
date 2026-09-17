const express = require('express');
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

const assessmentValidate = require('../middlewares/validateAvaliacao.js');

route.post('/', assessmentValidate, (req, res) => {
    res.status(200);
    const note = req.body.nota;
    (note>=60) ? res.send('Aprovado!') : res.send('Reprovado!');
});

module.exports = route;