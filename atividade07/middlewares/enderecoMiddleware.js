const validaDadosEndereco = (req, res, next) => {
  const { rua, numero, bairro, cidade, estado, cep } = req.body;

  if (!rua || !bairro || !cidade || !estado || !cep) {
    return res.status(400).send("Todos os campos obrigatórios devem ser preenchidos.");
  }
  if (numero && !/^\d+$/.test(numero)) {
    return res.status(400).send("O número deve conter apenas dígitos.");
  }
  if (cep && !/^\d{5}-\d{3}$/.test(cep)) {
    return res.status(400).send("O cep deve estar no formato 00000-000.");
  }

  next();
};

module.exports = { validaDadosEndereco };
