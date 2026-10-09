const express = require("express");
const router = express.Router();
const Endereco = require("../models/Endereco");
const { validaDadosEndereco } = require("../middlewares/enderecoMiddleware");

router.get("/", async (req, res) => {
  const enderecos = await Endereco.findAll({ order: [["id", "ASC"]] });
  res.render("enderecos", { enderecos });
});

router.get("/novo", (req, res) => {
  res.render("novo-endereco");
});

router.post("/add", validaDadosEndereco, async (req, res) => {
  const { rua, numero, bairro, cidade, estado, cep } = req.body;
  await Endereco.create({ rua, numero, bairro, cidade, estado, cep });
  res.redirect("/enderecos");
});

router.get("/editar/:id", async (req, res) => {
  const endereco = await Endereco.findByPk(req.params.id);
  res.render("editar-endereco", { endereco });
});

router.post("/editar/:id", validaDadosEndereco, async (req, res) => {
  const { rua, numero, bairro, cidade, estado, cep } = req.body;
  await Endereco.update(
    { rua, numero, bairro, cidade, estado, cep },
    { where: { id: req.params.id } }
  );
  res.redirect("/enderecos");
});

router.post("/deletar/:id", async (req, res) => {
  await Endereco.destroy({ where: { id: req.params.id } });
  res.redirect("/enderecos");
});

module.exports = router;
