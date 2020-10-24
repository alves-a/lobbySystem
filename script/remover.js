/* remove o elemento da lista com duplo click, somente executará caso o elemento em que clicamos seja um <td> */

var tabela = document.querySelector("#tabela-hospedes");

tabela.addEventListener("dblclick", function (linhaClicada) {
   
    if (linhaClicada.target.tagName == "TD") {
       linhaClicada.target.parentNode.classList.add("fadeOut");

       setTimeout(function () {
           linhaClicada.target.parentNode.remove();
       }, 500);
    }
});