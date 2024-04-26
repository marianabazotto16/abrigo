const readlineSync = require('readline-sync');


let abrigos = [];


function cadastrarAbrigo() {
    console.log("===== CADASTRO DE ABRIGO =====");
    let nome = readlineSync.question("Nome do abrigo: ");
    let endereco = readlineSync.question("Endereço: ");
    let telefone = readlineSync.question("Telefone: ");
    let capacidade = parseInt(readlineSync.question("Capacidade de lotação: "));
    let cidade = readlineSync.question("Cidade: ");

    
    let novoAbrigo = {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        capacidade: capacidade,
        cidade: cidade
    };

   
    abrigos.push(novoAbrigo);
    console.log("Abrigo cadastrado com sucesso!\n");
}


function listarAbrigos() {
    console.log("===============================");
    console.log("LISTAGEM DE ABRIGOS:");
    console.log("===============================");
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");
    console.log("---------------------------------------------------------------------------------------------------------");
    abrigos.forEach((abrigo, index) => {
        console.log(`  ${index.toString().padStart(5, '0')}  | ${abrigo.nome.padEnd(20)} | ${abrigo.endereco.padEnd(40)} | ${abrigo.telefone.padEnd(13)} | ${abrigo.capacidade.toString().padStart(11)} | ${abrigo.cidade}`);
    });
    console.log("---------------------------------------------------------------------------------------------------------\n");
}


function procurarAbrigoPorCidade() {
    console.log("===== PROCURAR ABRIGO POR CIDADE =====");
    let cidade = readlineSync.question("Qual cidade você está? ");

    console.log("===============================");
    console.log("LISTAGEM DE ABRIGOS EM " + cidade.toUpperCase() + ":");
    console.log("===============================");
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");
    console.log("---------------------------------------------------------------------------------------------------------");
    
    let encontrados = abrigos.filter(abrigo => abrigo.cidade.toLowerCase() === cidade.toLowerCase());
    
    if (encontrados.length === 0) {
        console.log("Nenhum abrigo encontrado em " + cidade + ".\n");
    } else {
        encontrados.forEach((abrigo, index) => {
            console.log(`  ${index.toString().padStart(5, '0')}  | ${abrigo.nome.padEnd(20)} | ${abrigo.endereco.padEnd(40)} | ${abrigo.telefone.padEnd(13)} | ${abrigo.capacidade.toString().padStart(11)} | ${abrigo.cidade}`);
        });
        console.log("---------------------------------------------------------------------------------------------------------\n");
    }
}

function main() {
    let opcao;
    do {
        console.log("===== ABRIGOS TEMPORÁRIOS =====");
        console.log("1. Cadastrar abrigo");
        console.log("2. Listar abrigos");
        console.log("3. Procurar abrigo");
        console.log("4. Sair");

        opcao = readlineSync.question("Escolha uma opçao: ");

        switch (opcao) {
            case '1':
                cadastrarAbrigo();
                break;
            case '2':
                listarAbrigos();
                break;
            case '3':
                procurarAbrigoPorCidade();
                break;
            case '4':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.\n");
        }
    } while (opcao !== '4');
}

main();
