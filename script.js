// Variables obtenidas del DOM
let buttonEncrypt = document.getElementById("encript");
let buttonDecrypt = document.getElementById("decript");
let responseMessage = document.getElementById("responseMessage");
let messageNone = document.getElementById("messageNone");
let responseContainer = document.getElementById("responseContainer");
let copyButton = document.getElementById("copyButton");
const tooltip = document.getElementById('tooltip');
let inputMessage = document.getElementById("inputMessage");

// Función para encriptar el mensaje
function encriptar(stringEcriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEcriptado = stringEcriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEcriptado.includes(matrizCodigo[i][0])) {
            stringEcriptado = stringEcriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEcriptado;
}

// Función para desencriptar el mensaje
function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

// Evento para encriptar
buttonEncrypt.addEventListener("click", () => {
    let inputMessageValue = inputMessage.value;
    responseMessage.innerText = encriptar(inputMessageValue);
    responseContainer.style.display = "flex";
    messageNone.style.display = "none";
});

// Evento para desencriptar
buttonDecrypt.addEventListener("click", () => {
    let inputMessageValue = inputMessage.value;
    responseMessage.innerText = desencriptar(inputMessageValue);
    responseContainer.style.display = "flex";
    messageNone.style.display = "none";
});

// Evento cuando copiamos un texto y lo pegamos en el textarea
copyButton.addEventListener("click", () => {
    const textToCopy = responseMessage.innerText;

    // Copiar el texto y pegarlo en el textarea
    inputMessage.value = textToCopy;

    // Restablecer la sección de salida a su estado inicial
    responseMessage.innerText = "";
    responseContainer.style.display = "none";
    messageNone.style.display = "block";

    // Mostrar el tooltip brevemente
    tooltip.style.visibility = 'visible';
    setTimeout(() => tooltip.style.visibility = 'hidden', 2000);
});

function copyMessage(message) {
    const text = message.innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Texto copiado al portapapeles: ' + text);
        })
        .catch((err) => {
            console.error('Error al copiar texto: ', err);
        });
}
