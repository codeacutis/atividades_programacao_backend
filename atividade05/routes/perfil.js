const express = require('express');
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

const profileValidate = require('../middlewares/validatePerfil.js');

route.post('/', profileValidate, (req, res) => {
    const name = req.body.nome;
    const email = req.body.email;
    const age = req.body.idade;
    res.status(200);
    res.send(`Perfil Criado -> Nome: ${name} | Email: ${email} | Idade: ${age}`);
});

module.exports = route;