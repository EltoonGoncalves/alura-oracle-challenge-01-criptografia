// Regex para validar texto em minúsculas e maiúsculas
const regexMinusculas = /^[a-z]$/;
const regexMaiusculas = /^[a-zA-Z]+\n$/;

// Função para ajustar automaticamente a altura do textarea conforme o conteúdo
function ajustarAlturaTextarea(elemento) { 
    elemento.style.height = "auto";
    elemento.style.height = `${elemento.scrollHeight}px`;
}

// Função para transformar o texto do usuário em minúsculas
function transformarMinusculas() {
    let texto = textoUsuario.value.toLowerCase();
    textoUsuario.value = texto;
}

// Função para testar o texto contra regex e realizar ações com base no resultado
function validarTextoComRegex(texto) {
    texto = texto.replace(/\n/g, "");
    const regexMinusculas = /^[a-z ]+\n?$/;
    const regexMaiusculas = /^[a-zA-Z ]+\n?$/;

    if (regexMinusculas.test(texto)) {
        return true;
    } else if (regexMaiusculas.test(texto)) {
        const desejaTransformar = confirm("Você digitou letras maiúsculas. Gostaria de transformá-las em minúsculas?");
        if (desejaTransformar) {
            transformarMinusculas();
        } else {
            alert("Digite apenas letras minúsculas!");
            return false;
        }
    } else {
        alert("Digite apenas letras minúsculas!");
        return false;
    }
}

// Função para criptografar o texto do usuário
function criptografarTexto() {
    let texto = textoUsuario.value;
    if (validarTextoComRegex(texto)) {
        texto = texto.replace(/e/gi, "enter")
                     .replace(/i/gi, "imes")
                     .replace(/a/gi, "ai")
                     .replace(/o/gi, "ober")
                     .replace(/u/gi, "ufat");
        
        textoSaida.textContent = texto;
        
        if (texto.length > 2) {
            divMensagemNaoOk.style.display = 'none';
            divMensagemOk.style.display = 'flex';
            ajustarAlturaTextarea(textoSaida);
        } else {
            divMensagemNaoOk.style.display = 'flex';
            divMensagemOk.style.display = 'none';
        }
    }
}

// Função para descriptografar o texto do usuário
function descriptografarTexto() {
    let texto = textoUsuario.value;
    if (validarTextoComRegex(texto)) {
        texto = texto.replace(/enter/gi, "e")
                     .replace(/imes/gi, "i")
                     .replace(/ai/gi, "a")
                     .replace(/ober/gi, "o")
                     .replace(/ufat/gi, "u");

        textoSaida.textContent = texto;

        if (texto.length > 2) {
            divMensagemNaoOk.style.display = 'none';
            divMensagemOk.style.display = 'flex';
            ajustarAlturaTextarea(textoSaida);
        } else {
            divMensagemNaoOk.style.display = 'flex';
            divMensagemOk.style.display = 'none';
        }
    }
}

// Função para copiar o texto de saída para a área de transferência
function copiarTexto() {
    textoSaida.select();
    document.execCommand('copy');
}

// Seleciona os elementos relevantes no DOM
const textoUsuario = document.querySelector(".area-texto-usuario");
const textoSaida = document.getElementById("area-texto-saida");
const divMensagemOk = document.querySelector(".mensagem-encontrada");
const divMensagemNaoOk = document.querySelector(".mensagem-nao-encontrada");

// Inicializa o foco no campo de texto do usuário
textoUsuario.focus();

// Adiciona eventos para redimensionar o textarea conforme o usuário digita
textoUsuario.addEventListener("input", () => {
    setTimeout(() => ajustarAlturaTextarea(textoUsuario), 0);
});

textoUsuario.addEventListener("keydown", (event) => {
    setTimeout(() => {
        if (event.key === 'Backspace' || event.key === 'Delete' || event.ctrlKey) {
            ajustarAlturaTextarea(textoUsuario);
        }
    }, 0);
});

// Associa as funções de criptografia, descriptografia e cópia aos botões correspondentes
document.querySelector("#botao-criptografar").onclick = criptografarTexto;
document.querySelector("#botao-descriptografar").onclick = descriptografarTexto;
document.querySelector("#botao-copiar").onclick = copiarTexto;

// Inicializa a exibição das mensagens de sucesso e erro
divMensagemOk.style.display = 'none';
