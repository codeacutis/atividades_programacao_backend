const express = require('express');
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

const courseValidate = require('../middlewares/validateCurso.js');

route.get('/', courseValidate, (req, res) => {
    const name = req.query.nome;
    const period = req.query.periodo;
    res.send(`Curso: ${name}, Período: ${period}`);
});

module.exports = route;