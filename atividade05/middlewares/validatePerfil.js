
const profileValidate = (req, res, next) => {
    const name = req.query.nome;
    const email = req.query.email;
    const age = req.query.idade;

    const ageNumber = Number(age);

    if(name === "" || email === "" || age === "") {
        return res.status(400).send('<p> Todos os valores são obrigatórios! </p>');
    } else if (!(email.contains("@"))){
        return res.status(400).send('<p> O email deve conter "@"! </p>');
    } else if (!(ageNumber>0 && ageNumber.isInteger())){
        return res.status(400).send('<p> Idade deve ser um número inteiro positivo! </p>');
    } else {
        next();
    }
}

module.exports = profileValidate;