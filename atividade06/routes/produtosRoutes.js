const express = require("express");
const router = express.Router();
const pool = require("../db");
const {
  validaDadosProduto,
  buscaTodosProdutos,
  buscaProdutoPorId,
} = require("../middlewares/produtoMiddleware");

router.get("/", buscaTodosProdutos, (req, res) => {
  res.render("produtos");
});

router.get("/novo", (req, res) => {
  res.render("novo-produto");
});

router.post("/add", validaDadosProduto, async (req, res) => {
  const { nome, preco } = req.body;
  try {
    await pool.query("INSERT INTO produtos (nome, preco) VALUES (?, ?)", [
      nome,
      preco,
    ]);
    res.redirect("/produtos");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao inserir produto.");
  }
});

router.get("/detalhe/:id", buscaProdutoPorId, (req, res) => {
  res.render("detalhe-produto");
});

router.put("/editar/:id", validaDadosProduto, async (req, res) => {
  const { nome, preco } = req.body;
  const { id } = req.params;
  try {
    await pool.query("UPDATE produtos SET nome = ?, preco = ? WHERE id = ?", [
      nome,
      preco,
      id,
    ]);
    res.redirect("/produtos");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao atualizar produto.");
  }
});

router.get("/editar/:id", buscaProdutoPorId, (req, res) => {
  res.render("editar-produto");
});

router.delete("/deletar/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM produtos WHERE id = ?", [id]);
    res.redirect("/produtos");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao deletar produto.");
  }
});

module.exports = router;
