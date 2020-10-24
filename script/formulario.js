/* script que pega os valores inseridos no formulário de novo hóspede e adiciona na tabela com um número de reserva gerado automaticamente */

var botaoAdiciona = document.querySelector('#adicionar-hospede');
botaoAdiciona.addEventListener('click', function (event) {
    event.preventDefault();
    
    var formulario = document.querySelector("#form-adiciona");
    var hospede = obtemHospedeDoFormulario(formulario);

    var erros = verificaErrosNoFormulario(hospede);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaHospedeNaTabela(hospede);
    formulario.reset();
    document.querySelector("#mensagens-erro").innerHTML = "";
});

function obtemHospedeDoFormulario(cadastroHospede) {
    var hospede = {
        nome: cadastroHospede.nome.value,
        documento: cadastroHospede.documento.value,
        reserva: geraReserva(),
        quarto: cadastroHospede.quarto.value,
        numero: cadastroHospede.numero.value,
        checkin: cadastroHospede.checkin.value,
        checkout: cadastroHospede.checkout.value
    }
    return hospede;
}

function geraReserva() {
    var oitoDigitos = Math.floor(Math.random()*89999999 + 10000000);
    var quatroDigitos = Math.floor(Math.random()*8999 + 1000);
    var reservaGerada = oitoDigitos + "." + quatroDigitos;
    return reservaGerada;
}