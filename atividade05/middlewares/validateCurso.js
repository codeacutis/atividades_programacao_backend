
const courseValidate = (req, res, next) => {
    const name = req.query.nome;
    const period = req.query.periodo;

    if(!name || !period) {
        return res.status(400).send('Nome e período são obrigatórios!');
    }

    next();
}

module.exports = courseValidate;