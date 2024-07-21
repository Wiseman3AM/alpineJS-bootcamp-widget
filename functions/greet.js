function greet(name, languageOption) {
    let greeting;

    switch (languageOption) {
        case 'English':
            greeting = 'Hello';
            break;
        case 'Sepedi':
            greeting = 'Dumelang';
            break;
        case 'Afrikaans':
            greeting = 'Goeie dag';
            break;
        case 'Tshivenda':
            greeting = 'Ndi matsheloni';
            break;
        case 'Sesotho':
            greeting = 'Thobela';
            break;
        case 'Zulu':
            greeting = 'Sawubona';
            break;
        case 'Xitsonga':
            greeting = 'Avuxeni';
            break;
        default:
            greeting = 'Hello'; // Default to English if no match
            break;
    }

    return `${greeting},  ${name}!`;
}

document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    const nameInput = document.getElementById('nameInput');
    const languageSelect = document.getElementById('languageSelect');
    const greetingMessage = document.getElementById('greetingMessage');

    greetButton.addEventListener('click', () => {
        const languageOption = languageSelect.value;
        const name = nameInput.value.trim();

        if (name) {
            greetingMessage.textContent = greet(name, languageOption);
        } else {
            greetingMessage.textContent = 'Please enter your name.';
        }
    });
});
