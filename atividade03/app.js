const os = require("os")
const fs = require("fs")
const path = require("path");
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("arquivoMovido", (dados) =>{
    console.log(`
        ------------------------------------------------------
        Arquivo "${dados.arquivo}" movido para ${dados.destino}
        Usuário: ${dados.usuario}
        URL do arquivo: ${dados.url}
        -------------------------------------------------------
        `);
});

const pasta = path.join(__dirname, "teste");

function organizarArquivos(pasta, emitter){
    const arquivos = fs.readdirSync(pasta)
    console.log("\nArquivos presentes na pasta: " + arquivos);
    arquivos.forEach((arquivo) => {
        const extensao = path.extname(arquivo).slice(1);
        if (!extensao) return;
        const pastaExtensao = path.join(pasta, extensao);
        if (!fs.existsSync(pastaExtensao)){
            fs.mkdirSync(pastaExtensao);
            console.log("Nova pasta criada: " + extensao);
        }
        const origemArquivo = path.join(pasta, arquivo);
        const destinoArquivo = path.join(pastaExtensao, arquivo)
        
        fs.renameSync(origemArquivo, destinoArquivo);

        emitter.emit("arquivoMovido", { 
            arquivo: arquivo,
            destino: path.relative("C:/Users/jprvb/OneDrive/Documents1/Sistemas de Informação/6º Período/Programação Backend/Atividades", destinoArquivo),
            usuario: os.userInfo().username,
            url: new URL("file://" + path.resolve(destinoArquivo)).href });
    });
}

organizarArquivos(pasta, emitter);