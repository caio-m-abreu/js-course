let p = document.getElementById("paragrafo");

document.querySelector("#btn").addEventListener("click", function() {
 p.textContent = "Paragrafo atualizado!";
});

document.querySelector("#inputTexto").addEventListener("input", function(e) {
 let texto = e.target.value;
 document.getElementById("outputTexto").textContent = texto;
});

let imagem = document.getElementById("imagem");
document.querySelector("#imagem").addEventListener("mouseover", function() {
    imagem.style.border = "5px solid green";
});