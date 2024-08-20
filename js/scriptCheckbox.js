// Módulo para gestão de internacionalização
const TranslationModule = (function() {
    // Mapeamento dos textos em inglês e espanhol
    const translations = {
        pt: {
            msgPlaceholder: 'Digite seu texto...',
            msgExclamation: 'Apenas letras minúsculas e sem acento.',
            btnCrip: 'Criptografar',
            btnDescrip: 'Descriptografar',
            title: 'Mensagem não encontrada.',
            description: 'Digite um texto que você deseja criptografar ou descriptografar.'
        },
        es: {
            msgPlaceholder: 'Escriba su texto...',
            msgExclamation: 'Solo letras minúsculas y sin acento.',
            btnCrip: 'Encriptar',
            btnDescrip: 'Desencriptar',
            title: 'No se encontró ningún mensaje.',
            description: 'Escriba un texto que desee encriptar o desencriptar.'
        }
    };

    // Função para alterar o idioma
    function changeLanguage(language) {
        const translation = translations[language] || translations.pt;
        document.getElementById('texto-usuario').placeholder = translation.msgPlaceholder;
        document.getElementById('msgExclamation').textContent = translation.msgExclamation;
        document.getElementById('botao-criptografar').textContent = translation.btnCrip;
        document.getElementById('botao-descriptografar').textContent = translation.btnDescrip;
        document.getElementById('title').textContent = translation.title;
        document.getElementById('description').textContent = translation.description;
    }

    // Expondo a interface pública
    return {
        changeLanguage
    };
})();

// Evento para alternar o idioma ao clicar no checkbox
document.getElementById('language').addEventListener('change', function(event) {
    const selectedLanguage = event.target.checked ? 'es' : 'pt';
    TranslationModule.changeLanguage(selectedLanguage);
});
