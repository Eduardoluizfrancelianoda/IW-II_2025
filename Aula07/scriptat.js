// Atividade 1
function mostrarMensagem(){
    alert("javaScript é divertido!");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mensagem").addEventListener("click",mostrarMensagem);
})

//Atividade 2
function subTexto(){
    document.getElementById("texto").innerText = "Texto atualizado com JavaScript!";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mudtext").addEventListener("click",subTexto);
})

//Atividade 3
function subCor(){
    document.body.style.backgroundColor = 'red';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mudarcor").addEventListener("click",subCor);
})

//Atividade 4
function inputMensagem(){
    const form = document.getElementById("form");
    const texto = form.inputText.value;

    alert(texto);
}

//Atividade 5
function apagarTexto(){
    document.getElementById("tex5").innerText = ("");
}

//Atividade 6
function criarTexto(){
    const h1 = document.createElement("h1");
    const title = document.createTextNode("Titulo");
    h1.appendChild(title);

    const p = document.createElement("p");
    const node = document.createTextNode("Lorem Ipsun");
    p.appendChild(node);

    const element = document.getElementById("div1");
    element.appendChild(h1);
    element.appendChild(p);
}