/* script encarregado de montar uma nova linha e as colunas com os dados cadastrados */

function montaTd(dadosCadastrados, classe) {
    var td = document.createElement("TD");
    td.classList.add(classe);
    td.textContent = dadosCadastrados;
    
    return td;
}

function montaTr(dadosHospede) {
    var hospedeTr = document.createElement("TR");
    hospedeTr.classList.add("hospede");

    hospedeTr.appendChild( montaTd(dadosHospede.nome, "info-nome") );
    hospedeTr.appendChild( montaTd(dadosHospede.documento, "info-documento") );
    hospedeTr.appendChild( montaTd(dadosHospede.reserva, "info-reserva") );
    hospedeTr.appendChild( montaTd(dadosHospede.quarto, "info-quarto") );
    hospedeTr.appendChild( montaTd(dadosHospede.numero, "info-numero") );
    hospedeTr.appendChild( montaTd(dadosHospede.checkin, "info-checkin") );
    hospedeTr.appendChild( montaTd(dadosHospede.checkout, "info-checkout") );

    return hospedeTr;
}

function adicionaHospedeNaTabela(dadosHospede) {
    var hospedeTr = montaTr(dadosHospede);
    var tabela = document.querySelector("#tabela-hospedes");
    tabela.appendChild(hospedeTr);
}