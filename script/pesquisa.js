/* função de busca específica de um hóspede na tabela */

var pesquisa = document.querySelector("#buscador-tabela");

pesquisa.addEventListener("input", function () {
    var hospedes = document.querySelectorAll(".hospede");

    if (this.value.length > 0) {
        hospedes.forEach(hospede => {
            var nomeProcurado = hospede.querySelector(".info-nome").textContent;
            var nomeInput = new RegExp(this.value, "i");
            
            if (nomeInput.test(nomeProcurado)) {
                hospede.classList.remove("invisivel");
            } else {
                hospede.classList.add("invisivel");
            }

        });
    } else {
        hospedes.forEach(hospede => {
           hospede.classList.remove("invisivel"); 
        });
    }
});