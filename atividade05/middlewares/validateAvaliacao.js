
const assessmentValidate = (req, res, next) => {
    const note = req.body.nota;

    if (note.trim().length === 0)
        return res.status(400).send("A nota é obrigatória!");

    const noteNumber = Number(note);

    if (!typeof noteNumber === 'number'){
        return res.status(400).send("A nota deve ser um número válido!");
    }
    if ((noteNumber <= 0 || noteNumber >= 100)){
        return res.status(400).send("A nota deve ser entre 0 e 100!");
    }
    
    next();
}

module.exports = assessmentValidate;

