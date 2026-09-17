
const profileValidate = (req, res, next) => {
    const name = req.body.nome;
    const email = req.body.email;
    const age = req.body.idade;

    const ageNumber = Number(age);

    if(name === "" || email === "" || age === "") {
        return res.status(400).send('<p> Todos os valores são obrigatórios! </p>');
    }
    if (!(email.includes('@'))){
        return res.status(400).send('<p> O email deve conter "@"! </p>');
    }
    if (!(ageNumber>0 && Number.isInteger(ageNumber))){
        return res.status(400).send('<p> Idade deve ser um número inteiro positivo! </p>');
    }
    
    next();
}

module.exports = profileValidate;