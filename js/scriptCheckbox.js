// Mapeamento dos textos em português e espanhol
const translations = {
    pt: {
        msgPlaceholder: 'Digite seu texto...',
        msgExclamation: 'Apenas letras minúsculas e sem acento.',
        btnCrip: 'Criptografar',
        btnDescrip: 'Descriptografar',
        title: 'Mensagem não encontrada.',
        description: 'Digite um texto que você deseja criptografar ou descriptografar.',
    },
    es: {
        msgPlaceholder: 'Introduce tu texto...',
        msgExclamation: 'Solo letras minúsculas y sin acentos.',
        btnCrip: 'Encriptar',
        btnDescrip: 'Desencriptar',
        title: 'Mensaje no encontrado.',
        description: 'Introduzca el texto que desea cifrar o descifrar.',
    }
};

const languageCheckbox = document.getElementById('language');
languageCheckbox.addEventListener('change', function() {
    const selectedLanguage = languageCheckbox.checked ? 'es' : 'pt';
    updateContent(selectedLanguage);
});

function updateContent(language) {
    console.log(language);
    const textAreaElement = document.getElementById('texto-usuario');
    const msgExclamationElement = document.getElementById('msgExclamation');
    const btnCripElement = document.getElementById('botao-criptografar');
    const btnDescripElement = document.getElementById('botao-descriptografar');
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    if (translations.hasOwnProperty(language)) {
        const translation = translations[language];
        textAreaElement.placeholder = translation.msgPlaceholder;
        msgExclamationElement.textContent = translation.msgExclamation;
        btnCripElement.textContent = translation.btnCrip;
        btnDescripElement.textContent = translation.btnDescrip;
        titleElement.textContent = translation.title;
        descriptionElement.textContent = translation.description;
    }
}
