const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here
checkCharacters();
messageInput.addEventListener('input', checkCharacters);

function checkCharacters() {
    let inputValueLength = messageInput.value.length;
    if (inputValueLength <= MAX_CHARACTERS) {
        messageInput.classList.add("is-valid");
        messageInput.classList.remove("is-invalid");
        messageFeedback.classList.add("valid-feedback");
        messageFeedback.classList.remove("invalid-feedback");
        let charactersLeft = parseInt(MAX_CHARACTERS) - inputValueLength;
        messageFeedback.textContent =  charactersLeft + " character" + addS(charactersLeft) + " left";
    }
    else {
        messageInput.classList.add("is-invalid");
        messageInput.classList.remove("is-valid");
        messageFeedback.classList.add("invalid-feedback");
        messageFeedback.classList.remove("valid-feedback");
        let charactersOver = inputValueLength - parseInt(MAX_CHARACTERS);
        messageFeedback.textContent =  charactersOver + " character" + addS(charactersOver) + " too long";
    }
}