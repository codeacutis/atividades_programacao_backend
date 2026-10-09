require("dotenv").config();
const express = require("express");
const sequelize = require("./db");

// Importar Models e Rotas
const Produto = require("./models/Produto");
const Endereco = require("./models/Endereco");
const produtosRoutes = require("./routes/produtosRoutes");
const enderecosRoutes = require("./routes/enderecosRoutes");

const app = express();
const port = 3000;

// Configurações do Express
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

// Rota principal exibe a tela inicial
app.get("/", (req, res) => {
  res.render("index");
});

// Monta as rotas de produtos e endereços
app.use("/produtos", produtosRoutes);
app.use("/enderecos", enderecosRoutes);

// Sincroniza o banco e inicia o servidor
sequelize
  .sync()
  .then(() => {
    console.log("Tabelas sincronizadas com sucesso.");
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar as tabelas:", error);
  });
