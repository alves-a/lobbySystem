/* script verifica se existe erros antes dos dados do formulário de novo hóspede serem adicionados na tabela */

function verificaErrosNoFormulario(dadosCadastrados) {
    var erros = [];

    if (dadosCadastrados.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (dadosCadastrados.documento.length == 0) {
        erros.push("O documento não pode ser em branco");
    }

    if (dadosCadastrados.numero.length == 0) {
        erros.push("O número do quarto não pode ser em branco");
    }
    
    if (!validaData(dadosCadastrados.checkin, dadosCadastrados.checkout)) {
        erros.push("Datas de Check-In / Check-Out inválidas");
    }
    
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(erroAtual => {
        //console.log(erroAtual);
        var li = document.createElement("li");
        li.textContent = erroAtual;
        ul.appendChild(li);
    });
}

function validaData(checkin, checkout) {
    var dataInicial = new Date(checkin);
    var dataFinal = new Date(checkout);

    if (dataInicial <= dataFinal) {
        //alert("Data correta!");
        return true;
    } else {
        //alert("Data incorreta!");
        return false;
    }
}