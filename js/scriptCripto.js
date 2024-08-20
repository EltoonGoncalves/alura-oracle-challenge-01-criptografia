// Módulo para criptografia e descriptografia de mensagens
const CryptoModule = (function() {
    // Função para criptografar o texto
    function encrypt(text) {
        // Implementação da lógica de criptografia
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Função para descriptografar o texto
    function decrypt(text) {
        // Implementação da lógica de descriptografia
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Interface pública
    return {
        encrypt,
        decrypt
    };
})();

// Evento para criptografar o texto ao clicar no botão
document.getElementById('botao-criptografar').addEventListener('click', function() {
    const inputText = document.getElementById('texto-usuario').value;
    const encryptedText = CryptoModule.encrypt(inputText);
    displayMessage(encryptedText);
});

// Evento para descriptografar o texto ao clicar no botão
document.getElementById('botao-descriptografar').addEventListener('click', function() {
    const inputText = document.getElementById('texto-usuario').value;
    const decryptedText = CryptoModule.decrypt(inputText);
    displayMessage(decryptedText);
});

// Função para exibir a mensagem na área de saída
function displayMessage(message) {
    document.getElementById('area-texto-saida').value = message;
   
}