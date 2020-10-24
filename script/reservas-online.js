/* script que busca no banco de dados todos hóspedes que fizeram reserva online e adiciona na tabela */

var botaoBuscar = document.querySelector("#cadastros-online");
botaoBuscar.addEventListener("click", function () {
   
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://next.json-generator.com/api/json/get/EkM36IpwY?indent=2");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            
            var listaDeReservas = JSON.parse(xhr.responseText);

            listaDeReservas.forEach(hospedes => {
                adicionaHospedeNaTabela(hospedes);
            });
            
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
});