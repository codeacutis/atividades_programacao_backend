const pool = require("../db");

const validaDadosCliente = (req, res, next) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.render("novo-cliente", {
      error: "Todos os campos são obrigatórios!",
    });
  }
  if (!email.includes('@')) {
    return res.render("novo-cliente", {
      error: "O email deve conter o @",
    });
  }
  next();
};

const buscaTodosClientes = async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM clientes");
    res.locals.clientes = rows;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar clientes.");
  }
};

const buscaClientePorId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM clientes WHERE id = ?", [
      id,
    ]);
    if (rows.length === 0) {
      return res.status(404).send("Cliente não encontrado");
    }
    res.locals.cliente = rows[0];
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar o cliente.");
  }
};

module.exports = {
  validaDadosCliente,
  buscaTodosClientes,
  buscaClientePorId,
};
