document.addEventListener('DOMContentLoaded', function() {
    const arquivoInput = document.getElementById('arquivo_input');
    const nomeArquivoSpan = document.getElementById('nome_arquivo');

    document.getElementById('abrir_arquivo').addEventListener('click', function() {
        arquivoInput.click();
    });

    arquivoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        nomeArquivoSpan.textContent = 'Arquivo anexado: ' + file.name;
    });
});


function enviar_mensagem(mensagem){document.getElementById("mensagem").innerHTML= mensagem;}

document.getElementById('meu_botao').addEventListener('click', 
    function(event) {
   
        // Handle the form data
        event.preventDefault();
});

var cont = 0;

function adicionar() {
    let mensagem = document.getElementById("enter").value.trim();
    if (mensagem === "") {
        return;
    }

    document.getElementById("enter").value = "";

    let textofinal = "<div>";
    textofinal += "<table style='border-color: white; border-radius: 10px; background-color: #333; border: solid black; max-width: 50%; '>";
    textofinal += "<tr>";
    textofinal += "<td>" + '👦' + mensagem + "</td>";
    textofinal += "<br>";
    textofinal += "</tr>";
    textofinal += "</table>";
    textofinal += "</div>";

    let p = document.getElementById('mensagem');
    let div = document.createElement('div');
    div.innerHTML = textofinal;
    div.setAttribute('id', 'Novo' + cont);
    p.appendChild(div);
    cont++;
    
    mensagemBot();
    
}

 async function mensagemBot() {
    let mensagemAutomatica = await logMovies();

    let textofinal = "<div>";
    textofinal += "<table style='border-color: white; border-radius: 10px; background-color: #333; border: solid black; float: right; max-width: 50%;'>";
    textofinal += "<tr>";
    textofinal += "<td>" + '🤖' + mensagemAutomatica + "</td>";
    textofinal += "<br>";
    textofinal += "</tr>";
    textofinal += "</table>";
    textofinal += "</div>";

    let p = document.getElementById('mensagem');
    let div = document.createElement('div');
    div.innerHTML = textofinal;
    div.setAttribute('id', 'Novo' + cont);
    p.appendChild(div);
    cont++;
    adicionarConteudo();
}
// function limite(string = ""){
//     string.value = string.value.substring(0,10);
// }

async function logMovies() {
    const response =  await fetch("http://127.0.0.1:5000/response-robot");
    return await response.text();
} 


function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}

// Adicionando conteúdo à div interna
function adicionarConteudo() {
    const conteudoDiv = document.getElementById('mensagem');
    scrollToBottom(document.getElementById('box_chat'));
}
